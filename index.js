import Modal from './packages/modal/modal'
import AddInput from './packages/inputButton/addButton'
import Prompt from './packages/prompt/prompt.js'
import Paging from './packages/paging/paging'
import SkForm from './packages/form/form'

const SukeosUi = {
  Modal,
  install: Vue => {
    Vue.component('SkModal', Modal)
    Vue.component('SkAddInput', AddInput)
    Vue.component('SkPaging', Paging)
    Vue.component('SkForm', SkForm)

    Vue.prototype.$prompt = Prompt
  }
}

export default SukeosUi
