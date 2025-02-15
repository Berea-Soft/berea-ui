import type { App } from "vue";
import BeLoading from "@/components/Loading/BeLoading.vue";
import "../../berea-ui.css";
import { registerComponent } from "@/utils/plugins";

const Plugin = {
    install(app: App) {
        registerComponent(app, BeLoading);
    }
}

export default Plugin;

export { BeLoading };