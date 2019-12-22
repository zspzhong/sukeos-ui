<template>
  <div class="sk-table">
    <div class="sk-table-top">
      <div v-for="(item, index) in top"
      :key="index"
      :style="{'width': item.width}"
      v-if="item.type !== 'row'">
        <span class="select" v-if="item.type === 'select'"></span>
        <span v-if="item.type === 'index'">#</span>
        <span v-if="item.type !== 'tof' && item.type !== 'index' && item.type !== 'select'">{{item.name}}</span>
      </div>
    </div>
    <div class="sk-table-row"
    v-for="(row, index) in showData"
    :key="index"
    :class="{'active': row.active }"
    @click="openInfo(index)">
      <div v-for="(item, key) in top"
      :key="key"
      :style="{'width': item.width}"
      >
        <div class="box" v-if="item.type === 'box'" :class="{'active': item.active && item.active(row)}"  @click="emit(item.emit, row, item.disabled ? item.disabled(row) : false, key)"></div>
        <div class="select" v-if="item.type === 'select'" @click="select(row)"></div>
        <div v-if="item.type === 'index'" @click="click(row, index)">{{size * (page - 1) + index + 1}}</div>

        <div class="sk-table-body-nickname" v-if="item.type === 'nickname'" @click="click(row, index)">
          <img :src="row[item.img]">
          <span>{{item.key ? row[item.key] : item.value(row)}}</span>
        </div>

        <div class="sk-table-body-qrcode" v-if="item.type === 'qrcode'" @click="click(row, index)">
          <i></i>
        </div>

        <div v-if="!item.type" @click="click(row, index)">
          <span>{{item.key ? row[item.key] : item.value(row)}}</span>
        </div>
      </div>
      <div class="sk-table-body-operation" v-if="operation[0]">
        <span :class="{'disabled': item.disabled && item.disabled(row), 'none': item.none && item.none(row)}"
        @click.stop="emit(item.emit, row, item.disabled ? item.disabled(row) : false, index)"
        v-for="(item, key) in operation"
        :key="key">{{item.name}}</span>
      </div>
      <div v-for="(item, key) in top"
      :key="key"
      class="sk-table-body-type-row"
      v-if="item.type === 'row'">
        <div>{{item.name}}:&nbsp;&nbsp;{{item.key ? row[item.key] : item.value(row)}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeIndex: ''
    }
  },
  props: {
    size: {
      type: Number,
      default: 1
    },
    page: {
      type: Number,
      default: 1
    },
    top: {
      type: Array,
      default: () => {
        return []
      }
    },
    height: {
      type: String,
      default: 'auto'
    },
    operation: {
      type: Array,
      default: () => {
        return []
      }
    },
    data: {
      type: Array,
      default: () => {
        return []
      }
    },
    value: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  computed: {
    showData () {
      if (this.data.length === 0) {
        return this.value
      }
      return this.data
    }
  },
  methods: {
    openInfo (index) {
      if (this.activeIndex === index) {
        this.activeIndex = ''
        return
      }
      this.activeIndex = index
    },
    emit (type, row, disabled, index) {
      if (disabled) return
      this.$emit(type, row, index)
    },
    click (row, index) {
      this.$emit('click', row, index)
    }
  }
}
</script>
