import { dirname, resolve, join } from "node:path";
import * as fs from "node:fs";
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
const buildMode = process.env.BUILD_MODE; 

const banner = `/*! berea-ui v${
  pack.version
} | (c) ${new Date().getFullYear()} Berea UI | MIT License | github.com/@bereaui/berea-ui */`;

const baseFolder = "./src/";
const componentsFolder = "components/";

const components = fs
  .readdirSync(baseFolder + componentsFolder)
  .filter((file) =>
    fs.statSync(join(baseFolder + componentsFolder, file)).isDirectory()
  );

const multipleEntries = components.reduce(
  (acc, component) => ({
    ...acc,
    [`components/${component}/index`]: resolve(
      __dirname,
      `src/components/${component}/index.ts`
    ),
  }),
  {}
);

const singleEntry = resolve(__dirname, "src/components/index.ts");

const baseConfig = {
  plugins: [
    vue(),
    vueDevTools(),
    tsconfigPaths(),
    dts({
      rollupTypes: true,
      insertTypesEntry: true,
      outDir: "dist",
      include: ["src/**/*"],
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
  },
};

const config = defineConfig({
  ...baseConfig,
  build: buildMode === "bundle" ? {
    rollupOptions: {
      external: ["vue"],
      input: {
        "berea-ui": singleEntry,
        ...multipleEntries,
      },
      output: [
        {
          format: "es",
          dir: "dist",
          exports: "named",
          globals: {
            vue: "Vue",
          },
          banner,
          entryFileNames: ({ name }) => `${name}.js`,
          assetFileNames: `[name][extname]`,
        },
        {
          format: "cjs",
          dir: "dist",
          exports: "named",
          globals: {
            vue: "Vue",
          },
          banner,
          entryFileNames: ({ name }) => `${name}.cjs`,
          assetFileNames: `[name][extname]`,
        },
      ],
    },
    emptyOutDir: true,
  } : {
    outDir: "dist/modular",
    emptyOutDir: true,
    lib: {
      entry: singleEntry,
      name: "BereaUi",
      fileName: (format) => `berea-ui.${format}.js`,
      formats: ["umd", "iife"],
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        },
        banner,
      },
    },
  },
});

export default config;
