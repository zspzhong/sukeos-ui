<template>
  <div>
    <sk-table :top="top" v-model="items" @click="one" :operation="operation" @delete="del"></sk-table>
    <SkBtScreening :config="config" v-model="data"></SkBtScreening>
    <sk-form :config="fConfig" v-model="fData"></sk-form>
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
      ],
      operation: [
        {
          name: '删除',
          emit: 'delete'
        }
      ],
      fConfig: [
        {
          is: 'tags',
          label: 'tags',
          key: 'tags',
          placeholder: '输入需要添加的标签'
        },
        {
          is: 'number',
          label: 'number',
          key: 'number',
          placeholder: '输入需要添加的标签',
          data: {
            min: -1,
            max: 100,
            disable: [2, 3, 5]
          },
          none: row => {
            return row.number === 6
          }
        },
        {
          is: 'checkbox',
          label: '类型',
          placeholder: 'isType',
          key: 'isType',
          data: {
            option: [
              {
                value: 'time',
                name: '限时'
              },
              {
                value: 'number',
                name: '限量'
              }
            ]
          }
        },
        {
          is: 'radio',
          label: '类型',
          placeholder: 'type',
          key: 'type',
          data: {
            option: [
              {
                value: 'time',
                name: '限时'
              },
              {
                value: 'number',
                name: '限量'
              }
            ]
          }
        }
      ],
      fData: {
        tags: ['标签一','标签二'],
        number: 0,
        isType: ['time'],
        type: 'time'
      }
    }
  },
  methods: {
    del (row, index) {
      console.log(index)
    },
    one (row) {
      console.log(row)
    }
  }
}
</script>
