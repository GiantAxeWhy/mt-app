<template>
    <div class="page-default">
      <el-container>
        <el-header height="">
        <my-header />
      </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
        <el-footer height="">
       <my-footer/>
        </el-footer>
      </el-container>
    </div>
</template>

<script>
  import myHeader from '@/components/header/index.vue';
  import MyFooter from '@/components/footer/index.vue'
    export default {
     components:{
       myHeader,
       MyFooter
     }

    }
</script>

<style lang="scss">
  @import "@/assets/css/public/layout.scss";
</style>
