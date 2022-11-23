<script setup>
import axios from 'axios'
import Login from "./Login.vue"
import LR from './LR.vue'
</script>

<template>
    <div class="common-layout">
      <el-container>
        <el-header style="text-align:center">
          <div class="heads">
            登录
          </div>
        </el-header>
        <el-container>
          <!-- <el-aside>
            <img :src="img"/>
            <button @click="clis">进入</button>
            <button @click="cliss">进入2</button>
          </el-aside> -->
          <el-main>
            <div class="login">
              <div class="login-div">
                <Login/>
              </div>
            </div>
          </el-main>
        </el-container>
      </el-container>
    </div>
  </template>
<style scoped>
   .login-div{
    width: 30%;margin: 0 auto;
   }
   .heads{
    height: 60px; line-height: 60px;
   }
</style>
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
          //  self.img=response.data.data.img
        }
        
        )
    },
    cliss(){
        const self = this
        axios.get('/user_yy').then(function (response){
           console.log(response.data)
          //  self.img=response.data.data.img
        }
        
        )
    }
  }
}
  </script>