// eslint-disable
// import vMove from './v-move'

const baseZindex = 999

let index = 0
let max =0
let elArr = []

// function clearEvent () {
//
// }

const install = function (Vue, options = {}) {
  // 指令名字
  /** @namespace options.directiveName */
  const name = options.directiveName || 'move'
  Vue.directive(name, {
    bind (el, binding) {
      let odiv = el
      let disX = 0
      let disY = 0

      el.setAttribute('data-zindex',index)
      el.style.zIndex = baseZindex + index

      // 记录长度,index最后是个固定值
      index++

      // 保存最大值，默认没点击时，最大值就是最后一个，max是根据点击动态变化
      max = index

      function mouseDownHandle (e) {

        if (el.getAttribute('data-zindex') < max) {
          el.setAttribute('data-zindex', ++max - 1)
          el.style.zIndex = baseZindex + max - 1
        }

        // 算出鼠标相对元素的位置
        disX = e.clientX - odiv.offsetLeft;
        disY = e.clientY - odiv.offsetTop;

        //这里的拖动事件只能绑定在外层上，否则快速拖动会有问题
        document.addEventListener('mousemove', mouseMoveHandle)
        document.addEventListener('mouseup', mouseUpHandle)
      }

      function mouseMoveHandle (e) {
        let left = e.clientX - disX
        let top = e.clientY - disY
        // console.log(e.clientX)
        // console.log(odiv.offsetLeft)
        // 绑定元素位置到positionX和positionY上面
        // e.positionX = top
        // e.positionY = left

        // 移动当前元素
        if (odiv.style.position !== 'absolute') {
          odiv.style.position = 'absolute'
        }

        odiv.style.left = left + 'px'
        odiv.style.top = top + 'px'
      }

      function mouseUpHandle () {
        document.removeEventListener('mousemove',mouseMoveHandle)
      }

      odiv.addEventListener('mousedown', mouseDownHandle)
      odiv.addEventListener('mouseenter',function () {
        // document.removeEventListener('mousemove',mousemoveHandle)
      })
    }
  })
}

export default install
