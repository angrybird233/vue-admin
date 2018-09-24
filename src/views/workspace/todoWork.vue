<template>
	<div class="workSpace">
		<div class="contentTitle clearfix">
			<h4 class="fl">我的待办</h4>
			<div class="opearteArea fr">
				<div class="add fl iconStyle"><i class="iconfont">&#xe6f6;</i></div>
				<div class="import iconStyle fl"><i class="iconfont">&#xe639;</i></div>
				<div class="export iconStyle fl"><i class="iconfont">&#xe69d;</i></div>
				<div class=" iconStyle fl"><i class="email iconfont">&#xe66d;</i></div>
				<div class=" iconStyle fl"><i  class="edit iconfont">&#xe630;</i></div>
			</div>
		</div>
		<form id="form">
			<div class="selectPageSize fl">
				<span>show</span>
				<el-select v-model="options" placeholder="10">
			    <el-option
			      v-for="item in options"
			      :key="item.index"
			      :label="item.label"
			      :value="item.value">
			    </el-option>
		  	</el-select>
		  	<span>entries</span>
			</div>
	  	<div  class="searchbox fr">
			  <el-input placeholder="请输入内容" v-model="searchWord" class="input-with-select">
			    <el-button slot="append" icon="el-icon-search"></el-button>
			  </el-input>
			</div>
		</form>
		<!-- 表格 -->
		<el-table
	    ref="multipleTable"
	    :data="tableData"
	    :border="true"
	    :stripe= "true"
	    tooltip-effect="dark"
	    style="width: 100%"
	    @selection-change="handleSelectionChange">
	    <el-table-column
	      type="selection"
	      width="55">
	    </el-table-column>
	    <el-table-column
	      label="任务描述"
	      width="150">
	      <template slot-scope="scope">
        	<el-button type="text" size="small">相关任务描述...</el-button>
      	  </template>
	    </el-table-column>
	    <el-table-column
	      prop="progress"
	      label="措施及进展"
	      width="120">
	    </el-table-column>
	    <el-table-column
	      prop="classify"
	      label="分类"
	      show-overflow-tooltip>
	    </el-table-column>
	    <el-table-column
	      prop="priority"
	      label="优先级"
	      show-overflow-tooltip>
	    </el-table-column>
	    <el-table-column
	      prop="projectedWorkload"
	      label="预计工作量"
	      show-overflow-tooltip>
	    </el-table-column>
	    <el-table-column
	      prop="charger"
	      label="责任人"
	      show-overflow-tooltip>
	    </el-table-column>
	    <el-table-column
	      prop="tracker"
	      label="跟踪人"
	      show-overflow-tooltip>
	    </el-table-column>
	    <el-table-column
	      prop="estimatedFinishDate"
	      label="预计完成时间"
	      show-overflow-tooltip>
	    </el-table-column>
	    <el-table-column prop="delaySatus"
	      label="延期状态"
	      show-overflow-tooltip>
		    <template slot-scope="scope">
	        	<el-button :type="scope.row.delaySatus | statusFilter" size="small">已经延期{{scope.row.delaySatus}}天</el-button>
	      </template>    
	    </el-table-column>
	  </el-table>
	  <el-pagination class="fr pagination"
		  layout="prev, pager, next"
		  :total="50">
		</el-pagination>
	</div>
</template>
<script>
	export default {
		data() {
			return {  
				options: [
				{
          value: '10',
          label: '10'
        }, {
          value: '20',
          label: '20'
        }, {
          value: '30',
          label: '30'
        }
        ],
        searchWord:"",
         tableData: [{
          date: '2016-05-03',
          progress: '跟进项目进展',
          classify: '风险',
          priority: "高",
          projectedWorkload:"两个月",
          charger:"李立庄",
          tracker: "张三",
          estimatedFinishDate: "2018-12-1",
          delaySatus: 0
        }, {
          date: '2016-05-02',
          progress: '跟进项目进展',
          classify: '风险',
          priority: "高",
          projectedWorkload:"两个月",
          charger:"李立庄",
          tracker: "张三",
          estimatedFinishDate: "2018-12-1",
          delaySatus: 10
        }, {
          date: '2016-05-04',
          progress: '跟进项目进展',
          classify: '风险',
          priority: "高",
          projectedWorkload:"两个月",
          charger:"李立庄",
          tracker: "张三",
          estimatedFinishDate: "2018-12-1",
          delaySatus: 5
        }, {
          date: '2016-05-01',
          progress: '跟进项目进展',
          classify: '风险',
          priority: "高",
          projectedWorkload:"两个月",
          charger:"李立庄",
          tracker: "张三",
          estimatedFinishDate: "2018-12-1",
          delaySatus: 0
        }, {
          date: '2016-05-08',
          progress: '跟进项目进展',
          classify: '风险',
          priority: "高",
          projectedWorkload:"两个月",
          charger:"李立庄",
          tracker: "张三",
          estimatedFinishDate: "2018-12-1",
          delaySatus: 1
        }, {
          date: '2016-05-06',
          progress: '跟进项目进展',
          classify: '风险',
          priority: "高",
          projectedWorkload:"两个月",
          charger:"李立庄",
          tracker: "张三",
          estimatedFinishDate: "2018-12-1",
          delaySatus: 0
        }, {
          date: '2016-05-07',
          progress: '跟进项目进展',
          classify: '风险',
          priority: "高",
          projectedWorkload:"两个月",
          charger:"李立庄",
          tracker: "张三",
          estimatedFinishDate: "2018-12-1",
          delaySatus: 3
        }],
			}

		},
		filters :{
			statusFilter(delaySatus) {
				if(delaySatus >0) {
					return "danger"
				}else{
					return "success"
				}

			}
		},
		methods:{
			toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          })
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      }
		}
	}
</script>

<style>
.contentTitle{
	height: 40px;
	line-height: 40px;
	font-weight: 600;
}
.opearteArea i{
		display: inline-block;
		color: #666;
	}
	.opearteArea i:hover{
		color: blue;
	}
	.iconStyle{
		width: 18px;
		height: 18px;
		border: 1px solid #666;
		margin-right: 20px;
		font-size: 17px;
		text-align: center;
		line-height: 15px;
		margin-top: 8px;
		cursor: pointer;
	}
	.email,.edit{
		font-size: 18px;
	}
	#form{
		height: 50px;
		background-color: #aaa;
	}
	.selectPageSize{
		line-height: 50px;
	}
	.searchbox{
		line-height: 50px;
		margin-right: 20px;
	}
	.pagination{
		margin: 10px;
	}


</style>