<template>
  <div>
    <div id="nav">
      <nav class="barmenu">
        <div class="bar_2" @click="change" :class="{hit: data}" >
          <div class="line"></div>
        </div>
      </nav>
      <div class="menu_bar" :class="{yop: data}">
        <h2>MDB</h2>
        <ul class="icons">
          <li><a class="aicon" href="http://www.facebook.com"><b-icon icon="facebook"></b-icon></a></li>
          <li><a class="aicon" href="http://www.google.com"><b-icon icon="google"></b-icon></a></li>
          <li><a class="aicon" href="http://www.youtube.com"><b-icon icon="youtube"></b-icon></a></li>
          <li><a class="aicon" href="http://www.twitter.com"><b-icon icon="twitter"></b-icon></a></li>
        </ul>
        <ul class="leftnav">
          <li><b-icon icon="menu-button-wide-fill"  class="ion text-white"></b-icon>
            <a href="#">Double navigation</a>
            <b-icon :class="[btndown==true ? 'iom3':'iom']" @click="btndown=!btndown" icon="chevron-down"></b-icon>
          </li>
          <ul :class="[btndown==true ? 'doublenav':'clon']">
            <li @click="addrot(1)"><a>navigator 1</a></li>
            <li @click="addrot(2)"><a>navigator 2</a></li>
            <li @click="addrot(3)"><a>navigator 3</a></li>
            <li @click="addrot(4)"><a>navigator 4</a></li>
            <li @click="addrot(5)"><a>navigator 5</a></li>
          </ul>
            <div class="clear"></div>
          <li><p>MDB</p><a href="#">Getting started</a><b-icon @click="btnget=!btnget"  :class="[btnget==true ? 'iom4':'iom2']" icon="chevron-down"></b-icon></li>
          <ul :class="[btnget==true ? 'doublenav':'clon']" >
            <li><a>Quick Start</a></li>
            <li><a>Texnical support</a></li>
          </ul>
          <li><b-icon icon="layers-fill" class="ion text-white"></b-icon><a href="#">Documentation</a></li>
        </ul>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  data () {
    return {
      data: false,
      btndown: false,
      btnget: false,
      kil: false // bu sahifaga utganda leftbar ichkariga kirishi uchun
    }
  },
  methods: {
    ...mapMutations([
      'addbool'
    ]),
    change () {
      this.data = !this.data
      this.btndown = false
      this.btnget = false
      this.addbool(this.data)
    },
    addrot (userId) {
      this.addbool(this.kil)
      this.data = !this.data
      this.btndown = false
      this.btnget = false
      this.$router.push({ path: `/bar/${userId}` })
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  margin:0;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
  .menu_bar{
    height:95vh;
    width: 15%;
    transition: all 0.8s ease-in-out;
    position: fixed;
    top: 40px;
    left:0;
    z-index: 5;
    background-color: rgba(66, 66, 66, 0.7);
    transform: translateX(-230px);
    &.yop{
      transform: translateX(0);
    }

    h2{
    padding: 60px 55px;
    font-weight:900;
    font-size: 45px;
    color:white;
    text-shadow: 2px 4px 5px black;
     }

    .icons{
      left:0;
      width:60%;
      margin:0 auto;
      width:100%;
      padding: 0;
      display: flex;
      flex-direction: row;
      border-top: 0.2px solid rgb(27, 27, 27);
      border-bottom: 0.2px solid rgb(27, 27, 27);
      li{
        list-style-type: none;
        .aicon{
          color:white;
        }
        color:white;
        margin:0 auto;
        padding:13px 15px;
        cursor:pointer;
        &:nth-child(1):hover{
          color:black;
        }
        &:nth-child(2):hover{
          color:cyan;
        }
        &:nth-child(3):hover{
          color:red;
        }
        &:nth-child(4):hover{
          color:cyan;
        }
      }
    }
    .leftnav{
      margin:30px 0 0 0;
      padding:0;
      li{
        margin:0;
        display:flex;
        list-style:none;
        margin-top: 10px;
        a{
          text-decoration: none;
          color:rgb(211, 210, 210);
        }
        .ion{
          margin:5px 15px;
        }
        .iom{
          margin:5px 10px;
          flex:1;
          color:white;
          cursor: pointer;
          transform: rotate(0deg);
          transition:all 0.4s ease-in-out;
        }
        .iom3{
          margin:5px 10px;
          flex:1;
          color:white;
          cursor: pointer;
          transform: rotate(180deg);
          transition:all 0.4s ease-in-out;
        }
        p{
          font-size:13px;
          margin:5px 10px;
          font-weight:500;
          color:cyan;
        }
        .iom2{
          margin:5px 5px 5px 20px;
          color:white;
          flex:1;
          cursor: pointer;
          transform: rotate(0deg);
          transition:all 0.4s ease-in-out;
        }
        .iom4{
          margin:5px 5px 5px 20px;
          color:white;
          flex:1;
          cursor: pointer;
          transform: rotate(180deg);
          transition:all 0.4s ease-in-out;

        }
      }
      .doublenav{

        background: rgba(96, 96, 96,0.2);
        margin:0;
        padding:0;
        li{

          padding:3px 0;
          a{
            margin-left: 50px;
          }
          &:hover{
            background:rgb(42, 42, 42);
            border-radius: 10px;
          }
        }
      }
      .clon{
        display:none;
      }
      .clear{
        clear: both;
      }

    }
  }
}
.barmenu{
  display:flex;
  .bar_2{
    z-index: 15;
    width:40px;
    height:40px;
    display:flex;
    justify-content: center;
    align-items: center;
    .line{
      height: 3px;
      width:30px;
      border:none;
      background-color:black;
      position: relative;

      &:before,
      &:after{
        content: "";
        width: inherit;
        height: inherit;
        position: absolute;
        background-color: black;
        left:0;
        transition: all 0.3s ease-in-out;
      }
      &:before{
        transform: translateY(-9px);
      }
      &:after{
        transform: translateY(9px);
      }
    }
    &.hit{
      .line{
        background-color: transparent;
        width: 20px;
      }
      .line:before{
        transform: translateY(0) rotate(45deg);
        width: inherit;
        height: inherit;
        transition: all 0.3s ease-in-out;

      }
      .line:after{
        transform: translateY(0) rotate(-45deg);
        width: inherit;
        height: inherit;
        transition: all 0.3s ease-in-out;

      }
    }
  }
}
</style>
