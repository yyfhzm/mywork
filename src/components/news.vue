<template>
  <div class="contan">
    <p class="header">抖音热搜</p>
    <vue-seamless-scroll
      :data="listData"
      :class-option="optionSingleHeightTime"
      class="seamless-warp"
    >
      <ul class="item">
        <li v-for="(item, index) in listData" :key="index">
          <span class="title" v-text="item.title"></span
          ><span class="date" v-text="item.date"></span>
        </li>
      </ul>
    </vue-seamless-scroll>
  </div>
</template>

<script>
import vueSeamlessScroll from "vue-seamless-scroll";
export default {
  name: "DashujuNews",
  components: {
    vueSeamlessScroll,
  },
  computed: {
    optionSingleHeightTime () {
      return {
        singleHeight: 50,
        waitTime: 2500,
      };
    },
  },
  data () {
    return {
      listData: [
        {
          title: "无缝滚动第一行无缝滚动第一行动第一行动第一行动第一行",
          date: "2017-12-16",
        },
        {
          title:
            "无缝滚动第二行无缝滚动动第一行动第一行动第一行动第一行动第一行动第一行动第一行无缝滚动第二行无缝滚动动第一行动第一行动第一行动第一行动第一行动第一行动第一行无缝滚动第二行无缝滚动动第一行动第一行动第一行动第一行动第一行动第一行动第一行",
          date: "2017-12-16",
        },
        {
          title: "无缝滚动第三行无缝滚动动第一行动第一行动第一行第三行",
          date: "2017-12-16",
        },
        {
          title: "无缝滚动第四行无缝滚动动第一行动第一行动第一行第四行",
          date: "2017-12-16",
        },
        {
          title: "无缝滚动第五行无缝滚动第一行动第一行动第一行动第五行",
          date: "2017-12-16",
        },
        {
          title: "无缝滚动第六行无缝滚动动第一行动第一行动第一行第六行",
          date: "2017-12-16",
        },
        {
          title: "无缝滚动第七行无缝滚动第一行动第一行动第一行动第七行",
          date: "2017-12-16",
        },
        {
          title: "无缝滚动第八行无缝滚动第八行",
          date: "2017-12-16",
        },
        {
          title: "无缝滚动第九行无缝滚动第九行",
          date: "2017-12-16",
        },
      ],
    };
  },

  mounted () {},

  methods: {},
};
</script>

<style lang="less" scoped>
.contan {
  width: 99%;
  height: 100%;
  padding: 0 0.5%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  .header {
    width: 100%;
    height: 15%;
    font-size: 20px;
    font-weight: bold;
    color: #0bd7e3;
    line-height: 252%;
    text-align: center;
    letter-spacing: 5px;
  }
  .seamless-warp {
    width: 100%;
    height: 80%;
    overflow: hidden;
    .item {
      li {
        display: block;
        height: 50px;
        line-height: 50px;
        background-color: rgba(255, 255, 255, 0.05);
        color: rgba(55, 162, 218, 0.7);
        .title {
          width: 70%;
          float: left;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          text-indent: 5%;
        }
        .date {
          width: 20%;
          float: right;
        }
      }
    }
  }
}
</style>
