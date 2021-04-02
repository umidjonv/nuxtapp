<template>
    <li v-for="cat in list">
    </li>
</template>

<script lang="ts">
import Vue from 'vue'
import { Category } from '../src/data/Category'
const vue = Vue.extend({
    

});

var list:Array<Category> = [];

list = [
    new Category({ id:1, name:"Обувь"}),
]


export default vue;

</script>


