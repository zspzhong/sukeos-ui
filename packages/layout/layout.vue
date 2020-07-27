<template>
  <div class="sk-layout" :class="{'sk-layout-show-menu': showMenu}">
    <section class="sk-layout-section">
      <Menu :menu="menu" :path="path" :pathSecond="pathSecond" :topInfo="topInfo"></Menu>
      <section class="sk-layout-content">
        <TopMenu :topInfo="topInfo" @logout="logout"></TopMenu>
        <div class="sk-layout-content-box">
          <!-- <div :class="{'sk-layout-hidden-sub-menu': subMenu.length === 0}"> -->
          <!-- <div class="sk-layout-hidden-sub-menu"> -->
            <!-- <SubMenu :menu="subMenu" :path="path"></SubMenu> -->
            <slot></slot>
          <!-- </div> -->
        </div>
      </section>
    </section>
    
  </div>
</template>

<script>
import TopMenu from './top-menu'
import Menu from './menu'
// import SubMenu from './sub-menu'
export default {
  components: {
    Menu,
    // SubMenu,
    TopMenu
  },
  props: {
    menu: {
      type: Array,
      default: () => {
        return []
      }
    },
    topInfo: {
      type: Object,
      default: () => {
        return {
          name: 'SUKEOS UI',
          username: 'Null'
        }
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
    },
    pathSecond: {
      type: String,
      default: ''
    },
    showMenu: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    logout () {
      this.$emit('logout')
    }
  }
}
</script>
