import { defineComponent as e, computed as r, openBlock as s, createElementBlock as l, normalizeClass as p, unref as c, renderSlot as m } from "vue";
import "./style/index.css";
const a = e({ name: "emui-button" }), b = /* @__PURE__ */ e({
  ...a,
  props: {
    type: null
  },
  setup(o) {
    const t = o, n = r(() => ({ [`emui-button--${t.type}`]: t.type }));
    return (u, i) => (s(), l("button", {
      class: p(["emui-button", c(n)])
    }, [
      m(u.$slots, "default")
    ], 2));
  }
});
export {
  b as default
};
