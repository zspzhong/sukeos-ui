<template>
  <div class="sk-prompt" v-if="show">
    <div>
      <div class="sk-prompt-title">{{title}}</div>
      <div class="sk-prompt-describe">{{describe}}</div>
      <div class="sk-prompt-bt-list">
        <div @click="success()">{{btName}}</div>
        <div @click="close()">取消</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      show: false,
      title: '',
      describe: '',
      btName: ''
    }
  }
}
</script>
