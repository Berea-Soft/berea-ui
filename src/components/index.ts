import type { Plugin } from "vue";
import BeButton from "@/components/Button/BeButton.vue";
import BeIcon from "@/components/Icon/BeIcon.vue";
import BeLoading from "@/components/Loading/BeLoading.vue";
import BeSwitch from "@/components/Switch/BeSwitch.vue";
import "../berea-ui.css";

// Importar dinámicamente todos los componentes Vue en la carpeta "components"
const components: Record<string, any> = {};

// Usar import.meta.glob para cargar todos los archivos .vue
const componentModules = import.meta.glob("../components/**/*.vue");

// Registrar cada componente
for (const path in componentModules) {
  const componentName = path
    .split("/")
    .pop() // Obtener el nombre del archivo
    ?.replace(".vue", "") // Eliminar la extensión .vue
    .replace(/(-\w)/g, (match) => match[1].toUpperCase()) // Convertir nombres como "be-button" a "BeButton"
    .replace(/^\w/, (match) => match.toUpperCase()); // Capitalizar la primera letra

  if (componentName) {
    components[componentName] = componentModules[path];
  }
}

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

export { getComponent, BeButton, BeIcon, BeLoading, BeSwitch };

export default install;
