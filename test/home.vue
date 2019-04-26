<template>
  <div>
    <sk-table :top="top" v-model="items" @click="one"></sk-table>
  </div>
</template>

<script>
export default{
  data () {
    return {
      top: [
        {
          type: 'index',
          width: '40px'
        },
        {
          name: '用户',
          width: '100px',
          key: 'name'
        }
      ],
      items: [
        {
          name: '123',
          active: true
        },
        {
          name: '123',
          active: false
        }
      ]
    }
  },
  methods: {
    one (row) {
      console.log(row)
    }
  }
}
</script>
