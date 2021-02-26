<template>
  <div class="search-panel">
    <el-row class="m-header-searchbar">
      <el-col :span="3" class="left">
        <router-link :to="{ path: '/'}"><img class="appicon" src="https://s0.meituan.net/bs/fe-web-meituan/fa5f0f0/img/logo.png" title="美团app" alt="美团app"></router-link>
      </el-col>
      <el-col :span="15" class="center">
        <div class="wrapper">
          <el-input
            v-model="searchWord"
            placeholder="搜索商家或地点"
            @focus="focusInput"
            @blur="blurInput"
            @input="input"
          ></el-input>
          <el-button type="primary" icon="el-icon-search"></el-button>
          <dl class="hotPlace" v-if="isHotPlace">
            <dt>热门搜索</dt>
            <dd v-for="(item, index) in hotPlaceList" :key="item + '_'+ index">
              <router-link :to="{name: 'goods', params: {name: item}}">{{item}}</router-link>
            </dd>
          </dl>
          <dl class="searchList" v-if="isSearchList">
            <dd v-for="(item, index) in searchList" :key="index">
              <router-link :to="{name: 'goods', params: {name: item}}">{{item}}</router-link>
            </dd>
          </dl>
        </div>
        <p class="suggest">
          <router-link
            v-for="(item, index) in suggestList"
            :key="item + '~' + index"
            :to="{name: 'goods', params: {name: item}}"
          >{{item}}</router-link>
        </p>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import api from "@/api/index.js";
export default {
  data() {
    return {
      searchWord: "",
      isFocus: false,
      hotPlaceList: [],
      searchList: [],
      suggestList: []
    };
  },
  methods: {
    focusInput() {
      this.isFocus = true;
    },
    blurInput() {
      var self = this;
      setTimeout(function() {
        self.isFocus = false;
      }, 200);
    },
    input() {
        let val = this.searchWord;
        api.getSearchList().then(res=>{
            this.searchList = res.data.list.filter((item,index)=>{
                return item.indexOf(val) > -1;
            })
        })
    }
  },
  computed: {
    isHotPlace() {
        return !this.searchList.length && this.isFocus;
    },
    isSearchList() {
        return this.searchList.length && this.isFocus;
    }
  },
  created() {
    api.searchHotWords().then(res => {
      this.suggestList = res.data;
      this.hotPlaceList = res.data;
    });
  },
  watch: {
    "$route.params.name": () => {
      this.searchWord = this.$route.params.name;
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/css/public/header/index.scss";
@import "@/assets/css/public/header/search.scss";
</style>
