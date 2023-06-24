import { defineConfig, DoctorLevel } from "@doctors/core";

export default defineConfig({
  tools: {
    nodeVersion: DoctorLevel.WARN,
    vscodePlugins: ["volar", "Vue.volar", "github"],
  },
});
