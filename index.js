import SkModal from './packages/modal/modal'
import AddInput from './packages/inputButton/addButton'
import SkInputSearch from './packages/inputButton/search'
import SkInputSelect from './packages/inputButton/select'
import SkPrompt from './packages/prompt/prompt.js'
import Paging from './packages/paging/paging'
import SkForm from './packages/form/form'
import SkLayout from './packages/layout/layout'
import SkTable from './packages/table/table'
import SkBtRow from './packages/button/row'
import SkButtonAdd from './packages/button/button-add'
import SkButton from './packages/button/button'
import SkBtScreening from './packages/button/screening'
import SkSwitch from './packages/switch/switch'
import SkCalendar from './packages/calendar/calendar'
import SkListAdd from './packages/list/add'


const SukeosUi = {
  install: Vue => {
    Vue.component('SkModal', SkModal)
    Vue.component('SkAddInput', AddInput)
    Vue.component('SkPaging', Paging)
    Vue.component('SkForm', SkForm)
    Vue.component('SkLayout', SkLayout)
    Vue.component('SkTable', SkTable)
    Vue.component('SkBtRow', SkBtRow)
    Vue.component('SkButtonAdd', SkButtonAdd)
    Vue.component('SkButton', SkButton)
    Vue.component('SkBtScreening', SkBtScreening)
    Vue.component('SkSwitch', SkSwitch)
    Vue.component('SkCalendar', SkCalendar)
    Vue.component('SkInputSearch', SkInputSearch)
    Vue.component('SkInputSelect', SkInputSelect)
    Vue.component('SkListAdd', SkListAdd)
    Vue.prototype.$skprompt = SkPrompt
  }
}

export default SukeosUi
