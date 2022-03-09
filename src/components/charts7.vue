<template>
  <div class="container">
    <div class="con-charts" ref="config"></div>
  </div>
</template>

<script>
export default {
  name: "DashujuCharts7",

  data () {
    return {};
  },

  mounted () {
    this.initChart();
  },

  methods: {
    initChart () {
      const myChart = this.$echarts.init(this.$refs.config);
      const option = {
        title: {
          text: "一周新增粉丝分析",
          left: "center",
          textStyle: {
            color: "#0bd7e3",
            fontSize: 20,
            fontWeight: "bold",
          },
        },
        tooltip: {
          trigger: "axis",
        },
        legend: {
          data: ["抖音", "淘宝", "京东", "拼多多", "腾讯", "小红书"],
          top: "10%",
          textStyle: {
            color: "#fff",
            fontSize: 14,
            lineHeight: 14,
          },
        },
        grid: {
          top: "20%",
          left: "2%",
          right: "4%",
          bottom: "20%",
          containLabel: true,
        },
        xAxis: {
          type: "category",
          boundaryGap: true,
          data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
          axisLabel: {
            color: "#0a6f91",
            // fontSize: 10
          },
          axisTick: {
            alignWithLabel: false,
            show: false,
          },
          axisLine: {
            show: false,
          },
        },
        yAxis: {
          type: "value",
          axisTick: {
            alignWithLabel: false,
            show: false,
          },
          axisLabel: {
            color: "#0a6f91",
            // fontSize: 10
          },
          axisLine: {
            show: false,
          },
          splitLine: {
            show: false,
          },
        },
        series: [
          {
            name: "抖音",
            type: "line",
            stack: "Total",
            data: [120, 132, 101, 134, 90, 230, 210],
          },
          {
            name: "淘宝",
            type: "line",
            stack: "Total",
            data: [320, 332, 301, 334, 390, 330, 320],
          },
          {
            name: "京东",
            type: "line",
            stack: "Total",
            data: [820, 932, 901, 934, 1290, 1330, 1320],
          },
          {
            name: "拼多多",
            type: "line",
            stack: "Total",
            data: [120, 132, 101, 134, 90, 230, 210],
          },
          {
            name: "腾讯",
            type: "line",
            stack: "Total",
            data: [320, 332, 301, 334, 390, 330, 320],
          },
          {
            name: "小红书",
            type: "line",
            stack: "Total",
            data: [820, 932, 901, 934, 1290, 1330, 1320],
          },
        ],
      };
      myChart.setOption(option);
    },
  },
};
</script>

<style lang="less" scoped>
.container {
  width: 100%;
  height: 100%;
  // position: relative;
  .con-charts {
    width: 100%;
    height: 120%;
    // position: absolute;
    // bottom: -10%;
  }
}
</style>
