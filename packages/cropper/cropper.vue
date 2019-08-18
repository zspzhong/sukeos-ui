<template>
  <div class="sk-cropper">
  	<div class="sk-cropper-box">
  		{{imgSrc}}
      <canvas id="canvas" ref="canvas" width="400" height="400"></canvas>
    </div>
  </div>
</template>

<script>
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
  data () {
  	return {
  		show: false,
  		file: '',
      canvas: ''
  	}
  },
  computed: {
  	imgSrc () {
  		if (this.value === '') {
  			this.drawToCanvas(this.value)
  		}
  		return this.value
  	},
  	width () {
  		return this.data.width ? this.data.width : 100
  	},
  	height () {
  		return this.data.height ? this.data.height : 100
  	},
  	showWidth () {
  		return this.data.showWidth ? this.data.showWidth : 100
  	},
  	showHeight () {
  		return this.data.showHeight ? this.data.showHeight : 100
  	}
  },
  methods: {
    drawToCanvas (imgData) {
      this.canvas = this.$refs.canvas
      let ctx = this.canvas.getContext("2d")
      let img = new Image()
      img.src = imgData
      img.onload = function () {
        ctx.drawImage(img,0,0, 400, 400)
        console.log(ctx)
      }
      console.log(img)
    }
  }
}
</script>
