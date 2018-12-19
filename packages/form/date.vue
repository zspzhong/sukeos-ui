<template>
  <div class="sk-date" :class="{'active': typeState !== 'hidden'}">
    <div class="date-input" @click="opengDate()">
      <span v-show="value">{{year}}年</span>
      <span v-show="value">{{month}}月</span>
      <span v-show="value">{{day}}日</span>
      <span v-if="type === 'time'">{{hours > 9 ? hours : '0' + hours}}:{{minutes > 9 ? minutes : '0' + minutes}}</span>
      <div class="sk-date-remove" @click.stop="remove()">X</div>
    </div>
    <div class="date-picker">
      <div :class="[typeState]">
        <div class="year-picker">
          <div class="picker-top">
            <!-- <div class="i-left"><</div> -->
            <div>年份</div>
            <!-- <div class="i-right">></div> -->
          </div>
          <div class="year-items">
            <div @click="clickYear(item + startYear)" :class="{'active': year === item + startYear}" v-for="(item, index) in 12" :key="index + 'year'">{{item + startYear}}</div>
          </div>
          <div class="year-chang">
            <div class="i-left" @click="yearChangLeft()"><</div>
            <div class="i-right" @click="yearChangRight()">></div>
          </div>
        </div>
        <div class="month-picker">
          <div class="picker-top">
            <div class="i-left" @click="changeTypeState('year')">&lt;</div>
            <div>{{year}}年</div>
            <!-- <div class="i-right">></div> -->
          </div>
          <div class="month-items">
            <div  @click="clickMonth(item)" :class="{'active': month === item}" v-for="(item, index) in 12" :key="index + 'month'">{{item + '月'}}</div>
          </div>
        </div>
        <div class="day-picker">
          <div class="picker-top">
            <div class="i-left" @click="changeTypeState('month')">&lt;</div>
            <div>{{year}}年{{month}}月</div>
            <!-- <div class="i-right">></div> -->
          </div>
          <div class="day-items">
            <div class="top">日</div>
            <div class="top">一</div>
            <div class="top">二</div>
            <div class="top">三</div>
            <div class="top">四</div>
            <div class="top">五</div>
            <div class="top">六</div>
            <div v-for="(item, index) in lastDays" :key="index + 'lastDays'">{{item}}</div>
            <div @click="clickDay(item)" :class="{'active': day === item}" v-for="(item, index) in days" :key="index + 'days'">{{item}}</div>
            <div v-for="(item, index) in nextDays" :key="index + 'nextDays'">{{item}}</div>
          </div>
        </div>
        <div class="hours-picker">
          <div class="picker-top">
            <div class="i-left" @click="changeTypeState('day')">&lt;</div>
            <div>{{year}}年{{month}}月{{day}}日</div>
            <!-- <div class="i-right">></div> -->
          </div>
          <div class="hours-items">
            <div @click="clickHours(item - 1)" v-for="(item, index) in 24" :key="index + 'hours'">{{item - 1}}</div>
          </div>
        </div>
        <div class="minutes-picker">
          <div class="picker-top">
            <div class="i-left" @click="changeTypeState('hours')">&lt;</div>
            <div>{{year}}年{{month}}月{{day}}日 {{hours}}</div>
            <!-- <div class="i-right">></div> -->
          </div>
          <div class="minutes-items">
            <div @click="clickMinutes(index * 5)" v-for="(item, index) in 12" :key="index + 'minutes'">{{index * 5}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    placeholder: {
      type: String,
      default: ''
    },
    keyname: {
      type: String,
      default: ''
    },
    rules: {
      type: Array,
      default: () => {
        return []
      }
    },
    value: {
      type: Number,
      default: null
    },
    data: {
      type: Object,
      default: () => {
        return {
          type: 'day'
        }
      }
    }
  },
  data () {
    return {
      typeState: 'hidden',
      startYear: new Date().getFullYear() - 8
    }
  },
  computed: {
    type () {
      return this.data.type
    },
    getTime () {
      let value = this.value ? this.value : new Date().getTime()
      return new Date(value).getTime()
    },
    year () {
      let value = this.value ? this.value : new Date().getTime()
      return new Date(value).getFullYear()
    },
    month () {
      let value = this.value ? this.value : new Date().getTime()
      return new Date(value).getMonth() + 1
    },
    day () {
      let value = this.value ? this.value : new Date().getTime()
      return new Date(value).getDate()
    },
    hours () {
      let value = this.value ? this.value : new Date().getTime()
      return new Date(value).getHours()
    },
    week () {
      let value = this.value ? this.value : new Date().getTime()
      return new Date(value).getDay()
    },
    minutes () {
      let value = this.value ? this.value : new Date().getTime()
      return new Date(value).getMinutes()
    },
    lastDays () {
      let value = this.value ? this.value : new Date().getTime()
      const year = new Date(value).getFullYear()
      const month = new Date(value).getMonth()
      const weekFirstDay = new Date(year, month, 1).getDay()
      const nowMonth = new Date(year, month, 1).getTime()
      const lastMonthDay = new Date(parseInt(nowMonth - 1)).getDate()
      let data = []
      for (let i = 0; i < weekFirstDay; i++) {
        data.push(lastMonthDay - weekFirstDay + i + 1)
      }
      return data
    },
    days () {
      let value = this.value ? this.value : new Date().getTime()
      const year = new Date(value).getFullYear()
      const month = new Date(value).getMonth()
      const nextMonth = new Date(year, month + 1, 1).getTime()
      const nowMonthDay = new Date(parseInt(nextMonth - 1)).getDate()
      let data = []
      for (let i = 1; i < (nowMonthDay + 1); i++) {
        data.push(i)
      }
      return data
    },
    nextDays () {
      let value = this.value ? this.value : new Date().getTime()
      const year = new Date(value).getFullYear()
      const month = new Date(value).getMonth()
      const nextMonth = new Date(year, month + 1, 1).getTime()
      const nowMonthDay = new Date(parseInt(nextMonth - 1)).getDate()
      const weekLastDay = new Date(year, month, nowMonthDay).getDay()
      let data = []
      for (let i = 1; i < (7 - weekLastDay); i++) {
        data.push(i)
      }
      return data
    }
  },
  methods: {
    opengDate () {
      if (this.typeState === 'hidden') this.typeState = 'day'
      else this.typeState = 'hidden'
    },
    yearChangLeft () {
      this.startYear = this.startYear - 12
    },
    yearChangRight () {
      this.startYear = this.startYear + 12
    },
    changeTypeState (type) {
      if (type === 'year') {
        let value = this.value ? this.value : new Date().getTime()
        this.startYear = new Date(value).getFullYear() - 8
      }
      this.typeState = type
    },
    clickYear (year) {
      const date = new Date(year, this.month - 1, this.day).getTime()
      this.input(date)
      this.typeState = 'month'
    },
    clickMonth (month) {
      const date = new Date(this.year, month - 1, this.day).getTime()
      this.input(date)
      this.typeState = 'day'
    },
    clickDay (day) {
      const date = new Date(this.year, this.month - 1, day).getTime()
      this.input(date)
      if (this.type === 'time') this.typeState = 'hours'
      else this.typeState = 'hidden'
    },
    clickHours (hours) {
      const date = new Date(this.year, this.month - 1, this.day, hours, this.minutes).getTime()
      this.input(date)
      this.typeState = 'minutes'
    },
    clickMinutes (minutes) {
      const date = new Date(this.year, this.month - 1, this.day, this.hours, minutes).getTime()
      this.input(date)
      this.typeState = 'hidden'
    },
    remove () {
      this.$emit('input', null, this.keyname)
    },
    input (value) {
      this.$emit('input', value, this.keyname)
    }
  }
}
</script>
