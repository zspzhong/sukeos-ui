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
    <div class="light" v-for="(item, key) in lastDays" :key="key">
      <div class="day">{{item.day}}</div>
    </div>
    <div v-for="(item, key) in days" :key="key">
      <div class="day">{{item.day}}</div>
      <div class="project" v-if="attend[item.day]">
        <div :class="{'error': !attend[item.day].startState}">{{attend[item.day] ? attend[item.day].startTime : '-'}}</div>
        <div :class="{'error': !attend[item.day].endState}">{{attend[item.day] ? attend[item.day].endTime : '-'}}</div>
      </div>
    </div>
    <div class="light" v-for="(item, key) in nextDays" :key="key">
      <div class="day">{{item.day}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    month: {
      type: Number,
      default: new Date().getMonth() + 1
    },
    year: {
      type: Number,
      default: new Date().getFullYear()
    },
    day: {
      type: Number,
      default: new Date().getDate()
    },
    width: {
      type: String,
      default: '700px'
    },
    attend: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  data () {
    return {
      weekFirstDay: 0,
      weekLastDay: 0,
      nowMonthDay: 0,
      days: {},
      nextDays: {},
      lastDays: {}
    }
  },
  computed: {
    date () {
      const time = new Date(this.year, this.month, 1).getTime()
      return time
    }
  },
  created () {
    this.initCalendar()
  },
  methods: {
    initCalendar () {
      const year = new Date(this.date).getFullYear()
      const month = new Date(this.date).getMonth()
      const nextMonth = new Date(year, month + 1, 1).getTime()
      this.nowMonthDay = new Date(parseInt(nextMonth - 1)).getDate()
      // 月第一天星期几
      this.weekFirstDay = new Date(year, month, 1).getDay()
      // 月最后一天星期几
      this.weekLastDay = new Date(year, month, this.nowMonthDay).getDay()
      // 上个月最后一天
      const nowMonth = new Date(year, month, 1).getTime()
      const lastMonthDay = new Date(parseInt(nowMonth - 1)).getDate()
      // 生成数组
      for (let i = this.weekFirstDay; i > 0; i--) {
        this.lastDays[lastMonthDay - i + 1] = {
          day: lastMonthDay - i + 1
        }
      }
      for (let i = 1; i < (this.nowMonthDay + 1); i++) {
        this.days[i] = {
          day: i,
          project: {}
        }
      }
      for (let i = 1; i < (7 - this.weekLastDay); i++) {
        this.nextDays[i] = {
          day: i
        }
      }
    }
  }
}
</script>