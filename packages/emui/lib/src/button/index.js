'use strict'
Object.defineProperties(exports, {
  __esModule: { value: !0 },
  [Symbol.toStringTag]: { value: 'Module' }
})
const o = require('./button.vue.js'),
  l = (t) => (
    (t.install = (u) => {
      const n = 'emui-button'
      u.component(n, t)
    }),
    t
  ),
  e = l(o.default)
exports.EmuiButton = e
exports.default = e
