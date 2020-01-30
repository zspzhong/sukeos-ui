<template>
  <div class="sk-form">
    <div class="sk-form-items">
      <div class="sk-form-row"
      v-for="(item, key) in showConfig"
      :key="key"
      :style="{'padding-left': label}"
      :class="{'sk-none': item.none ? item.none(value) : false}">
        <label :style="{'width': label}">{{item.label}}</label>
        <component
        :lable="item.lable"
        :placeholder="item.placeholder"
        :is="'sk-' + item.is"
        :keyname="item.key"
        :value="value[item.key]"
        :rules="item.rules"
        :data="item.data"
        @input="changeValue"></component>
      </div>
    </div>
  </div>
</template>

<script>
import SkInput from './input'
import SkRadio from './radio'
import SkUpload from './upload'
import SkDate from './date'
import SkTextarea from './textarea'
import SkSelect from './select'
import SkTags from './tags'
import SkNumber from './number'
import SkCheckbox from './checkbox'
import SkPicture from './picture'
import SkRegion from './region'
import SkTwoInput from './twoinput'
export default {
  components: {
    SkInput,
    SkRadio,
    SkUpload,
    SkDate,
    SkTextarea,
    SkSelect,
    SkTags,
    SkNumber,
    SkCheckbox,
    SkPicture,
    SkRegion,
    SkTwoInput
  },
  props: {
    config: {
      type: Array,
      default: () => {
        return []
      }
    },
    value: {
      type: Object,
      default: () => {
        return {}
      }
    },
    label: {
      type: String,
      default: '80px'
    }
  },
  computed: {
    showConfig () {
      let arr = []
      for (let i = 0; i < this.config.length; i++) {
        let item = this.config[i]
        if (!(item.none ? item.none(this.value) : false)) {
          arr.push(item)
        }
      }
      return arr
    }
  },
  methods: {
    changeValue (value, key) {
      let data = this.value
      data[key] = value
      this.$emit('input', data)
    }
  }
}
</script>
