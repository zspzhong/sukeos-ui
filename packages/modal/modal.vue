<template>
  <div class="modal-page" v-if="showStatus" @click="close()">
    <div :style="{'width': width}" @click.stop="">
      <div class="model-close" @click="close()">X</div>
      <div class="modal-title">{{title}}</div>
      <div class="model-body" :class="{'foot': foot}">
        <slot></slot>
      </div>
      <div class="model-foot" v-if="foot">
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
