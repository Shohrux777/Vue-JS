<template>
  <div class="fixed" :class="{fot: boollen}">
    <div class="tepa">
      <h1>Vue Js is the best framework </h1>
      <h2>Navigator {{$route.params.id}}</h2>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState([
      'boollen'
    ]),
    ...mapState([
      'navigator'
    ])
  }
}
</script>

<style lang="scss">
*{
  margin:0;
  padding:0;
  box-sizing: border-box;
}
.fixed{
  position: fixed;
  width: 100%;
  right: 0;
  height: 100vh;
  background-image: url("../assets/m_1.png");
  background-size:cover;
  transition: all 0.8s ease-in-out;
  .tepa{
    margin-top: 250px;
    text-align:center;
    h2{
      font-size: 50px;
      font-weight: bold;
    }
  }

  h1{
    font-size: 90px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-weight: 900;
  }
  &.fot{
    width:85%;
    transition: all 0.8s ease-in-out;
  }
}
</style>
