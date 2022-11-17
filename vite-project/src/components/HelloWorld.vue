<template>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column prop="name" label="Date" width="180" />
    <el-table-column prop="password" label="Name" width="180" />
    <el-table-column prop="orders" label="Address" />
  </el-table>
</template>

<script>
import { affixProps } from 'element-plus';
import axios from 'axios'

export default{

  data() {
    return {
      tableData : []
    }
  },
  
  created:function() {
    const  self = this
    this.$axios.get("/user_order")
    .then(function(response){
      self.tableData = response.data
    }
    )
  },
  
}
</script>
