<template>
    

<el-container style="height: 500px; border: 1px solid #eee">
  <el-aside width="300px" style="background-color: rgb(238, 241, 246)">
    <el-menu :default-openeds="['1', '6']">
       
        <el-menu-item index="1"><i class="el-icon-star-on"></i>首页</el-menu-item>      
        <el-menu-item index="2"><i class="el-icon-star-on"></i>管理员管理</el-menu-item>
        <el-menu-item index="3"><i class="el-icon-star-on"></i>用户管理</el-menu-item>
        <el-menu-item index="4"><i class="el-icon-star-on"></i>投票信息管理</el-menu-item>
        <el-menu-item index="5"><i class="el-icon-star-on"></i>科研成果信息管理</el-menu-item>
        <el-submenu index="6">
           <template slot="title"><i class="el-icon-star-on"></i>系统设置</template> 
           <el-menu-item-group>      
              <el-menu-item index="1-1">修改密码</el-menu-item>
              <el-menu-item index="1-2">修改个人资料</el-menu-item>
           </el-menu-item-group>      
        </el-submenu>

    </el-menu>
  </el-aside>
  
  <el-container>
    <el-header style="text-align: right; font-size: 12px">
      <el-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>注销</el-dropdown-item>
          <el-dropdown-item>刷新</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <span>此处添加管理员名</span>
    </el-header>
    
    <el-main>
      <el-table :data="tableData">
        <el-table-column prop="date" label="管理员名" width="140">
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="120">
        </el-table-column>
        <el-table-column prop="address" label="地址">
        </el-table-column>
        <el-table-column prop="do" label="操作">
        </el-table-column>
      </el-table>
    </el-main>
  </el-container>
</el-container>
</template>

<style>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  
  .el-aside {
    color: #333;
  }
</style>

<script>
  export default {
      name:'manager',
    data() {
      const item = {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        do:<el-row>
  <el-button type="info" round>查看</el-button>
  <el-button type="info" round>添加</el-button>
  <el-button type="info" round>删除</el-button>
          </el-row>

      };
      return {
        tableData: Array(20).fill(item)
      }
    }
  };
</script>