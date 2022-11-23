<script setup>
import axios from 'axios'
import Login from "./Login.vue"
import LR from './LR.vue'
</script>

<template>
    <div class="common-layout">
      <el-container>
        <el-header>Header</el-header>
        <el-container>
          <el-aside width="70%">
            <img :src="img"/>
            <button @click="clis">进入</button>
          </el-aside>
          <el-main style="border:1px solid rgb(161 54 54)"><Login/></el-main>
        </el-container>
      </el-container>
    </div>
  </template>

  <script>
  export default{
    data() {
      return {
        img : ""
      }
    },
    
    methods:{
      clis(){
        const self = this
        axios.get('/user_xx').then(function (response){
           console.log(response.data.data)
           self.img=response.data.data.img
        }
        
        )
    }
  }
}
  </script>