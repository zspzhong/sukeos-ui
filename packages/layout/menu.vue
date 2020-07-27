<template>
	<aside class="sk-layout-menu">
    <div class="sk-layout-menu-body">
      <div class="sk-layout-menu-box">
        <div class="sk-layout-menu-logo">
          <div>
            <img src="" alt="">
            <div>{{topInfo.name}}</div>
          </div>
        </div>
        <div class="sk-layout-menu-items">
          <ul>
            <li
            v-for="(item, key) in showMenu"
            :key="key"
            :class="{'open': isOpen[key],'active': path === item.path}">
              <div class="sk-layout-menu-body-title" @click="showAndHidden(key, item)">
                <div>
                  <i :class="item.icon"></i>
                  <span>{{item.name}}</span>
                </div>
                <i class="sk-layout-menu-submenu-arrow" v-show="item.menu.length > 0"></i>
              </div>
              <ul class="sk-layout-menu-body-list">
                <li
                v-for="(secondary, key2) in item.menu"
                :key="key2"
                @click="openUrl(secondary.path)"
                :class="{'active': pathSecond === secondary.path}">
                  <div>{{secondary.name}}</div>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      
      <!-- <div v-for="(item, key) in showMenu"
       :key="key"
       :class="{'open': isOpen[key],'active': path === item.path}">
        <div class="sk-layout-menu-body-title" @click="showAndHidden(key, item)">
          <i :class="item.icon"></i>
          <div>{{item.name}}</div>
        </div>
        <div class="sk-layout-menu-body-list">
          <div v-for="(secondary, key2) in item.menu"
          :key="key2" @click="openUrl(secondary.path)"
          :class="{'active': pathSecond === secondary.path}">
            <i :class="secondary.icon"></i>
            <div>{{secondary.name}}</div>
          </div>
        </div>
       </div> -->
    </div>
  </aside>
</template>

<script>
export default {
  data () {
    return {
      isOpen: []
    }
  },
  props: {
    topInfo: {
      type: Object,
      default: () => {
        return {
          name: 'SUKEOS UI',
          username: 'Null'
        }
      }
    },
    menu: {
      type: Array,
      default: () => {
        return []
      }
    },
    pathSecond: {
      type: String,
      default: ''
    },
    path: {
      type: String,
      default: ''
    }
  },
  computed: {
    showMenu () {
      return this.menu
    }
  },
  created () {
    let isOpen = []
    this.showMenu.forEach(item => {
      let status = false
      isOpen.push(status)
    })
    this.isOpen = isOpen
  },
  methods: {
    showAndHidden (index, row) {
      if (row.menu.length === 0) {
        this.$router.push({ path: row.path })
        return
      }
      let data = JSON.parse(JSON.stringify(this.isOpen))
      data[index] = !data[index]
      this.isOpen = data
    },
    openUrl (path) {
      // console.log(path)
      this.$router.push({ path: path })
    }
  }
}
</script>
