<template>
  <div class="deatil">
    <div class="info">
      <h2 class="meta">{{meta.title}}</h2>
      <div class="row">
        <div class="rate-stars">
          <el-rate
            v-model="meta.score"
            disabled
            show-score
            text-color="#ff9900"
            score-template="{value}"
          ></el-rate>
        </div>
        <div class="share-seller">
          <a href>
            <i class="icon icon-wechat"></i>
            分享到微信
          </a>
        </div>
      </div>
      <hr>
      <div class="select-body">
          <div class="item">
              <span>地址 : {{meta.address}}</span>
          </div>
          <div class="item">
              <span>营业时间 : </span>
              <span>周一至周日全天</span>
          </div>
      </div>
    </div>
    <div class="view">
        <div class="show">
            <img :src="meta.image" alt="图片">
        </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["meta"],
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/deatil/index.scss";
</style>