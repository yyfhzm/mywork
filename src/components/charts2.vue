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
          text: "今日销量",
          left: '3%',
          top: "22%",
          textStyle: {
            color: "#09c5d4",
          },
        },
        tooltip: {
          trigger: "item",
          formatter: "{a}{b} : {c} ({d}%)",
        },
        series: [
          {
            name: "",
            type: "pie",
            radius: [0, 60],
            center: ["50%", "50%"],
            // roseType: "area",
            itemStyle: {
              borderRadius: 8,
            },
            label: {
              show: true,
              color: '#fff'
            },
            labelLine: {
              show: false,
              length: 1,
              labelLine2: {
                length: 0,
              },
            },
            data: [
              { value: 40, name: "抖音" },
              { value: 38, name: "淘宝" },
              { value: 32, name: "拼多多" },
              { value: 30, name: "京东" },
              { value: 28, name: "腾讯" },
              { value: 26, name: "小红书" },
            ],
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
    // padding-top: 20px;
    // padding-left: 20px;
  }
}
</style>
