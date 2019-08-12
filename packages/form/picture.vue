<template>
  <div class="sk-picture" :style="{'width': showWidth + 10 + 'px', 'height': showHeight + 10 + 'px'}">
  	<i></i>
    <img :src="value" alt="" :style="{'width': showWidth + 'px', 'height': showHeight + 'px'}">
    <input type="file" @change="changeImage">
    <div class="sk-picture-modal" v-if="show">
    	<div>
    		<div class="sk-picture-modal-close" @click="close()">X</div>
    		<div></div>
    		<div class="center">
					<canvas></canvas>
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
  		file: ''
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
      this.file = e.target.files[0]
      this.show = true
    },
    close () {
    	this.show = false
    }
  }
}
</script>
