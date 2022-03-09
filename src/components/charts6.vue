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
          text: "售后产品分析",
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
              lineHeight: 28
            },
            padding: [40, 20, -20, 0],
            data: [
              { name: "电子产品" },
              { name: "美容化妆" },
              { name: "服装服饰" },
              { name: "生活用品" },
              { name: "医药保健" },
              { name: "食品特产" },
            ],
          },
        ],
        toolbox: {
          show: false,
        },
        series: [
          {
            name: "Access From",
            type: "pie",
            radius: ["40%", "70%"],
            avoidLabelOverlap: false,
            center: ["30%", "55%"],
            label: {
              show: false,
              position: "center",
            },
            emphasis: {
              label: {
                show: true,
                fontSize: "20",
                fontWeight: "bold",
                color: '#fff'
              },
            },
            labelLine: {
              show: false,
            },
            data: [
              { value: 1048, name: "电子产品" },
              { value: 735, name: "美容化妆" },
              { value: 580, name: "服装服饰" },
              { value: 484, name: "生活用品" },
              { value: 300, name: "食品特产" },
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
