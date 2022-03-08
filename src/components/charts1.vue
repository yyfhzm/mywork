<template>
  <div class="weeksales">
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
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // Use axis to trigger tooltip
            // type: "shadow", // 'shadow' as default; can also be 'line' or 'shadow'
          },
        },
        legend: {
          textStyle: {
            fontSize: 14, // 字体大小
            color: "#ffffff", // 字体颜色
          },
        },
        grid: {
          left: "3%",
          top: "12%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },

        xAxis: {
          type: "value",
          axisLabel: {
            color: '#0a6f91',
            // fontSize: 10
          },
          splitLine: {
                lineStyle: {
                    color: '#012f4a'
                }
            }
        },
        yAxis: {
          type: "category",
          data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
          axisTick: {
                alignWithLabel: false,
                show: false
            },
          axisLabel: {
            color: '#0a6f91',
            // fontSize: 10
          },
          axisLine: {
            show: false
          }
        },
        series: [
          {
            name: "抖音",
            type: "bar",
            stack: "total",
            emphasis: {
              focus: "series",
            },
            data: [320, 302, 301, 334, 390, 330, 320],
          },
          {
            name: "淘宝",
            type: "bar",
            stack: "total",
            emphasis: {
              focus: "series",
            },
            data: [120, 132, 101, 134, 90, 230, 210],
          },
          {
            name: "拼多多",
            type: "bar",
            stack: "total",
            emphasis: {
              focus: "series",
            },
            data: [220, 182, 191, 234, 290, 330, 310],
          },
          {
            name: "京东",
            type: "bar",
            stack: "total",
            emphasis: {
              focus: "series",
            },
            data: [150, 212, 201, 154, 190, 330, 410],
          },
          {
            name: "腾讯",
            type: "bar",
            stack: "total",
            emphasis: {
              focus: "series",
            },
            data: [150, 212, 201, 154, 190, 330, 410],
          },
          {
            name: "小红书",
            type: "bar",
            stack: "total",
            emphasis: {
              focus: "series",
            },
            data: [820, 832, 901, 934, 1290, 1330, 1320],
          },
        ],
      };
      myChart.setOption(option);
    },
  },
};
</script>

<style lang="less" scoped>
.weeksales {
  width: 100%;
  height: 100%;
  .xxx {
    width: 100%;
    height: 100%;
  }
}
</style>
