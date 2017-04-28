<template>
  <div :class="$style.header" v-show="showHead">
    <h1>{{ title }}</h1>
    <button v-direction :class="[$style.btn__back, globalStyle.icfont]" @click="backHandle"></button>
  </div>
</template>

<script>
import globalStyle from '../assets/scss/global.scss'
import { } from '../services/Global'
export default {
  name: 'Header',
  props: {
    title: {
      type: String,
      default: '用户登录'
    },
    customBackHandle: {
      type: Function
    },
    customBackHandleArgs: {
      type: [String, Boolean, Object]
    }
  },
  data () {
    return {
      globalStyle,
      showHead: true
    }
  },
  methods: {
    backHandle () {
      this.nextDirection('back')
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="scss" module>
.header {
  height: 4rem;
  line-height: 4rem;
  background-color: #ff6913;
  text-align: center;
  font-size: 1.5rem;
  color: #fff;
  position: relative;
  padding-left: 4rem;
  padding-right: 4rem;

  h1 {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
}

.btn__back {
  display: block;
  position: absolute;
  width: 4rem;
  height: 4rem;
  top: 0;
  left: 0;
  background-color: transparent;
  &:after {
    content: '\e60f';
    color: #ffffff;
    position: absolute;
    background-size: 25rem auto;
    background-position: 0 0;
    height: 1.6rem;
    width: rem;
    top: 50%;
    left: 50%;
    margin-top: -.9rem;
    margin-left: -.9rem;
    font-size: 1.8rem;
    font-weight: 600;
  }
}

</style>
