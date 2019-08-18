<template>
  <div class="sk-picture" :style="{'width': showWidth + 10 + 'px', 'height': showHeight + 10 + 'px'}">
  	<i></i>
    <img :src="showSrc" alt="" :style="{'width': showWidth + 'px', 'height': showHeight + 'px'}">
    <input type="file" @change="changeImage">
    <div class="sk-picture-modal"
    :class="{'sk-picture-modal-none': !show}">
    	<div>
    		<div class="sk-picture-modal-close" @click="close()">X</div>
    		<div class="sk-picture-modal-center">
          <div class="sk-picture-modal-center-img">
            <img :src="imgSrc" alt="">
            <canvas
            id="canvas"
            ref="canvas"
            width="400"
            height="400"
            @mousedown="canvasDown($event)"
            @mousemove="canvasMove($event)"
            @mouseup="canvasUp($event)"
            @mouseleave="canvasLeave($event)"></canvas>
          </div>
          <div class="sk-picture-modal-bt">
            <span @click="post()">确定</span>
          </div>
          <canvas id="imgCanvas" :width="width + 'px'" :height="height + 'px'" ref="imgCanvas"></canvas>
    		</div>
    	</div>
    </div>
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
  data () {
  	return {
  		show: false,
  		file: '',
      canvas: '',
      imgSrc: '',
      rect: [],
      clickState: false,
      poorX: 0,
      poorY: 0,
      type: '',
      showSrc: ''
  	}
  },
  computed: {
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
  mounted () {

  },
  methods: {
    changeImage (e) {
      this.show = true
      this.imgSrc = window.URL.createObjectURL(e.target.files[0])
      this.initRect(0, 0, 400, 400)
      this.canvasInit()
      this.selectRect()
    },
    // 按比例计算矩形
    initRect (x0, y0, x, y) {
      let width = this.width
      let height = this.height
      let xb = x - x0
      let yb = y - y0
      let x1 = xb > 400 ? 400 : xb
      let y1 = height * x1 / width
      if (y1 > 400) {
        y1 = 400
        x1 = y1 * width / height
      }
      this.rect = [x0, y0, x1, y1]
    },
    close () {
      this.clearRect()
    	this.show = false
    },
    canvasInit () {
      this.canvas = this.$refs.canvas
      let ctx = this.canvas.getContext("2d")
      ctx.fillStyle = 'rgba(255, 255, 255, 0.6)'
      ctx.fillRect(0, 0, 400, 400)
    },
    clearRect () {
      // 清空画布
      let ctx = this.canvas.getContext("2d")
      ctx.clearRect(0,0, 400, 400)
    },
    // 生成背景蒙层
    bkRect () {
      let ctx = this.canvas.getContext("2d")
      ctx.fillRect(0, 0, 400, 400)
    },
    // 中间选择矩形
    selectRect () {
      const rect = this.rect
      let ctx = this.canvas.getContext("2d")
      ctx.clearRect(rect[0], rect[1], rect[2], rect[3])
      ctx.lineWidth = 0.5
      ctx.strokeStyle = '#000000'
      ctx.strokeRect(rect[0], rect[1], rect[2], rect[3])

      ctx.lineWidth = 0.5
      ctx.strokeStyle = '#000000'
      ctx.strokeRect(rect[2] + rect[0] - 5, rect[3] + rect[1] - 5, 10, 10)
    },
    canvasDown (e) {
      const x1 = e.offsetX
      const y1 = e.offsetY
      const rect = this.rect

      const size = [rect[2] + rect[0] - 5, rect[3] + rect[1] - 5, 10, 10]

      if (x1 > size[0] && x1 < size[2] + size[0] && y1 > size[1] && y1 < size[3] + size[1]) {
        this.type = 'size'
        this.clickState = true
        this.poorX = x1 - rect[0]
        this.poorY = y1 - rect[1]
      } else if (x1 > rect[0] && x1 < rect[2] + rect[0] && y1 > rect[1] && y1 < rect[3] + rect[1]) {
        this.clickState = true
        this.poorX = x1 - rect[0]
        this.poorY = y1 - rect[1]
        this.type = 'move'
      }
    },
    canvasMove (e) {
      if (!this.clickState) {
        return
      } else if (this.type === 'move') {
        const x = e.offsetX
        const y = e.offsetY
        this.moveRect(x, y)
      } else if (this.type === 'size') {
        const x = e.offsetX
        const y = e.offsetY
        this.sizeRect(x, y)
      }
    },
    // 放大缩小
    sizeRect (x, y) {
      let rect = this.rect
      this.initRect(rect[0], rect[1], x, y)
      this.clearRect()
      this.canvasInit()
      this.selectRect()
    },
    // 生成裁剪完成图片
    post () {
      this.imgCanvas = this.$refs.imgCanvas
      let ictx = this.imgCanvas.getContext("2d")
      ictx.clearRect(0, 0, this.width, this.height)
      let img = new Image()
      img.src = this.imgSrc
      let rect = this.rect
      let this_ = this
      img.onload = function (e) {
        let width = img.width
        let height = img.height

        let jw = rect[2]
        let jh = rect[3]
        let jx = rect[0]
        let jy = rect[1]

        let fd = width > height ? width / 400 : height / 400

        // 区域真实大小
        jw = jw * fd
        jh = jh * fd

        // 区域放大倍速
        let qfd = this_.width / jw

        jw = jw * qfd
        jh = jh * qfd

        jx = jx * fd * qfd
        jy = jy * fd * qfd

        height = height * qfd
        width = width * qfd

        let ix = width > height ? 0 : (height - width) / 2
        let iy = height > width ? 0 : (width - height) / 2

        ictx.drawImage(img, ix-jx, iy-jy, height, width)
        this_.showSrc = this_.imgCanvas.toDataURL("image/png")

      }
    },
    // 移动选中矩形
    moveRect (x, y) {
      let rect = this.rect

      let x1 = x - this.poorX
      let y1 = y - this.poorY

      if (x1 < 0) {
        x1 = 0
      } else if (x1 > 400 - rect[2]) {
        x1 = 400 - rect[2]
      }
      if (y1 < 0) {
        y1 = 0
      } else if (y1 > 400 - rect[3]) {
        y1 = 400 - rect[3]
      }

      rect[0] = x1
      rect[1] = y1
      this.rect = rect
      this.clearRect()
      this.canvasInit()
      this.selectRect()
    },
    canvasUp (e) {
      this.clickState = false
    },
    canvasLeave (e) {
      this.clickState = false
    },
    // 生成矩形框
    fillRect () {
      const rect = this.rect
      let ctx = this.canvas.getContext("2d")
      ctx.fillStyle = 'rgba(255, 255, 255, 0.5)'
      ctx.fillRect(rect[0], rect[1], rect[2], rect[3])
      ctx.lineWidth = 0.5
      ctx.strokeStyle = '#000000'
      ctx.strokeRect(rect[0], rect[1], rect[2], rect[3])
    },
    // 生成图片
    gruntImages () {
      const imgData = this.imgData
      let ctx = this.canvas.getContext("2d")
      let img = new Image()
      img.src = imgData
      let this_ = this
      img.onload = function (e) {
        let width = img.width
        let height = img.height
        if (width > height) {
          height = height * 400 / width
          ctx.drawImage(img, 0, (400 - height) / 2, 400, height)
        } else {
          width = width * 400 / height
          ctx.drawImage(img, (400 - width) / 2, 0, width, 400)
        }
        this_.rect = [100, 100, 200, 200]
        this_.fillRect()
      }
    }
  }
}
</script>
