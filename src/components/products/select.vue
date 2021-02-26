<template>
    <div class="m-product-select ">
        <dl class="tab">
            <dt @mouseenter="handleClick" @mouseleave="removeClick">
                {{name}}
                <i class="el-icon-caret-bottom"></i>
            </dt>
            <dt @mouseenter="handleClick" @mouseleave="removeClick" :class="{'active': showProduct}">
                <span :class="{
                'select-title':true,
                }"> {{name}}</span>
                <span class="col" v-for="(item) in list" :key="item.id">
                    <span class="mp-item">{{item.name}}</span>
                </span>
            </dt>
        </dl>
    </div>
</template>
<script>
export default {
    props: [
        "name",
        "list"
    ],
    data(){
        return{
            showProduct:false,
        }
    },
    methods:{
        handleClick(e){
            e.stopPropagation();
            this.showProduct = !this.showProduct
        },
        removeClick(e){
            e.stopPropagation();
            this.showProduct = !this.showProduct
        }
    }
}
</script>
<style>
    
</style>

