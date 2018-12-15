import Modal from './packages/modal/modal'
import AddInput from './packages/inputButton/addButton'
import Prompt from './packages/prompt/prompt.js'
import Paging from './packages/paging/paging'
import SkForm from './packages/form/form'
import SkLayout from './packages/layout/layout'
import SkTable from './packages/table/table'

const SukeosUi = {
  Modal,
  install: Vue => {
    Vue.component('SkModal', Modal)
    Vue.component('SkAddInput', AddInput)
    Vue.component('SkPaging', Paging)
    Vue.component('SkForm', SkForm)
    Vue.component('SkLayout', SkLayout)
    Vue.component('SkTable', SkTable)
    Vue.prototype.$prompt = Prompt
  }
}

export default SukeosUi
