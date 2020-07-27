<template>
  <div class="sk-layout-top-menu">
    <!-- <div class="sk-project-name">{{topInfo.name}}</div> -->
    <div class="sk-layout-top-bread-line">
      <!-- <span>
        <span>首页</span>
        <span class="sk-bread-line-interval">></span>
      </span>
      <span>
        <span>首页</span>
      </span> -->
    </div>
    <div class="sk-layout-top-right">
      <div class="sk-layout-top-userInfo" @click="changShow()">
        <i class="sk-layout-top-portrait"></i>
        <span>{{topInfo.username}}</span>
      </div>
    </div>
    <!-- <div class="sk-layout-portrait">
      <div class="sk-layout-portrait-default" @click="changShow()"></div>
    </div> -->
    <div class="sk-layout-portrait-user-info" v-show="isShow" @click="changShow()">
      <div @click.stop="">
        <div class="sk-layout-portrait-user-portrait"></div>
        <div class="sk-layout-portrait-user-name">{{topInfo.username}}</div>
        <div class="sk-layout-portrait-user-logout" @click="logout">退出登录</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isShow: false
    }
  },
  props: {
    topInfo: {
      type: Object,
      default: () => {
        return {
          name: 'SUKEOS UI',
          username: 'Null'
        }
      }
    }
  },
  methods: {
    changShow () {
      this.isShow = !this.isShow
    },
    logout () {
      this.$emit('logout')
    }
  }
}
</script>