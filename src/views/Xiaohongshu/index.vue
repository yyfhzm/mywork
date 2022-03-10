<template>
  <dv-full-screen-container class="container">
    <div class="header">
      <div class="left">
        <dv-decoration-2 />
      </div>
      <div class="middle">
        <div class="title">
          <p>小红书大数据</p>
        </div>
        <dv-decoration-5 />
      </div>
      <div class="right">
        <p
          style="
            position: absolute;
            top: 30px;
            left: 50px;
            color: #3f96a5;
            text-align: center;
            font-size: 20px;
            font-weight: bold;
          "
        >
          {{ now }}
        </p>
        <dv-decoration-2 />
      </div>
    </div>
    <div class="main">
      <div class="left">
        <dv-border-box-7>
          <MainLeft />
        </dv-border-box-7>
        <dv-border-box-7>
          <p>周订单量走势</p>
          <dv-conical-column-chart :config="config1" />
        </dv-border-box-7>
      </div>
      <dv-border-box-3 class="middle">
        <Main />
      </dv-border-box-3>
      <dv-border-box-7 class="right">
        <dv-scroll-board :config="config" />
      </dv-border-box-7>
    </div>
    <div class="footer">
      <dv-border-box-8 :reverse="true">
        <Dpxl/>
        </dv-border-box-8
      ><dv-border-box-8 :reverse="true">
        <News/>
        </dv-border-box-8
      ><dv-border-box-8 :reverse="true">
        <Cjje/>
      </dv-border-box-8>
    </div>
  </dv-full-screen-container>
</template>

<script>
import moment from "moment";
import Main from "@/components/charts8.vue";
import MainLeft from "@/components/charts9.vue";
import Dpxl from "@/components/zhibo.vue";
import Cjje from "@/components/charts11.vue";
import News from "@/components/news.vue";
export default {
  name: "DouYinIndex",
  components: {
    Main,
    MainLeft,
    Dpxl,
    News,
    Cjje
  },
  data () {
    return {
      now: moment().format("lll dddd"),
      config: {
        header: ["店铺名", "商品名", "金额"],
        headerHeight: 50,
        data: [
          ["xx旗舰店", "最新服装", "369"],
          ["xx旗舰店", "最新服装", "369"],
          ["xx旗舰店", "最新服装", "369"],
          ["xx旗舰店", "最新服装", "369"],
          ["xx旗舰店", "最新服装", "369"],
          ["xx旗舰店", "最新服装", "369"],
          ["xx旗舰店", "最新服装", "369"],
          ["xx旗舰店", "最新服装", "369"],
          ["xx旗舰店", "最新服装", "369"],
          ["xx旗舰店", "最新服装", "369"],
          ["xx旗舰店", "最新服装", "369"],
          ["xx旗舰店", "最新服装", "369"],
          ["xx旗舰店", "最新服装", "369"],
          ["xx旗舰店", "最新服装", "369"],
          ["xx旗舰店", "最新服装", "369"],
        ],
        index: true,
        indexHeader: "最新订单",
        rowNum: 10,
        oddRowBGC: "rgba(255,255,255,.05)",
        evenRowBGC: "rgba(0,0,0,.3)",
        headerBGC: "rgba(11, 219, 230,.05)",
        columnWidth: [90],
      },
      config1: {
        data: [
          { name: "第一周", value: 55 },
          { name: "第二周", value: 120 },
          { name: "第三周", value: 71 },
          { name: "第四周", value: 66 },
        ],
        showValue: true,
        // columnColor: '#fff',
        fontSize: 16,
        textColor: "rgba(103, 224, 227,0.8)",
      },
    };
  },

  mounted () {
    setInterval(() => {
      this.now = moment().format("lll dddd");
    }, 60000);
  },
  watch: {},
  methods: {},
};
</script>

<style lang="less" scoped>
.container {
  background: url("@/assets/bg01.png") no-repeat;
  background-size: 100%;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  .header {
    display: flex;
    width: 100%;
    height: 12%;
    .left {
      width: 20%;
      height: 100%;
    }
    .middle {
      width: 60%;
      height: 100%;
      display: flex;
      flex-direction: column;
      position: relative;
      div {
        width: 100%;
        height: 100%;
      }
      .title {
        height: 30%;
        position: absolute;
        top: 20%;
        p {
          text-align: center;
          font-size: 32px;
          color: #0bdbe6;
          font-weight: bold;
          letter-spacing: 10px;
        }
      }
    }
    .right {
      width: 20%;
      height: 100%;
      display: flex;
      flex-direction: column;
      position: relative;
      div {
        width: 100%;
        height: 100%;
      }
    }
  }
  .main {
    width: 100%;
    height: 50%;
    display: flex;
    justify-content: space-around;
    .left {
      width: 20%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      >div{
        height: 48%;
      }
      div:nth-child(2) {
        position: relative;
        p {
          position: absolute;
          top: 5%;
          left: 35%;
          color: #0bd7e3;
          font-size: 20px;
          font-weight: bold;
          letter-spacing: 2px;
        }
      }
    }
    .middle {
      width: 50%;
      height: 100%;
    }
    .right {
      width: 20%;
      height: 100%;
      /deep/.header {
        .header-item {
          color: #0bdbe6;
        }
      }
    }
  }
  .footer {
    width: 100%;
    height: 30%;
    display: flex;
    justify-content: space-around;
    >div{
      width: 32%;
    }
  }
}
</style>
