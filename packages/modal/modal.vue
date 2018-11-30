<template>
  <div class="sk-modal-page" v-if="showStatus" @click="close()">
    <div :style="{'width': width}" @click.stop="">
      <div class="sk-modal-close" @click="close()">X</div>
      <div class="sk-modal-title">{{title}}</div>
      <div class="sk-modal-body" :class="{'sk-modal-body-foot': foot}">
        <slot></slot>
      </div>
      <div class="sk-modal-foot" v-if="foot">
        <slot name="foot"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    width: {
      type: String,
      default: '600px'
    },
    value: {
      type: Boolean,
      default: false
    },
    foot: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    showStatus () {
      return this.value
    }
  },
  methods: {
    close () {
      this.$emit('input', false)
    }
  }
}
</script>
