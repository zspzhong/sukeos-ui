<template>
  <div class="sk-uploadFile">
    <div class="upload-file-bt">
      <div>点击上传</div>
      <input type="file" @change="changeImage">
    </div>
    <div class="upload-file-src">{{value}}</div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  props: {
    placeholder: {
      type: String,
      default: ''
    },
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
      console.log(file)
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
