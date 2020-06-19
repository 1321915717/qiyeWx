<template>
	<view class="page">
	<view class="bg-white top" style="width: 750rpx;  display: flex; justify-content: center;">
		<view class="logo">
			<image class="logo-image" src="../../static/logo3.png"></image>
		</view>
		<view class="top-titles">
			<view class="top-title" style="font-size: 35rpx; margin-top: 6rpx;">西安航天远征流体控制股份有限公司</view>
			<view class="top-title" style="font-size: 25rpx; margin-top: -6rpx;">Xi'an Aerospace Yuanzheng Fluid Control Co,.Ltd</view>
		</view>
	</view>
	<view class="cu-bar search bg-white">
		<view class="search-form ">
			<text class="cuIcon-search"></text>
			<input v-if="type=='c'" v-model="searchName" @click="search" :adjust-position="false" type="text" placeholder="搜索产品" confirm-type="search"></input>
			<input  v-if="type=='e'"  v-model="searchName" @click="search" :adjust-position="false" type="text" placeholder="Search" confirm-type="search"></input>
		</view>
		<view class="action">
			<button class="cu-btn bg-blue shadow-blur" @click="search">{{type=='c'?'搜索':'Search'}}</button>
		</view>
	</view>
	<view class="tag-box">
		<view v-if="type=='c'" class="cu-tag bg-blue" v-for="category in categoryList" :key="category.cId" @click="getgoods(category.cId)">{{category.cName}}</view>
		<view v-if="type=='e'" class="cu-tag bg-blue" v-for="category in categoryList" :key="category.cId" @click="getgoods(category.cId)">{{category.cEname}}</view>
				
		<view class="cu-tag bg-red" @click="intocategory">{{type=='c'?'更多':'More'}}</view>
		
	</view>
			<!-- <view class="xiala bg-white">
				<view class="xiala-item" @click="show">{{onename}}<span style="font-size: 20rpx; margin-left: 5rpx;" class="iconfont   icon-xiala "></span></view>
				<view class="xiala-item" @click="showTwo">{{twoname}}<span style="font-size: 20rpx; margin-left: 5rpx;"  class="iconfont  icon-xiala"></span></view>
				<view class="xiala-item" @click="showThree">{{threename}}<span style="font-size: 20rpx; margin-left: 5rpx;"  class="iconfont  icon-xiala"></span></view>
			</view>
			
			<popupLayer ref="popupRef" :direction="'bottom'"   >
				<view class="po-item" v-for="one in UnitList" :key="one.id" @click="changeone(one)" >
					{{one.name}}
				</view>
			</popupLayer>
			<popupLayer ref="popupRefTwo" :direction="'bottom'"   >
				<view class="po-item" v-for="two in DepartmentList" :key="two.id" @click="changetwo(two)">
					{{two.name}}
				</view>
			</popupLayer>
			<popupLayer ref="popupRefThree" :direction="'bottom'">
				<view class="po-item" v-for="Three in UserList" :key="Three.id" @click="changeThree(Three)">
					{{Three.name}}
				</view>
			</popupLayer> -->
		<view class="my-tu bg-white" >
			<view class="tu-item"  v-for="goods in goodsList" :key="goods.gId" @click="intoproduct(goods.gId)">
			<image  class="goodsimag" :src="goods.gImg"></image>
			<view class="text-center" style="overflow: hidden;white-space: nowrap;text-overflow: ellipsis;">{{goods.gTitle}}</view>
			</view>
			
			<view v-if="goodsList.length==0" style="margin-top: 200rpx; width: 750rpx; text-align: center;">nothing</view>
		
		</view>
		

 	<menus></menus>

	</view>
</template>

