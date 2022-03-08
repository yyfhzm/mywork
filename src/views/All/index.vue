<template>
  <dv-full-screen-container class="main">
    <div class="main-con">
      <div class="main-top">
        <div class="main-top-left">
          <dv-border-box-13
            :reverse="true"
            :color="['#0b97b8', '#0b97b8']"
            class="main-top-left-top"
          >
            <span>今日推广消耗</span>
            <dv-capsule-chart :config="config3" />
          </dv-border-box-13>
          <dv-border-box-13
            :reverse="true"
            :color="['#0b97b8', '#0b97b8']"
            class="main-top-left-bottom"
          >
            <span>今日点击量</span>
            <dv-capsule-chart :config="config4" />
          </dv-border-box-13>
        </div>
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
          <dv-border-box-1 :color="['#0b97b8', '#0b97b8']"
            >dv-border-box-1</dv-border-box-1
          >
          <dv-border-box-1 :color="['#0b97b8', '#0b97b8']"
            >dv-border-box-1</dv-border-box-1
          >
        </div>
        <div class="main-bottom-bottom">
          <dv-border-box-10
            :color="['#0b97b8', '#0b97b8']"
            class="main-bottom-bottom-item"
            >dv-border-box-10</dv-border-box-10
          >
          <dv-border-box-10
            :color="['#0b97b8', '#0b97b8']"
            class="main-bottom-bottom-item"
            >dv-border-box-10</dv-border-box-10
          >
          <dv-border-box-10
            :color="['#0b97b8', '#0b97b8']"
            class="main-bottom-bottom-item"
            >dv-border-box-10</dv-border-box-10
          >
          <dv-border-box-10
            :color="['#0b97b8', '#0b97b8']"
            class="main-bottom-bottom-item"
            >dv-border-box-10</dv-border-box-10
          >
        </div>
      </div>
    </div>
  </dv-full-screen-container>
</template>

<script>
import WeekSales from "@/components/charts1.vue";
import Rose from "@/components/charts2.vue";
export default {
  name: "AllIndex",
  components: {
    WeekSales,
    Rose,
  },
  data () {
    return {
      objList: [
        {
          title: "抖音今日销量",
          sales: 333,
        },
        {
          title: "淘宝今日销量",
          sales: 333,
        },
        {
          title: "拼多多今日销量",
          sales: 333,
        },
        {
          title: "京东今日销量",
          sales: 333,
        },
        {
          title: "腾讯今日销量",
          sales: 333,
        },
        {
          title: "小红书今日销量",
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
          [
            "家用电器",
            "手机数码",
            "电脑办公",
            "家居家装",
            "服装服饰",
            "医药保健",
          ],
          [
            "家用电器",
            "手机数码",
            "电脑办公",
            "家居家装",
            "服装服饰",
            "医药保健",
          ],
          [
            "家用电器",
            "手机数码",
            "电脑办公",
            "家居家装",
            "服装服饰",
            "医药保健",
          ],
          [
            "家用电器",
            "手机数码",
            "电脑办公",
            "家居家装",
            "服装服饰",
            "医药保健",
          ],
          [
            "家用电器",
            "手机数码",
            "电脑办公",
            "家居家装",
            "服装服饰",
            "医药保健",
          ],
          [
            "家用电器",
            "手机数码",
            "电脑办公",
            "家居家装",
            "服装服饰",
            "医药保健",
          ],
          [
            "家用电器",
            "手机数码",
            "电脑办公",
            "家居家装",
            "服装服饰",
            "医药保健",
          ],
          [
            "家用电器",
            "手机数码",
            "电脑办公",
            "家居家装",
            "服装服饰",
            "医药保健",
          ],
          [
            "家用电器",
            "手机数码",
            "电脑办公",
            "家居家装",
            "服装服饰",
            "医药保健",
          ],
          [
            "家用电器",
            "手机数码",
            "电脑办公",
            "家居家装",
            "服装服饰",
            "医药保健",
          ],
          [
            "家用电器",
            "手机数码",
            "电脑办公",
            "家居家装",
            "服装服饰",
            "医药保健",
          ],
          [
            "家用电器",
            "手机数码",
            "电脑办公",
            "家居家装",
            "服装服饰",
            "医药保健",
          ],
          [
            "家用电器",
            "手机数码",
            "电脑办公",
            "家居家装",
            "服装服饰",
            "医药保健",
          ],
          [
            "家用电器",
            "手机数码",
            "电脑办公",
            "家居家装",
            "服装服饰",
            "医药保健",
          ],
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
            name: "京东",
            value: 1167,
          },
          {
            name: "淘宝",
            value: 1023,
          },
          {
            name: "拼多多",
            value: 898,
          },
          {
            name: "腾讯",
            value: 775,
          },
          {
            name: "小红书",
            value: 66,
          },
          {
            name: "抖音",
            value: 696,
          },
        ],
        colors: ["#e062ae", "#fb7293", "#e690d1", "#32c5e9", "#96bfff"],
        unit: "元",
        showValue: true,
      },
      config4: {
        data: [
          {
            name: "京东",
            value: 1167,
          },
          {
            name: "淘宝",
            value: 1023,
          },
          {
            name: "拼多多",
            value: 898,
          },
          {
            name: "腾讯",
            value: 775,
          },
          {
            name: "小红书",
            value: 66,
          },
          {
            name: "抖音",
            value: 696,
          },
        ],
        // colors: ["#e062ae", "#fb7293", "#e690d1", "#32c5e9", "#96bfff"],
        unit: "元",
        showValue: true,
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
        display: flex;
        flex-direction: column;
        .main-top-left-top {
          position: relative;
          width: 100%;
          height: 50%;
          span {
            position: absolute;
            top: 8%;
            left: 35%;
            color: #0bd7e3;
            font-weight: bold;
          }
          .dv-capsule-chart {
            position: absolute;
            top: 14%;
            left: 0;
            width: 100%;
            height: 90%;
          }
        }
        .main-top-left-bottom {
          position: relative;
          width: 100%;
          height: 50%;
          span {
            position: absolute;
            top: 8%;
            left: 38%;
            color: #0bd7e3;
            font-weight: bold;
          }
          .dv-capsule-chart {
            position: absolute;
            top: 14%;
            left: 0;
            width: 100%;
            height: 90%;
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
          width: 24.5%;
        }
      }
    }
  }
}
</style>
