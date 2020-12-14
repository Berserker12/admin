<template>
  <div class="container">
    <el-container>
      <el-header>
        <p>UNI-ADMIN</p>
        <el-menu
          :default-active="activeIndex2"
          class="el-menu-demo"
          mode="horizontal"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          router
        >
          <el-menu-item
            :index="item.path"
            v-for="(item, index) in sqlMenu"
            :key="index"
            @click="sqlSet(item)"
          >
            {{ item.name }}
          </el-menu-item>
          <el-submenu index="2">
            <template slot="title">admin</template>
            <el-menu-item>修改</el-menu-item>
            <el-menu-item @click="sqlOut">退出</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu default-active="3" class="el-menu-vertical-demo" router>
            <el-menu-item
              :index="item.path"
              v-for="(item, index) in sqlMenus"
              :key="index"
            >
              <i class="el-icon-setting"></i>
              <span slot="title">{{ item.name }}</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import city from "../city/city.js";
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
      sqlMenu: city,
      activeIndex2: "",
      sqlMenus: [],
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
    sqlSet(item) {
      this.sqlMenus = item.children;
      console.log(this.sqlMenus);
    },
    async sqlOut() {
      const { data: res } = await this.$axios.post("/api/logout");
      console.log(res);
      if (res.msg == "ok") {
        sessionStorage.removeItem("token");
        this.$router.push("/");
        this.$message.info("已经退出登入");
      } else {
        this.$message.error("退出失败");
      }
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
.container {
  width: 100%;
  height: 100%;
}
.el-container {
  height: 100%;
}
.el-header {
  background-color: #545c64;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.el-aside {
  background-color: #d3dce6;
}
.el-main {
  background-color: #e9eef3;
}
</style>
