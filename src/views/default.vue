<template>
  <div class="layout-default">
    <el-container>
      <el-header height="">
        <my-header />
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
      <el-footer height="">
        <my-footer />
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import MyHeader from '@/components/header/index.vue'
import MyFooter from '@/components/footer/index.vue'
export default {
  components: {
    MyHeader,
    MyFooter
  }
}
</script>
<style scoped>
.el-header{
  box-shadow: 0 18px 65px 0 rgba(0,0,0,0.10);
}
</style>
