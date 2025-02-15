import type { App } from "vue";
import BeIcon from "@/components/Icon/BeIcon.vue";
import "../../berea-ui.css";
import { registerComponent } from "@/utils/plugins";

const Plugin = {
    install(app: App) {
        registerComponent(app, BeIcon);
    }
}

export default Plugin;

export { BeIcon };