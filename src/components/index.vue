<template>
  <div class="box">
    <div class="login">
      <el-form
        :model="sqlInfo"
        :rules="sqlRules"
        ref="ruleForm"
        class="demo-ruleForm"
      >
        <el-form-item prop="username">
          <el-input
            v-model="sqlInfo.username"
            placeholder="请输入用户名"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            v-model="sqlInfo.password"
            placeholder="请输入密码"
            type="password"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button @click="sqlLogin">立即登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  // 组件名称
  name: "demo",
  // 组件参数 接收来自父组件的数据
  props: {},
  // 局部注册的组件
  components: {},
  // 组件状态值
  data() {
    return {
      sqlInfo: {
        username: "",
        password: "",
      },
      sqlRules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
      },
    };
  },
  mounted() {},
  /**
   * 数据更新时调用，发生在虚拟 DOM 重新渲染和打补丁之前。
   * 你可以在这个钩子中进一步地更改状态，这不会触发附加的重渲染过程。
   */
  // 计算属性
  computed: {},
  // 侦听器
  watch: {},
  // 组件方法
  methods: {
    async sqlLogin() {
      const { data: res } = await this.$axios.post("/api/login", this.sqlInfo);
      if (res.msg !== "ok") return this.$message.error("登入失败");
      this.$router.push("/home");
      console.log(res.data.token);
      sessionStorage.setItem("token", res.data.token);

      this.$message.success("登入成功");
    },
  },
  // 以下是生命周期钩子   注：没用到的钩子请自行删除
};
</script> 

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!--使用了scoped属性之后，父组件的style样式将不会渗透到子组件中，-->
<!--然而子组件的根节点元素会同时被设置了scoped的父css样式和设置了scoped的子css样式影响，-->
<!--这么设计的目的是父组件可以对子组件根元素进行布局。-->
<style  lang='scss'  scoped>
.box {
  width: 100%;
  height: 100%;
  background: #808080;
  .login {
    width: 500px;
    height: 350px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: space-around;
    .demo-ruleForm {
      width: 80%;

      .el-button {
        width: 80%;
        margin-left: 10%;
        background: green;
        color: white;
      }
    }
  }
}
</style>
