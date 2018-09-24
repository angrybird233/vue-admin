<template>
	<div class="indexPage">
		<el-container class="homepage">
			<!-- 侧边栏 -->
		  <el-aside width="auto" :class="isOpen">
		  	<div class="userArea clearfix" >
		  		<div class="userImg logo fl"><img src="@/assets/images/user.png" alt=""></div>
					<div class="user fl">
						<p><span>{{username}}</span><span>{{userNum}}</span></p>
						<p>{{section}}</p>
						<p>{{position}}</p>
						<p></p>
					</div>
		  	</div>
		  	<div class="closed" v-if="isCollapse">
		  		<div class="Imgborder">
		  			<img src="@/assets/images/user.png" alt="">
		  		</div>
		  	</div>
		  	<!-- 下拉菜单和折叠面板 -->
		  	<el-menu
		      default-active= "/workspace/todoWork"
		      class="el-menu-admin"
		      @open="handleOpen"
		      @close="handleClose"
		      :router= "true"
		      :collapse-transition = "true"
		      :collapse="isCollapse"
		      background-color="#545c64"
		      text-color="#fff"
		      active-text-color="#ffd04b">
		      <el-submenu index="/workspace/todoWork">
		        <template slot="title">
		          <i class="iconfont workIcon asideIcon ">&#xe70e;</i>
		          <span class="asideTitle">我的工作空间</span>
		        </template>
		        <el-menu-item-group>
		          <el-menu-item index="/workspace/todoWork">我的待办</el-menu-item>
		          <el-menu-item index="/workspace/tracking">我的跟踪</el-menu-item>
		          <el-menu-item index="/workspace/historyWork">历史任务</el-menu-item>
		        </el-menu-item-group>
		      </el-submenu>
		      <el-submenu index="2">
		        <template slot="title">
		          <i class="el-icon-tickets asideIcon"></i>
		          <span class="asideTitle">会议管理</span>
		        </template>
		        <el-menu-item-group>
		          <el-menu-item index="2-1">会议列表</el-menu-item>
		          <el-menu-item index="2-2">历史会议</el-menu-item>
		          <el-menu-item index="2-3">待归档会议纪要</el-menu-item>
		           <el-menu-item index="2-3">已归档会议纪要</el-menu-item>
		        </el-menu-item-group>
		      </el-submenu>
		      <el-submenu index="3">
		        <template slot="title">
		          <i class="iconfont asideIcon">&#xe658;</i>
		          <span class="asideTitle">版本状态</span>
		        </template>
		        <el-menu-item-group>
		          <el-menu-item index="3-1">SIGMA1.0.R6C00</el-menu-item>
		          <el-menu-item index="3-2">SIGMA1.0.R5C00</el-menu-item>
		          <el-menu-item index="3-3">SIGMA1.0.R4C00</el-menu-item>
		        </el-menu-item-group> 
		      </el-submenu>
					<el-submenu index="4">
		        <template slot="title">
		          <i class="iconfont asideIcon versionIcon">&#xe61c;</i>
		          <span class="asideTitle">版本管理</span>
		        </template>
		        <el-menu-item-group>
		          <el-menu-item index="4-1">版本设置</el-menu-item>
		        </el-menu-item-group> 
		      </el-submenu>
		    </el-menu>

		  </el-aside>

		  <el-container>
		  	<!-- 头部区域 -->
		    <el-header>
		    	<i class="iconfont fl toggleBtn" @click="toggle">&#xe67f;</i>
		    	<!-- 面包屑导航 -->
		    	<el-breadcrumb separator="/" class="fl" >
					  <el-breadcrumb-item :to="{ path: '/' }">我的工作空间</el-breadcrumb-item>
					  <el-breadcrumb-item :to="{path: '/workspace/todoWork'}">我的待办</el-breadcrumb-item>
					  <el-breadcrumb-item :to="{path: '/workspace/tracking'}">我的跟踪</el-breadcrumb-item>
					  <el-breadcrumb-item :to="{path: '/workspace/historyWork'}">历史任务</el-breadcrumb-item>
					</el-breadcrumb>
		    	 <el-dropdown class="rightMenu fr" trigger="click">
			      <span class="el-dropdown-link">
			        <div class=" fr">
			    		<div class="userPhoto fl">
			    			<img src="@/assets/images/user.png" alt="">
			    		</div>
			    		<span class="username fl">{{username}}</span>
			    		<span class="fl">{{userNum}}</span>
			    		<i class="el-icon-arrow-down arrow-down  fr"></i>
		    		</div>
			      </span>
			      <el-dropdown-menu slot="dropdown">
			        <el-dropdown-item>注销</el-dropdown-item>
			      </el-dropdown-menu>
			    </el-dropdown>
		    </el-header>
		    <!-- 内容区域 -->
		    <el-main>
		    	<router-view/>
		    </el-main>
		  </el-container>
		</el-container>
		
	</div>
