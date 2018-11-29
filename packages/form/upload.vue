<template>
  <div class="sk-upload">
    <i></i>
    <img :src="value" alt="">
    <input type="file" @change="changeImage">
  </div>
</template>

<script>
import axios from 'axios'
export default {
  props: {
    keyname: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
    }
  },
  methods: {
    changeImage (e) {
      let file = e.target.files[0]
      let param = new FormData()
      let config = {
        headers: {'Content-Type': 'multipart/form-data'}
      }
      param.append('file', file, file.name)
      axios.post('/ngxy/api/admin/upload/image', param, config).then(response => {
        this.$emit('input', response.data.result.url, this.keyname)
      })
    }
  }
}
</script>
