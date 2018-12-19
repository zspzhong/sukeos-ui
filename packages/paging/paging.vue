<template>
  <div class="sk-paging">
    <div class="sk-page-items">
      <div class="sk-page-left-page" @click="leftPage()">&lt;</div>
      <div class="sk-page-page-list" :style="{'width': (countPage * 30) + 'px', 'max-width': (showSize * 30) + 'px'}">
        <div :style="{'width': (countPage * 30) + 'px', 'left': '-' + left + 'px'}">
          <div @click="changPage(item, size)" :class="{'active': item === page}" v-for="(item, key) in countPage" :key="key">{{item}}</div>
        </div>
      </div>
      <div class="sk-page-right-page" @click="rightPage()">&gt;</div>
    </div>
    <div>共{{countPage}}页</div>
    <div>{{size}}/页</div>
    <div>{{count}}条数据</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      pagePage: 1,
      left: 0
    }
  },
  props: {
    size: {
      type: Number,
      default: 20
    },
    page: {
      type: Number,
      default: 1
    },
    count: {
      type: Number,
      default: 0
    },
    showSize: {
      type: Number,
      default: 10
    }
  },
  computed: {
    countPage () {
      const allPage = Math.ceil(this.count / this.size)
      return allPage
    },
    countPagePage () {
      const allPage = Math.ceil(this.countPage / this.showSize)
      return allPage
    }
  },
  methods: {
    changPage (page, size) {
      if (page === this.page || page > this.countPage.length || page < 1) return
      this.$emit('changPage', page, size)
    },
    leftPage () {
      if (this.pagePage === 1) return
      this.pagePage--
      this.left = (this.pagePage - 1) * this.showSize * 30
    },
    rightPage () {
      if (this.pagePage === this.countPagePage) return
      this.pagePage++
      if (this.pagePage === this.countPagePage) {
        this.left = this.countPage * 30 - this.showSize * 30
        return
      }
      this.left = (this.pagePage - 1) * this.showSize * 30
    }
  }
}
</script>
