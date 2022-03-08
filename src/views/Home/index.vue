<template>
  <div class="home">
    <vue-particles
      color="#fff"
      :particleOpacity="0.7"
      :particlesNumber="60"
      shapeType="circle"
      :particleSize="4"
      linesColor="#fff"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="150"
      :moveSpeed="2"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
      class="lizi"
    >
    </vue-particles>
    <div class="nav">
      <div class="header" @mouseenter="Mask()" @mouseleave="removeMask()">
        <div ref="head" @click="to('/all')"></div>
        <a href="javascript:;;">
          <img src="@/assets/fengxian.png" alt="" />
          <span>电商综合数据</span>
        </a>
      </div>
      <div class="contain">
        <ul>
          <li
            v-for="(obj, index) in objList"
            :key="index"
            @mouseenter="addMask(index)"
            @mouseleave="deleteMask(index)"
          >
            <div ref="lis" @click="to(obj.path)"></div>
            <a href="javascript:;;" target="_blank">
              <img :src="obj.url" :alt="obj.title" />
              <span>{{ obj.title }}</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <!-- <Nav /> -->
  </div>
</template>

<script>
import img1 from "@/assets/jinrong.png";
export default {
  name: "HomeIndex",

  data () {
    return {
      objList: [
        {
          url: img1,
          title: "抖音大数据",
          path: "/douyin",
        },
        {
          url: img1,
          title: "淘宝大数据",
          path: "/taobao",
        },
        {
          url: img1,
          title: "拼多多大数据",
          path: "/pdd",
        },
        {
          url: img1,
          title: "京东大数据",
          path: "/jingdong",
        },
        {
          url: img1,
          title: "腾讯大数据",
          path: "/tencent",
        },
        {
          url: img1,
          title: "小红书大数据",
          path: "/xiaohongshu",
        },
      ],
    };
  },
  components: {},
  mounted () {},

  methods: {
    addMask (i) {
      this.$refs.lis[i].className = "popContainer";
    },
    deleteMask (i) {
      this.$refs.lis[i].className = "";
    },
    Mask () {
      this.$refs.head.className = "mask";
    },
    removeMask () {
      this.$refs.head.className = "";
    },
    to (path) {
      this.$router.push(path);
    },
  },
};
</script>

<style lang="less" scoped>
@import url("//at.alicdn.com/t/font_1262845_52b6h42svd7.css");

.home {
  height: 100%;
  background: url(@/assets/bg.png);
  background-size: 100% 100%;
  position: relative;
  .nav {
    height: 100%;
    position: absolute;
    top: 3%;
    left: 50%;
    transform: translateX(-50%);
    .header {
      width: 520px;
      height: 200px;
      margin: 0 auto;
      line-height: 190px;
      background-image: url(@/assets/kuang.png);
      background-position: center center;
      background-repeat: no-repeat;
      background-color: transparent;
      .mask {
        position: absolute;
        top: 0;
        left: 350px;
        right: 0;
        bottom: 0;
        width: 510px;
        height: 195px;
        z-index: 999;
        background: rgba(117, 125, 233, 0.171);
        cursor: pointer;
      }
      a {
        display: block;
        width: 510px;
        height: 100%;
        text-align: center;
        img {
          display: inline-block;
        }
        span {
          display: inline-block;
          vertical-align: 16px;
          font-size: 30px;
          color: #57daff;
          margin-left: 20px;
        }
      }
    }
    .contain {
      width: 1210px;
      margin: 0 auto;
      margin-top: 180px;
      height: 400px;
      ul {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        align-content: center;
        li {
          // width: 600px;
          // height: 200px;
          // float: left;
          width: 50%;
          height: 50%;
          line-height: 200px;

          margin-bottom: 1px;
          background-image: url(@/assets/kuang.png);
          background-position: center center;
          background-repeat: no-repeat;
          margin-bottom: 30px;
          position: relative;
          .popContainer {
            position: absolute;
            top: 0;
            left: 8%;
            right: 0;
            bottom: 0;
            width: 83%;
            height: 100%;
            z-index: 999;
            background: rgba(117, 125, 233, 0.171);
            cursor: pointer;
          }
          a {
            display: block;
            width: 100%;
            height: 100%;
            text-align: center;

            img {
              display: inline-block;
              margin-left: -45px;
            }
            span {
              display: inline-block;
              vertical-align: 16px;
              font-size: 30px;
              color: #57daff;
              margin-left: 20px;
            }
          }
        }
      }
    }
  }
}
</style>
