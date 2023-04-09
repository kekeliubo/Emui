'use strict'
Object.defineProperties(exports, {
  __esModule: { value: !0 },
  [Symbol.toStringTag]: { value: 'Module' }
})
const e = require('vue')
require('./style/index.css')
const r = e.defineComponent({ name: 'emui-button' }),
  l = e.defineComponent({
    ...r,
    props: { type: null },
    setup(n) {
      const t = n,
        o = e.computed(() => ({ [`emui-button--${t.type}`]: t.type }))
      return (u, s) => (
        e.openBlock(),
        e.createElementBlock(
          'button',
          { class: e.normalizeClass(['emui-button', e.unref(o)]) },
          [e.renderSlot(u.$slots, 'default')],
          2
        )
      )
    }
  })
exports.default = l
