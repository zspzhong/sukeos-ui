<template>
  <div class="sk-form">
    <div class="sk-form-items">
      <div class="sk-form-row"
      v-for="(item, key) in config"
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
export default {
  components: {
    SkInput,
    SkRadio,
    SkUpload,
    SkDate,
    SkTextarea,
    SkSelect
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
  methods: {
    changeValue (value, key) {
      let data = this.value
      data[key] = value
      this.$emit('input', data)
    }
  }
}
</script>