</template>	
<script>
	export default {
		data(){
			return {
				username: "李华",
				userPhoto: '',
				userNum : '00612414',
				position: '版本经理',
				section: '网关平台硬件交付...',
				isCollapse: false,
				isOpen: "el-aside"
			}
		},
		 methods: {
	      handleOpen(key, keyPath) {
	        console.log(key, keyPath);
	      },
	      handleClose(key, keyPath) {
	        console.log(key, keyPath);
	      },
	      toggle() {
	      	this.isCollapse = !this.isCollapse
	      	if(this.isOpen === "el-aside"){
	      		this.isOpen = "el-aside-active"
	      	}else{
	      		this.isOpen = "el-aside"
	      	}
	      }


    	}
	}
</script>
<style class="css" scoped>
	.indexPage{
		height: 100%;
	}
	.el-header {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
  	}
  
  .el-aside {
  	transition: width 2s;
    background-color: #545c64;
    color: #666;
    text-align: center;
    height: 970px;
  }
  .el-aside-active {
    width: 64px;
  }
  .el-aside-active .userArea{
	display: none;
  }
  .closed{
  	width: 64px;
  	height: 64px;
  	
  }
  .closed .Imgborder{
  	width: 30px;
  	height: 30px;
  	display: inline-block;
  	border-radius: 50%;
  	border: 2px solid #fff;
  	text-align: center;
  	margin-top: 15px;
  }
  .closed img{
  	height: 30px;
  }

  .el-menu-admin:not(.el-menu--collapse) {
    width: 250px;
  }
  .el-container {
    height: 100%;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #000;
    width: 100%;
    padding: 5px 20px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  /* 侧边栏样式 */
  .userArea{
  	transition: display 2s;
  	width: 250px;
  	height: 180px;
  	display: block;
  	border-bottom: 1px solid #666;
  }
  .userImg{
  	height: 74px;
  	width: 74px;
  	margin: 50px 0 0 20px;
  	border: 4px solid #fff;
  	border-radius: 50%;
  }
  .userImg img{
	height: 100%;
  }
	.user{
		height: 74px;
		line-height: 74px;
		margin: 50px 0 0 10px;
	}
	.user span{
		display: inline-block;
		margin-right: 6px;
	}
	.user span,.user p{
		line-height: 30px;
		text-align: left;
		color: #fff;
	}
	.meeting-admin,.asideIcon{
		float: left;
		margin-left: 34px;
	}
	.asideIcon{
		float: left;
		margin-left: 3px;
		font-size: 20px;
		line-height: 56px;
	}
	.workIcon{
		font-size: 16px;
	}
	.versionIcon{
		font-size: 26px;
		margin-left: 2px;
	}
	.asideTitle{
		text-align: center;
		margin-left: -55px;
	}
	/* 头部区域 */
	.toggleBtn{
		font-weight: 600;
		font-size: 25px;
		cursor: pointer;
	}
	.arrow-down {
		line-height: 52px;
		font-weight: 600;
	}
	.rightMenu{
		margin-right: 10px;
		font-size: 16px;
		font-weight: 600;
		color: #000;
	}
	.rightMenu .userPhoto{
		width: 38px;
		height: 38px;
		border-radius: 50%;
		border:  2px solid #fff;
		margin-top: 6px;
		margin-right: 15px;
	}
	.username{
		margin-right: 10px;
	}
	.userPhoto img{
		height: 100%;
	}
	/* 面包屑样式 */
	.el-breadcrumb{
		line-height: 52px;
		margin-left: 15px;
	}


</style>
