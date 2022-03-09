<template>
  <dv-full-screen-container class="main">
    <div class="main-con">
      <div class="main-top">
        <dv-border-box-13
          :reverse="true"
          :color="['#0b97b8', '#0b97b8']"
          class="main-top-left"
        >
          <span>今日热销</span>
          <dv-scroll-ranking-board :config="config3" />
        </dv-border-box-13>
        <div class="main-top-middle">
          <dv-border-box-11
            :color="['#0efcff', '#085d7f']"
            title="综合数据看板"
            style="font-weight: bold"
          >
            <dv-scroll-board :config="config2" />
          </dv-border-box-11>
        </div>
        <div class="main-top-right">
          <dv-border-box-13
            :reverse="true"
            :color="['#0b97b8', '#0b97b8']"
            class="main-top-right-top"
          >
            <Rose />
          </dv-border-box-13>
          <dv-border-box-13
            :reverse="true"
            :color="['#0b97b8', '#0b97b8']"
            class="main-top-right-bottom"
          >
            <dv-conical-column-chart :config="config1" />
          </dv-border-box-13>
        </div>
      </div>
      <div class="main-middle">
        <dv-border-box-8
          class="main-middle-list"
          v-for="(item, index) in objList"
          :key="index"
        >
          <span class="top_left">{{ item.title }}</span>
          <span class="middle">{{ item.sales }}</span>
        </dv-border-box-8>
      </div>
      <div class="main-bottom">
        <div class="main-bottom-top">
          <dv-border-box-1 :color="['#0b97b8', '#0b97b8']">
            <WeekSales />
          </dv-border-box-1>
          <dv-border-box-1 :color="['#0b97b8', '#0b97b8']">
            <Weekzs />
          </dv-border-box-1>
          <dv-border-box-1 :color="['#0b97b8', '#0b97b8']">
            <Daytg />
          </dv-border-box-1>
        </div>
        <div class="main-bottom-bottom">
          <dv-border-box-10
            :color="['#0b97b8', '#0b97b8']"
            class="main-bottom-bottom-item"
          >
            <Fans />
          </dv-border-box-10>
          <dv-border-box-10
            :color="['#0b97b8', '#0b97b8']"
            class="main-bottom-bottom-item"
          >
            <Shouhou />
          </dv-border-box-10>
          <dv-border-box-10
            :color="['#0b97b8', '#0b97b8']"
            class="main-bottom-bottom-item"
          >
            <dv-scroll-board :config="config4" />
          </dv-border-box-10>
        </div>
      </div>
    </div>
  </dv-full-screen-container>
</template>

<script>
import WeekSales from "@/components/charts1.vue";
import Rose from "@/components/charts2.vue";
import Daytg from "@/components/charts3.vue";
import Weekzs from "@/components/charts4.vue";
import Fans from "@/components/charts7.vue";
import Shouhou from "@/components/charts6.vue";
export default {
  name: "AllIndex",
  components: {
    WeekSales,
    Rose,
    Daytg,
    Weekzs,
    Fans,
    Shouhou,
  },
  data () {
    return {
      objList: [
        {
          title: "抖音日曝光量",
          sales: 333,
        },
        {
          title: "淘宝日曝光量",
          sales: 333,
        },
        {
          title: "拼多多日曝光量",
          sales: 333,
        },
        {
          title: "京东日曝光量",
          sales: 333,
        },
        {
          title: "腾讯日曝光量",
          sales: 333,
        },
        {
          title: "小红书日曝光量",
          sales: 333,
        },
      ],
      config1: {
        data: [
          { value: 40, name: "抖音" },
          { value: 38, name: "淘宝" },
          { value: 32, name: "拼多多" },
          { value: 30, name: "京东" },
          { value: 28, name: "腾讯" },
          { value: 26, name: "小红书" },
        ],
        showValue: true,
      },
      config2: {
        header: ["京东", "淘宝", "抖音", "腾讯", "拼多多", "小红书"],
        data: [
          ["店铺名", "店铺名", "店铺名", "店铺名", "店铺名", "店铺名"],
          ["店铺名", "店铺名", "店铺名", "店铺名", "店铺名", "店铺名"],
          ["店铺名", "店铺名", "店铺名", "店铺名", "店铺名", "店铺名"],
          ["店铺名", "店铺名", "店铺名", "店铺名", "店铺名", "店铺名"],
          ["店铺名", "店铺名", "店铺名", "店铺名", "店铺名", "店铺名"],
          ["店铺名", "店铺名", "店铺名", "店铺名", "店铺名", "店铺名"],
          ["店铺名", "店铺名", "店铺名", "店铺名", "店铺名", "店铺名"],
          ["店铺名", "店铺名", "店铺名", "店铺名", "店铺名", "店铺名"],
          ["店铺名", "店铺名", "店铺名", "店铺名", "店铺名", "店铺名"],
        ],
        index: true,
        columnWidth: [150],
        align: ["center"],
        headerBGC: "",
        oddRowBGC: "rgba(255,255,255,.05)",
        evenRowBGC: "rgba(0,0,0,.3)",
        indexHeader: "销量排行",
      },
      config3: {
        data: [
          {
            name: "周口",
            value: 55123,
          },
          {
            name: "南阳",
            value: 12022,
          },
          {
            name: "西峡",
            value: 78932,
          },
          {
            name: "驻马店",
            value: 63411,
          },
          {
            name: "新乡",
            value: 44231,
          },
          {
            name: "周口",
            value: 55123,
          },
          {
            name: "南阳",
            value: 12022,
          },
          {
            name: "西峡",
            value: 78932,
          },
          {
            name: "驻马店",
            value: 63411,
          },
          {
            name: "新乡",
            value: 44231,
          },
        ],
        // unit: "单位",
        valueFormatter ({ value }) {
          // console.warn(arguments);
          const reverseNumber = (value + "").split("").reverse();
          let valueStr = "";

          while (reverseNumber.length) {
            const seg = reverseNumber.splice(0, 3).join("");
            valueStr += seg;
            if (seg.length === 3) valueStr += ",";
          }

          return valueStr.split("").reverse().join("");
        },
      },
      config4: {
        header: ["姓名", "业绩", "订单量"],
        data: [
          ["张三", "6666", "128"],
          ["张三", "6666", "128"],
          ["张三", "6666", "128"],
          ["张三", "6666", "128"],
          ["张三", "6666", "128"],
          ["张三", "6666", "128"],
          ["张三", "6666", "128"],
          ["张三", "6666", "128"],
          ["张三", "6666", "128"],
        ],
        index: true,
        columnWidth: [100],
        align: ["center"],
        headerBGC: "",
        oddRowBGC: "rgba(255,255,255,.05)",
        evenRowBGC: "rgba(0,0,0,.3)",
        indexHeader: "员工排行",
      },
    };
  },

  mounted () {},

  methods: {},
};
</script>

