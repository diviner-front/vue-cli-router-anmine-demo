<template>
  <div v-set-view :class="login.warp">
  <my-header :title="title" v-if="show" transition="fade"/>
  <router-link to="/set" :class="globalStyle.nextRouter">前往下一页面</router-link>
  </div>
</template>

<script>
import MyHeader from './Header'
import globalStyle from '../assets/scss/global.scss'
import { } from '../services/Global'
export default {
  name: 'hello',
  components: {
    MyHeader
  },
  data () {
    return {
      title: '用户注册/登录',
      globalStyle,
      show: true,
      status: ''
    }
  },
  methods: {
    userInfo () {
      let name = () => ({name: '用户登录'})
      return name()
    }
  },
  created () {

  },
  carescvn () {
    return 's'
  }
}
</script>

<style lang="scss" module="login">
.warp {
  padding: 0px;
  height: 100%;
  background-color: #ffffff;
}

</style>
