import Modal from './packages/modal/modal'
import AddInput from './packages/inputButton/addButton'
import Prompt from './packages/prompt/prompt.js'
import Paging from './packages/paging/paging'
import SkForm from './packages/form/form'
import SkLayoutMenu from './packages/layout/menu'

const SukeosUi = {
  Modal,
  install: Vue => {
    Vue.component('SkModal', Modal)
    Vue.component('SkAddInput', AddInput)
    Vue.component('SkPaging', Paging)
    Vue.component('SkForm', SkForm)
    Vue.component('SkLayoutMenu', SkLayoutMenu)

    Vue.prototype.$prompt = Prompt
  }
}

export default SukeosUi
