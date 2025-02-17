import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { AliasOptions, defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Components from "unplugin-vue-components/vite";
import vueDevTools from "vite-plugin-vue-devtools";
import tsconfigPaths from "vite-tsconfig-paths";
import AutoImport from "unplugin-auto-import/vite";
import dts from "vite-plugin-dts";
import pack from "./package.json";

const __dirname = dirname(fileURLToPath(import.meta.url));

const banner = `/*! berea-ui v${
  pack.version
} | (c) ${new Date().getFullYear()} Berea UI | MIT License | github.com/@bereaui/berea-ui */`;

const singleEntry = resolve(__dirname, "src/components/index.ts");

export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    tsconfigPaths(),
    dts({
      rollupTypes: true,
      insertTypesEntry: true,
      outDir: "dist",
      include: ["src/**/*"],
      exclude: ["src/**/*.stories.ts", "src/**/*.test.ts"],
      beforeWriteFile: (filePath, content) => {
        // Para archivos en la raíz
        if (filePath.includes("berea-ui.d.ts")) {
          return { filePath, content };
        }
        // Para componentes individuales
        const newPath = filePath.replace(/\.vue\.d\.ts$/, ".d.ts");
        return { filePath: newPath, content };
      },
      tsconfigPath: "./tsconfig.json",
    }),
    AutoImport({
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue\??/, // .vue
      ],
      dirs: ["src/**"],
      dts: "auto-imports.d.ts",
      vueTemplate: true,
    }),
    Components({
      dirs: ["src/components"],
      extensions: ["vue", "md"],
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      dts: "components.d.ts",
    }),
  ],
  server: {
    host: "0.0.0.0",
    port: 3001,
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern-compiler" as "modern-compiler",
      },
    },
  },
  resolve: {
    alias: {
      "@/": resolve(__dirname, "src/"),
    } as AliasOptions,
    dedupe: ["vue", "berea-ui"],
  },
  build: {
    outDir: "dist",
    lib: {
      entry: singleEntry,
      name: "BereaUi",
      fileName: (format) => `berea-ui.${format === "cjs" ? "cjs" : `${format}.js`}`,
      formats: ["es", "cjs", "umd", "iife"],
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        },
        banner,
        exports: "named",
        dir: "dist",
        assetFileNames: "[name].[ext]",
      },
    },
    emptyOutDir: true,
    sourcemap: true,
  },
  optimizeDeps: {
    include: ["vue"]
  },
});
