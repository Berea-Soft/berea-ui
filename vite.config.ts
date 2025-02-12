import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { AliasOptions, defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Components from "unplugin-vue-components/vite";
import vueDevTools from "vite-plugin-vue-devtools";
import tsconfigPaths from "vite-tsconfig-paths";
import AutoImport from "unplugin-auto-import/vite";
import dts from "vite-plugin-dts";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    tsconfigPaths(),
    dts({
      rollupTypes: true,
      insertTypesEntry: true,
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
        api: "modern-compiler",
      },
    },
  },
  resolve: {
    alias: {
      "@/": resolve(__dirname, "src/"),
    } as AliasOptions,
  },
  build: {
    lib: {
      entry: "src/components/index.ts",
      name: "berea-ui",
      fileName: (format) => `berea-ui.${format === "cjs" ? "cjs": `${format}.js`}`,
      formats: ["es", "cjs", "umd"],
    },
    rollupOptions: {
      external: ["vue"],
      input: "src/components/index.ts",
      output: {
        exports: "named",
        globals: {
          vue: "Vue"
        },
      },
    },
  },
});