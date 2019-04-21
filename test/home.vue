<template>
  <div>
    <sk-table
      :top="top"
      v-model="items"
      :page="page"
      :size="size"
      :operation="operation"></sk-table>
      <div style="margin: 30px;">
        <sk-list-add @select="select" :data="data" v-model="value" :keywords="keywords"></sk-list-add>
      </div>
      <div>
        <sk-form :config="config" v-model="editData"></sk-form>
      </div>
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
          name: '名称',
          width: '200px',
          key: 'name'
        },
        {
          name: '人数',
          width: '100px',
          key: 'count'
        }
      ],
      items: [
        {
          name: 'one',
          count: '123'
        },
        {
          name: 'one',
          count: '123'
        },
        {
          name: 'one',
          count: '123'
        }
      ],
      page: 1,
      size: 20,
      operation: [
        {
          name: '详情',
          emit: 'details'
        },
        {
          name: '删除',
          emit: 'delete'
        }
      ],
      data: [
        {
          value: '1',
          name: 'one'
        },
        {
          value: '2',
          name: 'ds'
        },
        {
          value: '2',
          name: 'ds'
        },
        {
          value: '2',
          name: 'ds'
        },
        {
          value: '2',
          name: 'ds'
        },
        {
          value: '2',
          name: 'ds'
        },
        {
          value: '1',
          name: 'one'
        },
        {
          value: '2',
          name: 'ds'
        },
        {
          value: '2',
          name: 'ds'
        },
        {
          value: '2',
          name: 'ds'
        },
        {
          value: '2',
          name: 'ds'
        },
        {
          value: '2',
          name: 'ds'
        }
      ],
      value: '123',
      keywords: '',
      editData: {
        endTime: ''
      },
      config: [
        {
          is: 'date',
          label: '结束时间',
          placeholder: '结束时间',
          key: 'endTime',
          data: {
            type: 'minutes'
          }
        }
      ]
    }
  },
  methods: {
    select (value, name) {
      console.log(value, name)
    }
  }
}
</script>
