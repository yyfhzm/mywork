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
          text: "畅销产品占比图",
          style: {
            fill: "#0bd7e3",
            fontSize: 20,
            fontWeight: "bold",
            textAlign: "center",
            textBaseline: "bottom",
          },
        },
        series: [
          {
            type: "pie",
            data: [
              { name: "生活用品", value: 93 },
              { name: "医药保健", value: 32 },
              { name: "电子产品", value: 65 },
              { name: "服装服饰", value: 44 },
              { name: "美容化妆", value: 52 },
            ],
            insideLabel: {
              show: true,
            },
            radius: "70%",
            center: ['50%', '60%'],
            roseType: true,
            outsideLabel: {
              labelLineBendGap: '10%',
              labelLineEndLength: 10
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
