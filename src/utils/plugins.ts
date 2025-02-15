import type { App, Component } from "vue";

export const registerComponent = (
  app: App,
  component: Component,
  name?: string
) => {
  const componentName = name || component.name;
  if (!componentName)
    throw new Error("Bereaui.registerComponent: missing component name");
  app.component(componentName, component);
};

export const registerComponentProgrammatic = <
  P extends keyof App["config"]["globalProperties"]["$bereaui"],
  C extends App["config"]["globalProperties"]["$bereaui"][P]
>(
  app: App,
  property: P,
  component: C
) => {
  if (!app.config.globalProperties.$bereaui)
    app.config.globalProperties.$bereaui = {};
  app.config.globalProperties.$bereaui[property] = component;
};
