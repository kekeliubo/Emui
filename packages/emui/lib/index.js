'use strict'
Object.defineProperties(exports, {
  __esModule: { value: !0 },
  [Symbol.toStringTag]: { value: 'Module' }
})
const e = require('./src/index.js'),
  i = require('./src/button/index.js'),
  n = {
    install: (t) => {
      for (let u in e) t.use(e[u])
    }
  }
exports.EmuiButton = i.EmuiButton
exports.default = n
