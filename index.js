import Modal from './packages/modal/modal'

const SukeosUi = {
  Modal,
  install: Vue => {
    Vue.component('Modal', Modal)
  }
}

export default SukeosUi
