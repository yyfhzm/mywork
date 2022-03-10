<template>
  <div class="daysales">
    <div class="head">
      <span class="title">直播期间累计成交金额(元)</span>
      <span class="price">240</span>
    </div>
    <div class="bottom">
      <div class="item" v-for="(item, index) in dataList" :key="index">
        <span class="p_title">{{ item.title }}</span>
        <span class="num">{{ item.num }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DashujuCharts1",

  data () {
    return {
      dataList: [
        { title: "成交件数", num: 3 },
        { title: "成交人数", num: 3 },
        { title: "点击-成交转化率", num: "6.52%" },
        { title: "千次观看成交金额", num: 141.09 },
        { title: "成交粉丝占比", num: "100%" },
        { title: "实时在线人数", num: 3 },
        { title: "累计观看人数", num: 1518 },
        { title: "新增粉丝数", num: 10 },
      ],
    };
  },

  mounted () {},

  methods: {},
};
</script>

<style lang="less" scoped>
.daysales {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  .head {
    width: 100%;
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: center;
    color: #0a9caf;
    .title {
      width: 100%;
      height: 30%;
      font-size: 22px;
      line-height: 3;
      font-weight: bold;
    }
    .price {
      width: 100%;
      height: 70%;
      font-size: 50px;
      font-weight: bold;
      line-height: 2;
      color: rgba(11, 219, 230);
    }
  }
  .bottom {
    width: 100%;
    height: 50%;
    display: flex;
    flex-wrap: wrap;
    .item {
      width: 25%;
      height: 50%;
      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
      .p_title {
        width: 100%;
        color: #ccc;
        // line-height: 5;
      }
      .num {
        width: 100%;
        font-size: 20px;
        color: rgba(11, 219, 230 ,.7);
        // line-height: 5;
      }
    }
  }
}
</style>
