import Modal from './packages/modal/modal'
import AddInput from './packages/inputButton/addButton'

const SukeosUi = {
  Modal,
  install: Vue => {
    Vue.component('Modal', Modal)
    Vue.component('AddInput', AddInput)
  }
}

export default SukeosUi
