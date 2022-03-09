<template>
  <div class="container">
    <div class="con-charts" ref="config"></div>
  </div>
</template>

<script>
import Charts from "@jiaminghi/charts";

export default {
  name: "DashujuCharts3",

  data () {
    return {};
  },

  mounted () {
    this.initChart();
  },

  methods: {
    initChart () {
      const config = this.$refs.config;
      const myChart = new Charts(config);
      myChart.setOption({
        title: {
          text: "今日推广消耗及点击量",
          style: {
            fill: "#0bd7e3",
            fontSize: 20,
            fontWeight: "bold",
            textAlign: "center",
            textBaseline: "bottom",
          },
          offset: [0, -40]
        },
        legend: {
          data: [
            {
              name: "推广消耗",
              color: "rgba(178, 34, 34, .6)",
            },
            {
              name: "点击量",
              color: "rgba(12, 233, 241, .6)",
            },
          ],

          textStyle: {
            fontFamily: "Arial",
            fontSize: 13,
            fill: "#fff",
          },
          top: '20%',
          right: '10%'
        },
        xAxis: {
          data: ["抖音", "淘宝", "京东", "拼多多", "腾讯", "小红书"],
          axisLine: {
            style: {
              stroke: "#046290",
              lineWidth: 1,
            },
          },
          axisLabel: {
            style: {
              fill: "#fff",
              fontSize: 10,
              rotate: 0,
            },
          },
          axisTick: {
            show: false,
          },
        },
        yAxis: {
          name: "( 元 / 条 )",
          data: "value",
          axisLine: {
            style: {
              stroke: "#046290",
              lineWidth: 1,
            },
          },
          nameTextStyle: {
            fill: "#fff",
            fontSize: 16,
          },
          axisLabel: {
            style: {
              fill: "#fff",
              fontSize: 10,
              rotate: 0,
            },
          },
          axisTick: {
            show: false,
          },
          splitLine: {
            show: false,
          },
        },
        series: [
          {
            name: "推广消耗",
            data: [120, 223, 190, 210, 350, 220, 98],
            type: "bar",
            label: {
              show: true,
              position: "top",
              offset: [0, 0],
              style: {
                fill: "#fff",
              },
            },
            gradient: {
              color: ["rgba(178, 34, 34, .6)", "rgba(178, 34, 34, .1)"],
            },
          },
          {
            name: "点击量",
            data: [880, 283, 320, 410, 550, 320, 198],
            type: "bar",
            label: {
              show: true,
              position: "top",
              offset: [0, 0],
              style: {
                fill: "#fff",
              },
            },
            gradient: {
              color: ["rgba(12, 233, 241, .6)", "rgba(12, 233, 241, .1)"],
            },
          },
        ],
      });
    },
  },
};
</script>

<style lang="less" scoped>
.container {
  width: 100%;
  height: 100%;
  .con-charts {
    width: 100%;
    height: 120%;
  }
}
</style>
