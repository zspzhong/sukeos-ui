<template>
  <div>
    <sk-table :top="top" v-model="items" @click="one"></sk-table>
    <SkBtScreening :config="config" v-model="data"></SkBtScreening>
  </div>
</template>

<script>
export default{
  data () {
    return {
      data: {
        one: 'one'
      },
      config: [
        {
          type: 'button',
          key: 'one',
          label: '条件',
          data: [
            {
              name: '按钮一',
              value: 'one'
            },
            {
              name: '按钮一',
              value: 'on321e'
            },
            {
              name: '按钮一',
              value: 'o2222ne'
            },
            {
              name: '按钮一',
              value: 'on1321e'
            },
          ]
        },
        {
          type: 'button',
          key: 'one1',
          label: '条件',
          data: [
            {
              name: '按钮一',
              value: 'o213ne'
            },
            {
              name: '按钮一',
              value: 'on321e'
            },
            {
              name: '按钮一',
              value: 'o321ne'
            },
            {
              name: '按钮一',
              value: 'o321ne'
            },
          ]
        }
      ],
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
