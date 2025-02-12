import { App } from "vue";
import { Config } from "@/interfaces/config.interface";

let config: Config = {
  defaultTags: [
    "a",
    "button",
    "input",
    "router-link",
    "nuxt-link",
    "n-link",
    "RouterLink",
    "NuxtLink",
    "NLink",
  ],
};

const setOptions = (options: Partial<Config>): void => {
  config = { ...config, ...options };
};

let VueInstance: App | null = null;

const setVueInstance = (Vue: App) => {
  VueInstance = Vue;
};

export { config, setOptions, setVueInstance, VueInstance };
