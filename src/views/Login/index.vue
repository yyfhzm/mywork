<template>
  <div class="login">
    <vue-particles
      color="#fff"
      :particleOpacity="0.7"
      :particlesNumber="60"
      shapeType="circle"
      :particleSize="4"
      linesColor="#fff"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="150"
      :moveSpeed="2"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
      class="lizi"
    >
    </vue-particles>
    <div class="boardLogin">
      <h1 class="title">大数据看板</h1>
      <form>
        <div class="inpGroup">
          <span class="loginIco1"></span
          ><input
            v-model="user.userName"
            type="text"
            :rules="userFormRules.mobile"
            placeholder="请输入您的用户名"
          />
        </div>
        <div class="prompt">
          <p class="error">用户名错误或者不存在</p>
        </div>
        <div class="inpGroup">
          <span class="loginIco2"></span
          ><input
            type="password"
            placeholder="请输入您的密码"
            v-model="user.psw"
          />
        </div>
        <div class="prompt">
          <p class="success">输入正确</p>
        </div>
        <a href="#" class="animsition-link submit" @click="home()"
          >登录</a
        >
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginIndex",

  data () {
    return {
      user: {
        userName: "",
        psw: "",
      },
      userFormRules: {
        userName: [
          {
            required: true,
            message: "用户名不能为空",
          },
          {
            pattern: /^[\u4e00-\u9fa5a-zA-Z0-9]{6,12}$/,
            message: "用户名格式错误",
          },
        ],
        code: [
          {
            required: true,
            message: "密码不能为空",
          },
          {
            pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
            message: "密码格式错误",
          },
        ],
      },
    };
  },

  mounted () {},

  methods: {
    home () {
      this.$router.push("/home");
    },
  },
};
</script>

<style lang="less" scoped>
.login {
  width: 100%;
  height: 100%;
  // position: relative;
  background: url(@/assets/loginBg.jpg);
  background-size: 100% 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  .lizi {
    position: fixed;
    width: 100%;
    height: 100%;
  }
  .boardLogin {
    width: 400px;
    height: 300px;
    z-index: 1;
    h1 {
      color: #00dcfd;
      text-align: center;
      font-weight: normal;
    }
    .inpGroup {
      height: 20px;
      padding: 14px 24px 14px 52px;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 24px;
      position: relative;
      span {
        display: block;
        width: 20px;
        height: 20px;
        position: absolute;
        top: 14px;
        left: 24px;
      }
      span.loginIco1 {
        background: url("@/assets/s_ico6.png");
      }
      span.loginIco2 {
        background: url("@/assets/s_ico7.png");
      }
      input {
        display: block;
        width: 100%;
        height: 20px;
        line-height: 20px;
      }
    }
    .prompt {
      min-height: 20px;
      padding: 5px 24px 10px 24px;
      p {
        line-height: 16px;
        font-size: 12px;
        display: none;
      }
    }
    .submit {
      width: 100%;
      box-sizing: border-box;
      display: block;
      height: 45px;
      line-height: 38px;
      text-align: center;
      border: 1px solid #01d1f2;
      border-radius: 20px;
      color: #fff;
      cursor: pointer;
      transition: 0.3s ease-in-out;
      font-size: 22px;
      letter-spacing: 5px;
    }
  }
}
</style>
