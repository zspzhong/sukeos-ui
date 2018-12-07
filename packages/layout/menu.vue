<template>
	<div class="sk-menu">
   <div v-for="(item, key) in menu"
   :key="key"
   @click="openUrl(item.path)"
   :class="('active': path === item.path)">
     <i :class="item.icom"></i>
     <div>{{item.name}}</div>
   </div> 
  </div>
</template>

<script>
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
  methods: {
    openUrl () {
      
    }
  }
</script>
