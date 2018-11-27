import Modal from './packages/modal/modal'
import AddInput from './packages/inputButton/addButton'
import Prompt from './prompt/prompt.js'
import Paging from './paging/paging'

const SukeosUi = {
  Modal,
  install: Vue => {
    Vue.component('Modal', Modal)
    Vue.component('AddInput', AddInput)
    Vue.component('Paging', Paging)

    Vue.prototype.$prompt = Prompt
  }
}

export default SukeosUi
