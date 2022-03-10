<template>
  <div class="order" @mouseenter="clear()" @mouseleave="begin()">
    <div class="inner">
      <div class="filter">
        <a
          href="#"
          ref="as"
          v-for="arr in date"
          :class="{ active: arr.active }"
          @click="active(arr.id)"
          :key="arr.id"
          >{{ arr.date }}</a
        >
      </div>
      <div class="data" v-for="arr in date" :key="arr.id" v-show="arr.isShow">
        <div class="item">
          <h4>{{ arr.sales }}</h4>
          <span>
            <i
              class="fa fa-window-minimize fa-rotate-270"
              style="color: #ed3f35"
            ></i>
            订单量
          </span>
        </div>
        <div class="item">
          <h4>{{ arr.price }}</h4>
          <span>
            <i
              class="fa fa-window-minimize fa-rotate-270"
              style="color: #e8c81d"
            ></i>
            销售额（万元）
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DashujuCharts3",

  data () {
    return {
      date: [
        {
          id: 0,
          date: "近365天",
          active: true,
          sales: "301,987",
          price: "9834",
          isShow: true,
        },
        {
          id: 1,
          date: "近90天",
          active: false,
          sales: "88,987",
          price: "2834",
          isShow: false,
        },
        {
          id: 2,
          date: "近30天",
          active: false,
          sales: "21,987",
          price: "834",
          isShow: false,
        },
        {
          id: 3,
          date: "近24小时",
          active: false,
          sales: "8,987",
          price: "24",
          isShow: false,
        },
      ],
      num: 0,
      timer: null,
    };
  },
  mounted () {
    this.begin();
  },
  watch: {},

  methods: {
    active (i) {
      this.num = i;
      this.date.forEach((item, index) => {
        if (index !== i) {
          item.active = false;
          item.isShow = false;
        } else {
          item.active = true;
          item.isShow = true;
        }
      });
      this.num = i
    },
    clear () {
      clearInterval(this.timer);
    },
    begin () {
      this.timer = setInterval(() => {
        this.num += 1;
        if (this.num > 3) {
          this.num = 0;
        }
        this.active(this.num);
        console.log(this.num);
      }, 1000);

      // console.log(666);
    },
  },
};
</script>

<style lang="less" scoped>
.order {
  width: 100%;
  height: 100%;
  .inner {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    .filter {
      // position: absolute;
      // top: 10%;
      // left: 5%;
      display: flex;
      align-items: center;
      justify-content: space-around;
      height: 30%;
      a {
        display: block;
        width: 20%;
        height: 90%;
        text-align: center;
        line-height: 3;
        // line-height: 0;
        // padding: 0 30px;
        color: #666;
        font-size: 24px;
        font-weight: bold;

        &.active {
          color: #0bdbe5;
        }
      }

      a:first-child {
        padding-left: 0;
      }

      a:last-child {
        border-right: none;
      }
    }

    .data {
      position: absolute;
      top: 40%;
      width: 100%;
      height: 60%;
      display: flex;
      justify-content: space-around;
      .item {
        width: 50%;
        height: 100%;
        text-align: center;
        h4 {
          font-size: 24px;
          color: #fff;
        }

        span {
          display: block;
          color: #4c9bfd;
          font-size: 24px;
        }
      }
    }
  }
}
</style>