<script>
	

	import interfaces from '../../utils/interfaces.js';
	 import popupLayer from '../../components/popup-layer/popup-layer.vue';
	 import menus from "../../components/menu.vue";
	 import {
	         mapState,
	         mapMutations
	     } from 'vuex';
	export default {
		components:{
				popupLayer,
				menus
		},
		computed: {
		            ...mapState(['type'])
		        },
		data() {
			return {
				goodsList:[],
				categoryList:[],
					 pageNum:1,
					 hasNext:true,
					 searchName:"",
					
				
				}
		},
	
		onLoad() {
			this.getData();
			this.getgoods(-1);
		
		},
		 watch:{
			 
			 searchName(){
				 if(this.searchName==""){
					this.getgoods(-1);
				 }
			 },
			 
			 type(){
				this.getgoods(-1);
			 }
		    },
			onShow(id) {
				if(!!id){
					console.log(id);
					this.getgoods(id);
				}
			},
		methods: {
			search(){
				if(this.searchName==""){
					return;
				}
				
				this.request({
					url: interfaces.searchGoods,
					data:{
						name:this.searchName,
						
						type:this.type
					},
					success: ((res) => {
						console.log(res)
						if(res.errno==0){
						
							this.hasNext=res.data.hasNextPage;
						this.goodsList=	res.data; 
						}
						
					
				
					})
				})
				
			},
			intocategory(){
				uni.navigateTo({
					url:"../categorys/categorys"
				})
			},
			intoproduct(id){
				uni.navigateTo({
					url:"../product/product?id="+id,
					success: res => {},
					fail: () => {},
					complete: () => {}
				})
			},
			getData(){
				this.request({
					url: interfaces.getcategory,
					success: ((res) => {
						console.log(res);
						if(res.errno==0){
						this.categoryList=res.data;
						}
						
					
				
					})
				})
			},
			onReachBottom(){
				
					if(this.hasNext==true){
						this.request({
							url: interfaces.getGoodsByCid,
							data: {
							    pageNum:this.pageNum,
							    pageSize:30,
							    cid:-1,
							    type:this.type
							    },
							success: ((res) => {
								console.log(res)
								if(res.errno==0){
									this.pageNum=res.data.pageNum+1;
									this.hasNext=res.data.hasNextPage;
									for(let i=0;i<res.data.list.length;i++){
										this.goodsList.push(res.data.list[i]);
										
									}
									
								}
								
							
						
							})
						})
					}else{
						if(this.type=="c"){
							setTimeout(function(){
							         uni.showToast({
							                        icon:"none",
							         				duration:2000,
							                        title:"没有更多了"
							                    });
							          }, 500)
						}else{
							setTimeout(function(){
							         uni.showToast({
							                        icon:"none",
							         				duration:2000,
							                        title:"No more"
							                    });
							          }, 500)
							
						}
					}
			},
			getgoods(id){
				this.pageNum=1;
				this.request({
					url: interfaces.getGoodsByCid,
					data:{
						pageNum:this.pageNum,
						pageSize:30,
						cid:id,
						type:this.type
					},
					success: ((res) => {
						console.log(res)
						if(res.errno==0){
						
							this.hasNext=res.data.hasNextPage;
						this.goodsList=	res.data.list; 
						}
						
					
				
					})
				})
			},
			changeone(one){
				
				this.UnitSelected=one.id;
				this.onename=one.name;
				this.hasNext=true;
				this.pageNum=1;
				this.goodsList=[];
				this.getgoods(one.id);
				
				this.close();
			},
			onPullDownRefresh() {
			        //监听下拉刷新动作的执行方法，每次手动下拉刷新都会执行一次
					 this.hasNext=true;
					 this.pageNum=1;
					 this.goodsList=[];
					this.hasNext=true;
					
					this.getData();
					this.getgoods(-1);
							
					  
			    }
			
			
		
			
		}
	
	}
</script>

<style>
	@import url("category.css");
	
	.tag-box{
		padding: 30rpx;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
	}
.top{
		display: flex;
		flex-direction: row;
		justify-content: center;
	}
	.logo{
		
		width: 80rpx;
		height: 80rpx;
	}
	.logo-image{
		width: 80rpx;
		height: 80rpx;
	}
	.top-titles{
		
		color: #00ACFC;
		width: 610rpx;
	}
	.top-title{
		
	
		color: #00ACFC;
		text-align: center;
		
		font-size: 40rpx;
		font-weight: bold;
		width: 610rpx;
	}
</style>
