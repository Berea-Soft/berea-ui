import type { App } from "vue";
import BeButton from "@/components/Button/BeButton.vue";
import "../../berea-ui.css";
import { registerComponent } from "@/utils/plugins";

const Plugin = {
    install(app: App) {
        registerComponent(app, BeButton);
    }
}

export default Plugin;

export { BeButton };