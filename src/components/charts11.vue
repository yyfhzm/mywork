<template>
  <div class="daysales">
    <div class="xxx" ref="con_chart"></div>
  </div>
</template>

<script>
export default {
  name: "DashujuCharts1",

  data () {
    return {};
  },

  mounted () {
    this.initChart();
  },

  methods: {
    initChart () {
      const myChart = this.$echarts.init(this.$refs.con_chart);
      const option = {
        title: {
          text: "近七天成交金额及退款金额",
          left: "center",
          top: "10%",
          textStyle: {
            color: "#0bd7e3",
            fontSize: 22,
            fontWeight: "bold",
          },
        },
        tooltip: {
          formatter: " {b} {a} : {c} 元",
        },
        legend: {
          data: [
            {
              name: "成交",
              color: "#aeeff0",
              orient: "vertical",
              textStyle: {
                color: "#fff",
                fontSize: 14,
                lineHeight: 28,
              },
            },
            {
              name: "退款",
              color: "#f1829f",
              orient: "vertical",
              textStyle: {
                color: "#fff",
                fontSize: 14,
                lineHeight: 28,
              },
            },
          ],
        },
        xAxis: {
          type: "category",
          data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
          axisLabel: {
            color: "#56bec6",
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
        grid: {
          left: "3%",
          top: "20%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        yAxis: [
          {
            name: "成交",
            type: "value",
            show: false,
            axisTick: {
              alignWithLabel: false,
              show: false,
            },
            axisLabel: {
              color: "#56bec6",
              // fontSize: 10
            },
            // max: 3000,
            axisLine: {
              show: false,
            },
            splitLine: {
              show: false,
            }
          },
          {
            name: "退款",
            type: "value",
            position: "right",
            show: false,
            // max: 4000,
            splitLine: {
              show: false,
            },
            axisTick: {
              alignWithLabel: false,
              show: false,
            },
            axisLabel: {
              color: "#56bec6",
              // fontSize: 10
            },
            axisLine: {
              show: false,
            }
          },
        ],
        series: [
          {
            name: "退款",
            data: [1000, 1200, 900, 1500, 900, 1200, 1000],
            type: "line",
            smooth: true,
            lineArea: {
              show: true,
              gradient: ["rgba(251, 114, 147, 1)", "rgba(251, 114, 147, 0)"],
            },
            lineStyle: {
              stroke: "rgba(251, 114, 147, 1)",
              lineDash: [3, 3],
            },
            linePoint: {
              style: {
                stroke: "rgba(251, 114, 147, 1)",
              },
            },
            yAxisIndex: 1,
          },
          {
            name: "成交",
            data: [1500, 1700, 1400, 2500, 1400, 1700, 1500],
            type: "bar",
            itemStyle: {
              color: "rgba(10, 157, 175,.3)",
            },
          },
        ],
      };
      myChart.setOption(option);
    },
  },
};
</script>

<style lang="less" scoped>
.daysales {
  width: 100%;
  height: 100%;
  .xxx {
    width: 100%;
    height: 100%;
  }
}
</style>
