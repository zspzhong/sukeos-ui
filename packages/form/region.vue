<template>
	<div class="sk-region">
		<div>
			<div class="sk-region-value" @click="showSelectModal">
				<div v-if="!temp.province">{{showPlaceholder}}</div>
				<div v-if="temp.province">{{temp.province}}</div>
				<div v-if="temp.city">{{temp.city}}</div>
				<div v-if="temp.area">{{temp.area}}</div>
        <div v-if="temp.province" @click.stop="delValue()" class="sk-region-value-x">X</div>
			</div>
			<div class="sk-region-modal" v-if="modal"  @click="close()">
				<div @click.stop="">
					<div class="sk-region-modal-close" @click="close()">X</div>
					<div class="sk-region-modal-body">
						<div>
							<div class="sk-region-title">
								<div>省</div>
								<div v-if="province.fullname" class="sk-region-title-data">{{province.fullname}}</div>
							</div>
							<div class="sk-region-data-arr" >
								<div v-for="(item, index) in provinceArr" :key="index" @click="provinceFn(item)" :class="{'active': item.fullname === province.fullname}">
									<div>{{item.fullname}}</div>
								</div>
							</div>
						</div>
						<div v-if="showData.type !== 'province' && cityArr.length > 0">
							<div class="sk-region-title">
								<div>市</div>
								<div v-if="city.fullname" class="sk-region-title-data">{{city.fullname}}</div>
							</div>
							<div class="sk-region-data-arr" >
								<div v-for="(item, index) in cityArr" :key="index" @click="cityFn(item)"  :class="{'active': item.fullname === city.fullname}">
									<div>{{item.fullname}}</div>
								</div>
							</div>
						</div>
						<div v-if="showData.type !== 'city' && areaArr.length > 0">
							<div class="sk-region-title">
								<div>区/县</div>
								<div v-if="area.fullname" class="sk-region-title-data">{{area.fullname}}</div>
							</div>
							<div class="sk-region-data-arr" >
								<div v-for="(item, index) in areaArr" :key="index" @click="areaFn(item)" :class="{'active': item.fullname === area.fullname}">
									<div>{{item.fullname}}</div>
								</div>
							</div>
						</div>
					</div>
					<div class="sk-region-modal-bt">
						<div @click="input()">确定</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import json from '../../src/json/region.js'
export default {
  props: {
    placeholder: {
      type: String,
      default: '点击选择地址/区域'
    },
    value: {
      type: Object,
      default: {}
    },
    keyname: {
      type: String,
      default: ''
    },
    rules: {
      type: Array,
      default: () => {
        return []
      }
    },
    data: {
      type: Object,
      default: () => {
        return {
        	type: 'area'
        }
      }
    }
  },
  data () {
  	return {
  		modal: false,
  		areaArr: [],
  		cityArr: [],
  		provinceArr: json.province,
  		area: {},
  		city: {},
  		province: {}
  	}
  },
  computed: {
  	showData () {
  		return this.data
  	},
    temp () {
      return this.value
    },
    showPlaceholder () {
    	return this.placeholder
    }
  },
  methods: {
  	provinceFn (row) {
  		const cidx = row.cidx
      const fullname = row.fullname
      this.province = row
      this.area = {}
      this.city = {}
      if (fullname.indexOf('市') !== -1) {
        this.cityArr = []
        this.city = row
        return
      }
  		this.cityArr = json.city.slice(cidx[0], cidx[1])
  	},
  	cityFn (row) {
  		const cidx = row.cidx
  		this.city = row
  		this.areaArr = json.area.slice(cidx[0], cidx[1])
  	},
  	areaFn (row) {
  		this.area = row
  	},
  	close () {
  		this.modal = false
  	},
    delValue () {
      let data = {}
      if (this.showData.type === 'province') {
        data = {
          province: ''
        }
      } else if (this.showData.type === 'city') {
        data = {
          province: '',
          city: ''
        }
      } else if (this.showData.type === 'area') {
        data = {
          province: '',
          city: '',
          area: ''
        }
      }
      this.$emit('input', data, this.keyname)
    },
    input (event) {
    	let data = {}
      if (this.showData.type === 'province') {
      	data = {
	      	province: this.province.fullname
	      }
      } else if (this.showData.type === 'city') {
      	data = {
	      	province: this.province.fullname,
	      	city: this.city.fullname
	      }
      } else if (this.showData.type === 'area') {
      	data = {
	      	province: this.province.fullname,
	      	city: this.city.fullname,
	      	area: this.area.fullname
	      }
      }
      this.$emit('input', data, this.keyname)
      this.modal = false
    },
    showSelectModal (event) {
    	this.modal = true
    }
  }
}
</script>