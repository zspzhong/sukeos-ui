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
    },
    data: {
      type: Object,
      default: () => {
        return {
          url: '',
          headers: {},
          response: (res) => {
            return res
          }
        }
      }
    }
  },
  methods: {
    changeImage (e) {
      let file = e.target.files[0]
      let param = new FormData()
      let config = {
        headers: {
          'Content-Type': 'multipart/form-data',
          ...this.data.headers
        }
      }
      param.append('file', file, file.name)
      axios.post(this.data.url, param, config).then(response => {
        this.$emit('input', this.data.response(response.data), this.keyname)
      })
    }
  }
}
</script>
