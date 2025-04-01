import { App, type Plugin } from "vue";
import { each } from "lodash-es";

export default function makeInstaller(components: Plugin[]) {
  const install = (app: App) => {
    each(components, (c) => {
      app.use(c);
    });
  };

  return install;
}
[];
