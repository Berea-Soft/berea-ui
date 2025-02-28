import type { Plugin } from "vue";
import BeButton from "@/components/Button/BeButton.vue";
import BeIcon from "@/components/Icon/BeIcon.vue";
import BeLoading from "@/components/Loading/BeLoading.vue";
import BeSwitch from "@/components/Switch/BeSwitch.vue";
import "../berea-ui.css";
import BeDivider from "@/components/Divider/BeDivider.vue";

const components: Record<string, any> = {
  BeButton,
  BeIcon,
  BeLoading,
  BeSwitch,
  BeDivider,
};

const install: Plugin = (app) => {
  Object.entries(components).forEach(([name, component]) => {
    app.component(name, component);
  });
};

const getComponent = (name: string) => {
  const componentName = Object.keys(components).find(
    (key) => key.toLowerCase() === name.toLowerCase().replace(/-/g, "")
  );
  return componentName ? components[componentName] : null;
};

export { getComponent, BeButton, BeIcon, BeLoading, BeSwitch, BeDivider };

export default install;
