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
          text: "用户购买力分布分析",
          left: "center",
          top: "5%",
          textStyle: {
            color: "#0bd7e3",
            fontSize: 22,
            fontWeight: "bold",
          },
        },
        tooltip: {
          trigger: "item",
          formatter: "{b} : {c} ({d}%)",
        },
        legend: [
          {
            right: "10%",
            bottom: "20%",
            orient: "vertical",
            textStyle: {
              color: "#fff",
              fontSize: 14,
              lineHeight: 24,
            },
            padding: [40, 20, -20, 0],
            data: [
              { name: "华东地区" },
              { name: "华北地区" },
              { name: "西北地区" },
              { name: "东北地区" },
              { name: "西南地区" },
              { name: "沿海地区" },
            ],
          },
        ],
        toolbox: {
          show: false,
        },
        series: [
          {
            name: "来自：",
            type: "pie",
            radius: [50, 110],
            center: ["25%", "55%"],
            roseType: "radius",
            label: {
              show: false,
            },
            emphasis: {
              label: {
                show: false,
              },
            },
            data: [
              { value: 40, name: "华东地区" },
              { value: 33, name: "华北地区" },
              { value: 28, name: "西北地区" },
              { value: 22, name: "东北地区" },
              { value: 20, name: "西南地区" },
              { value: 15, name: "沿海地区" },
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
  }
}
</style>
