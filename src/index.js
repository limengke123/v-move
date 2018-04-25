// import vMove from './v-move'

const install = function (Vue, options = {}) {
  // 指令名字
  const name = options.directiveName || 'move'
  Vue.directive(name, {
    bind (el, binding) {
      console.log(el)
    }
  })
}

export default install