<style lang="less" scoped>
.main {
  position: relative;
  background: url("@/assets/background.jpg") no-repeat;
  background-size: 100%;
  color: #fff;
  .main-con {
    position: absolute;
    width: 97%;
    height: 95%;
    left: 0;
    right: 0;
    top: 5px;
    bottom: 0;
    margin: auto;
    .main-top {
      width: 100%;
      height: 37%;
      //   margin-top: 5px;
      display: flex;
      justify-content: space-between;
      .main-top-left {
        width: 17%;
        height: 100%;
        position: relative;
        span {
          position: absolute;
          top: 5%;
          left: 35%;
          font-size: 24px;
          font-weight: bold;
          color: #0bd7e3;
        }
        /deep/.dv-scroll-ranking-board {
          position: absolute;
          top: 15%;
          left: 4%;
          width: 92%;
          .row-item {
            height: 50px !important;
            .ranking-info {
              .rank {
                color: #0bd7e3;
              }
            }
            .ranking-column {
              border-bottom: 2px solid rgba(12, 240, 246, 0.5);
              .inside-column {
                background-color: rgba(9, 178, 198, 0.6);
              }
            }
          }
        }
      }
      .main-top-middle {
        width: 63%;
        .dv-border-box-11 {
          .border-box-content {
            position: relative;
            .dv-scroll-board {
              width: 96%;
              height: 75%;
              position: absolute;
              left: 2%;
              bottom: 3%;
            }
          }
        }
      }
      .main-top-right {
        width: 17%;
        height: 100%;
        display: flex;
        flex-direction: column;
        .main-top-right-bottom {
          position: relative;
          .dv-conical-column-chart {
            display: flex;
            justify-content: space-between;
            position: absolute;
            left: 0;
            bottom: 10px;
          }
        }
      }
    }
    .main-middle {
      width: 100%;
      height: 7.1%;
      margin-top: 1%;
      display: flex;
      justify-content: space-between;
      .main-middle-list {
        width: 16%;
        .border-box-content {
          width: 100%;
          height: 100%;
          .top_left {
            width: 100%;
            display: inline-block;
            margin-left: 5px;
            margin-top: 5px;
            color: #0a8fa9;
            font-weight: bold;
            text-align: center;
          }
          .middle {
            display: inline-block;
            width: 100%;
            text-align: center;
            font-size: 24px;
            font-weight: bold;
            color: #0bd7e3;
          }
        }
      }
    }
    .main-bottom {
      width: 100%;
      height: 55.9%;
      .main-bottom-top {
        width: 100%;
        height: 36.5%;
        margin-top: 1%;
        display: flex;
      }
      .main-bottom-bottom {
        display: flex;
        justify-content: space-between;
        width: 100%;
        height: 50%;
        margin-top: 1%;
        .main-bottom-bottom-item {
          width: 33%;
        }
      }
    }
  }
}
</style>
