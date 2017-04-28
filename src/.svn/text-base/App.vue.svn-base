<template>
  <div id="app">
  <transition :name="$router.app.transition">
    <router-view></router-view>
   </transition>
  </div>
</template>

<script>

export default {
  name: 'app'
}
</script>
<style>
  * {
    margin: 0;
    padding: 0;
  }

  html,
  body,
  #app {
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
 }
  /*right start*/
  .slide-right-enter-active {
    transition: all .2s ease-in;
  }

  .slide-right-enter {
    opacity: 0.3;
    z-index: 999;
    position: relative;
    top: -100%;
    transform: translate3d(100%, 0, 0);
    -webkit-transform: translate3d(100%, 0, 0);
  }

  .slide-right-leave {
    transform: translate3d(0, 0, 0);
    -webkit-transform: translate3d(0, 0, 0);
  }

  .slide-right-leave-active {
    transition: all .1s ease-in;
    opacity: .2;
    transform: translate3d(-30%, 0, 0);
    -webkit-transform: translate3d(-30%, 0, 0);
  }
  /*right end*/

  /*left start*/

  .slide-left-enter-active {
    transition: all .3s ease-in;
    transform: translate3d(0%, 0, 0);
    -webkit-transform: translate3d(0%, 0, 0);
    z-index: 1998;
  }

  .slide-left-enter {
    opacity: .3;
    transform: translate3d(-20%, 0, 0);
    -webkit-transform: translate3d(-20%, 0, 0);
    z-index: 1998;
  }

  .slide-left-leave {
    transform: translate3d(0, 0, 0);
    -webkit-transform: translate3d(0, 0, 0);
  }

  .slide-left-leave-active {
    transition: all .3s ease-in;
    opacity: .9;
    transform: translate3d(100%, 0, 0);
    -webkit-transform: translate3d(100%, 0, 0);
  }

 /*left end*/

  .slide-fade-enter-active {
    transition: all .5s ease-in;
  }

  .slide-fade-leave-active {
    transition: all .3s ease-in;
  }

  .slide-fade-enter,
  .slide-fade-leave-active {
    padding-left: 0px;
    opacity: 0;
    top: 0;
  }
</style>
