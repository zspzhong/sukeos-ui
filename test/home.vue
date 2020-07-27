<template>
  <sk-layout :menu="menuFirst" :showMenu="showMenu" :path="path" :subMenu="menuSecond" @logout="logout" :topInfo="topInfo">
    <div style="background-color: #ffffff; padding: 30px">
      <sk-table @click="activeRow" @select="select" :top="top" v-model="items" :operation="operation" @delete="del"></sk-table>
      <SkBtScreening :config="config" v-model="data"></SkBtScreening>
      <sk-form :config="fConfig" v-model="fData"></sk-form>
      <SkButton><div>fdf</div></SkButton>
    </div>
  </sk-layout>
</template>

<script>
export default{
  data () {
    return {
      menuFirst: [
        {
          icon: 'home',
          name: '首页',
          path: '/a',
          menu: []
        },
        {
          icon: 'employee',
          name: '用户管理',
          menu: [
            {
              icon: 'home',
              name: '微信用户',
              path: '/a',
            },
            {
              icon: 'home',
              name: '什么用户',
              path: '/a',
            }
          ]
        },
        {
          icon: 'logs',
          name: '日志管理',
          menu: [
            {
              icon: 'home',
              name: '你好',
              path: '/a',
            },
            {
              icon: 'home',
              name: '你好',
              path: '/a',
            }
          ]
        },
        {
          icon: 'auth',
          name: '权限管理',
          menu: [
            {
              icon: 'home',
              name: '你好',
              path: '/a',
            },
            {
              icon: 'home',
              name: '你好',
              path: '/a',
            }
          ]
        },
        {
          icon: 'user',
          name: '信息管理',
          menu: [
            {
              icon: 'home',
              name: '你好',
              path: '/a',
            },
            {
              icon: 'home',
              name: '你好',
              path: '/a',
            }
          ]
        },
        {
          icon: 'teamwork',
          name: '测试管理',
          menu: [
            {
              icon: 'home',
              name: '你好',
              path: '/a',
            },
            {
              icon: 'home',
              name: '你好',
              path: '/a',
            }
          ]
        }
      ],
      menuSecond: [
        // {
        //   path: '/a/a',
        //   name: '二级菜单'
        // }
      ],
      topInfo: {
        name: 'SUKEOS',
        username: 'ER'
      },
      showMenu: true,
      path: '/a',
      data: {
        one: 'one',
        one1: ''
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
          type: 'box',
          name: '熟悉',
          emit: 'select',
          width: '40px',
          active: row => {
            return !row.active
          }
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
          is: 'twoInput',
          label: 'tags',
          key: 'tags',
          placeholder: '输入需要添加的标签'
        },
        {
          is: 'region',
          label: 'region',
          key: 'region',
          placeholder: '输入需要添加的标签',
          data: {
            type: 'city'
          }
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
                name: '上午'
              },
              {
                value: 'number',
                name: '下午'
              },
              {
                value: 'number',
                name: '全天'
              }
            ]
          }
        },
        {
          is: 'picture',
          label: '封面',
          key: 'imageUrl',
          data: {
            url: '',
            headers: {
              'X-Token': ''
            },
            response: res => {
              return res.result.url
            },
            showWidth: 200,
            showHeight: 100,
            width: 400,
            height: 200
          }
        },
        {
          is: 'uploadFile',
          label: '上传文件',
          data: {
            url: '',
            headers: {},
            response: res => {
              return res.result.url
            }
          }
        },
      ],
      fData: {
        tags: ['标签一','标签二'],
        number: 0,
        isType: ['time'],
        type: 'time',
        picture: '',
        region: {}
      }
    }
  },
  methods: {
    activeRow (row, index) {
      console.log(row)
    },
    del (row, index) {
      console.log(index)
    },
    one (row) {
      console.log(row)
    },
    select (row) {
      this.items[1].active = !this.items[1].active
    }
  }
}
</script>
