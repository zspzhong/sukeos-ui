<template>
  <div>
      <div style="margin: 30px;">
        <sk-list-add @select="select" :data="data" v-model="value" :keywords="keywords"></sk-list-add>
      </div>
      <div>
        <sk-form :config="config" v-model="editData"></sk-form>
      </div>
      <div>
        <sk-input-select :select="select" @select="changSelect" :data="data" v-model="keywords"></sk-input-select>
      </div>
  </div>
</template>

<script>
export default{
  data () {
    return {
      data: {
        option: [
          {
            name: '123',
            value: '321'
          },
          {
            name: '1',
            value: '13'
          },
          {
            name: '2',
            value: '244'
          }
        ]
      },
      keywords: '',
      select: ''
    }
  },
  methods: {
    // select (value, name) {
    //   console.log(value, name)
    // },
    changSelect (value) {
      console.log(value)
    }
  }
}
</script>
