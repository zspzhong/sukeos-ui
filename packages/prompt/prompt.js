import Vue from 'vue'
import prompt from './prompt.vue'

const defaults = {
  show: false,
  title: '',
  describe: '',
  btName: ''
}

let instance
let callback
let closeCallback
const MessageVueConstructor = Vue.extend(prompt)

MessageVueConstructor.prototype.close = function () {
  var vm = this
  var promise = new Promise((resolve, reject) => {
    if (vm.$el && vm.$el.parentNode) {
      vm.$el.parentNode.removeChild(vm.$el)
    }
    this.$destroy()
    vm.show = false
    closeCallback()
  })
  return promise
}

MessageVueConstructor.prototype.success = function () {
  var vm = this
  var promise = new Promise((resolve, reject) => {
    if (vm.$el && vm.$el.parentNode) {
      vm.$el.parentNode.removeChild(vm.$el)
    }
    this.$destroy()
    vm.show = false
    callback()
  })
  return promise
}

const messageBox = options => {
  if (Vue.prototype.$isServer) return
  options = Object.assign({}, defaults, options)
  let parent = document.body
  instance = new MessageVueConstructor({
    el: document.createElement('div'),
    data: options
  })
  parent.appendChild(instance.$el)
  Vue.nextTick(() => {
    instance.show = true
  })
  return new Promise((resolve, reject) => {
    callback = resolve
    closeCallback = reject
  })
}

export default messageBox
