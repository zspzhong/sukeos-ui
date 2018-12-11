<template>
  <div class="sk-layout">
    <Menu :menu="menu" :path="path"></Menu>
    <div class="sk-layout-content">
      <div :class="{'sk-layout-hidden-sub-menu': subMenu.length === 0}">
        <SubMenu :menu="subMenu" :path="path"></SubMenu>
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import Menu from './menu'
import SubMenu from './sub-menu'
export default {
  components: {
    Menu,
    SubMenu
  },
  props: {
    menu: {
      type: Array,
      default: () => {
        return []
      }
    },
    subMenu: {
      type: Array,
      default: () => {
        return []
      }
    },
    path: {
      type: String,
      default: ''
    }
  }
}
</script>