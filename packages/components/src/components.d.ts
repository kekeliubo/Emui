import * as components from "./index";
declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    EmuiButton: typeof components.Button;
    EmuiIcon: typeof components.Icon;
  }
}
export {};
