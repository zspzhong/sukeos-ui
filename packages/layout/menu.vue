<template>
	<div class="sk-layout-menu">
    <div class="sk-layout-menu-body">
      <div v-for="(item, key) in showMenu"
       :key="key"
       :class="{'active': isOpen[key]}">
        <div class="sk-layout-menu-body-title" @click="showAndHidden(key, item.path)">
          <i :class="item.icon"></i>
          <div>{{item.name}}</div>
        </div>
        <div class="sk-layout-menu-body-list" :class="{'active': path === item.path}">
          <div v-for="(secondary, key2) in item.menu"
          :key="key2" @click="openUrl(secondary.path)">
            <!-- <i :class="secondary.icon"></i> -->
            <div>{{secondary.name}}</div>
          </div>
        </div>
       </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isOpen: []
    }
  },
  props: {
    menu: {
      type: Array,
      default: () => {
        return []
      }
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
    showAndHidden (index, path) {
      if (path) {
        this.$router.push({ path: path })
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
