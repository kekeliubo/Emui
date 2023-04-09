import * as t from "./src/index.mjs";
import { EmuiButton as s } from "./src/button/index.mjs";
const i = {
  install: (o) => {
    for (let e in t)
      o.use(t[e]);
  }
};
export {
  s as EmuiButton,
  i as default
};
