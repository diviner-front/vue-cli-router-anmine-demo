<template>
  <div v-set-view :class="login.warp">
  <my-header :title="title" v-if="show" transition="fade"/>
  <div :class="login.content"></div>
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
      title: '我的订单',
      globalStyle,
      show: true,
      status: ''
    }
  },
  methods: {
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
.content {

}
@mixin keyframes($animationName) {
  @-webkit-keyframes #{$animationName} {
    @content;
  }
  @-moz-keyframes #{$animationName} {
    @content;
  }
  @-o-keyframes #{$animationName} {
    @content;
  }
  @keyframes #{$animationName} {
    @content;
  }
}
@include keyframes(bounce-in) {
0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
@include keyframes(bounce-out) {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(0);
  }
}
.fade-transition {
  transition: all 1s ease;
  overflow: hidden;
  visibility: visible;
}

.fade-enter, .fade-leave {
  opacity: 0;
  visibility: hidden;
}

</style>
