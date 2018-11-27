<template>
  <div class="prompt-page" v-if="show">
    <div>
      <div class="title">{{title}}</div>
      <div class="describe">{{describe}}</div>
      <div class="bt-list">
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
