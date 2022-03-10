<template>
  <div class="contain">
    <div class="con-charts" ref="config"></div>
  </div>
</template>

<script>
import Charts from "@jiaminghi/charts";

export default {
  name: "DashujuCharts3",

  data () {
    return {
    };
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
          text: "抖音综合数据",
          style: {
            fill: "#0bd7e3",
            fontSize: 20,
            fontWeight: "bold",
            textAlign: "center",
            textBaseline: "bottom",
          },
          offset: [0, 20],
        },
        tooltip: {
          formatter: " {b} {a} : {c} ",
        },
        legend: {
          data: [
            {
              name: "今日",
              color: "rgba(178, 34, 34, .6)",
            },
            {
              name: "最近七天",
              color: "rgba(12, 233, 241, .6)",
            },
            {
              name: "本月",
              color: "rgba(122, 103, 21, .6)",
            },
          ],

          textStyle: {
            fontFamily: "Arial",
            fontSize: 13,
            fill: "#fff",
          },
          top: "20%",
          right: "10%",
        },
        xAxis: {
          data: [
            "曝光量",
            "点击量",
            "新增粉丝",
            "收藏量",
            "推广消耗",
            "售后量",
          ],
          axisLine: {
            style: {
              stroke: "#046290",
              lineWidth: 1,
            },
          },
          axisLabel: {
            style: {
              fill: "#fff",
              fontSize: 20,
              rotate: 0,
            },
          },
          axisTick: {
            show: false,
          },
        },
        yAxis: {
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
              fontSize: 20,
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
            name: "今日",
            data: [120, 223, 190, 210, 350, 220, 98],
            type: "bar",
            label: {
              show: true,
              position: "top",
              offset: [0, 0],
              style: {
                fill: "#fff",
                fontSize: 16
              },
            },
            gradient: {
              color: ["rgba(178, 34, 34, .6)", "rgba(178, 34, 34, .1)"],
            },
          },
          {
            name: "最近七天",
            data: [880, 283, 320, 410, 550, 320, 198],
            type: "bar",
            label: {
              show: true,
              position: "top",
              offset: [0, 0],
              style: {
                fill: "#fff",
                fontSize: 16
              },
            },
            gradient: {
              color: ["rgba(12, 233, 241, .6)", "rgba(12, 233, 241, .1)"],
            },
          },
          {
            name: "本月",
            data: [880, 283, 320, 410, 550, 320, 198],
            type: "bar",
            label: {
              show: true,
              position: "top",
              offset: [0, 0],
              style: {
                fill: "#fff",
                fontSize: 16
              },
            },
            gradient: {
              color: ["rgba(122, 103, 21, .6)", "rgba(12, 233, 241, .1)"],
            },
          },
        ],
      });
    },
  },
};
</script>

<style lang="less" scoped>
.contain {
  width: 100%;
  height: 100%;

  .con-charts {
    width: 100%;
    height: 100%;

  }
}
</style>
