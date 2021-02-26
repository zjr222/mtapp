<template>
    <div class="productDeatil">
        <el-row class="crumb" :span="24">
            <crumbs />
        </el-row>
        <el-row :span="24">
            <deatil :meta="productList"/>
        </el-row>
    </div>
</template>

<script>
import api from "@/api/index.js";
import deatil from '@/components/products/deatil.vue'
import crumbs from '@/components/products/crumbs.vue'
export default {
    components:{
        deatil,
        crumbs
    },
    data(){
        return{
            productList:{},
        }
    },
    created(){
        api.getProductsList().then(res => {
            res.data.forEach((item,index) =>{
                if(res.data[index].title == this.$route.params.title){
                    // console.log(index);
                    this.productList = {
                        ...res.data[index]
                    };
                    console.log(this.productList)
                }
            })
        });
    },
}
</script>

<style lang="scss" scoped>
 @import '@/assets/css/deatil/index.scss';
</style>
