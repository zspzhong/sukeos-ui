<template>
  <div class="sk-calendar-page"
  :style="{
    'width': width
  }">
    <div class="calendar-date">{{year}}年{{month}}月</div>
    <div class="top">日</div>
    <div class="top">一</div>
    <div class="top">二</div>
    <div class="top">三</div>
    <div class="top">四</div>
    <div class="top">五</div>
    <div class="top">六</div>
    <div class="light" v-for="(item, key) in lastDays" :key="'lastDays' + key">
      <div class="day">{{item.day}}</div>
    </div>
    <div v-for="(item, key) in days" :key="'days' + key">
      <div class="day">{{item.day}}</div>
      <div class="project" v-if="data[item.day]">
        <div v-for="(row, index) in data[item.day]"
        :key="'data' + index"
        :class="row.type">{{row.value}}</div>
      </div>
    </div>
    <div class="light" v-for="(item, key) in nextDays" :key="'nextDays' + key">
      <div class="day">{{item.day}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Number,
      default: new Date().getTime()
    },
    day: {
      type: Number,
      default: new Date().getDate()
    },
    width: {
      type: String,
      default: '800px'
    },
    data: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  computed: {
    year () {
      return new Date(this.value).getFullYear()
    },
    month () {
      return new Date(this.value).getMonth() + 1
    },
    weekFirstDay () {
      return new Date(this.year, this.month - 1, 1).getDay() || 0
    },
    nowMonthDay () {
      const nextMonth = new Date(this.year, this.month, 1).getTime()
      return new Date(parseInt(nextMonth - 1)).getDate() || 0
    },
    weekLastDay () {
      return new Date(this.year, this.month - 1, this.nowMonthDay).getDay() || 0
    },
    lastMonthDay () {
      const nowMonth = new Date(this.year, this.month - 1, 1).getTime()
      return new Date(parseInt(nowMonth - 1)).getDate() || 0
    },
    lastDays () {
      // 月第一天星期几
      const lastDays = {}
      for (let i = this.weekFirstDay; i > 0; i--) {
        lastDays[this.lastMonthDay - i + 1] = {
          day: this.lastMonthDay - i + 1
        }
      }
      return lastDays
    },
    days () {
      const days = {}
      for (let i = 1; i < (this.nowMonthDay + 1); i++) {
        days[i] = {
          day: i,
          project: {}
        }
      }
      return days
    },
    nextDays () {
      const nextDays = {}
      for (let i = 1; i < (7 - this.weekLastDay); i++) {
        nextDays[i] = {
          day: i
        }
      }
      return nextDays
    }
  },
  methods: {}
}
</script>