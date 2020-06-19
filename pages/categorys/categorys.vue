<template>
	<view>
	<view class="bg-white top" style="width: 750rpx;  display: flex; justify-content: center;">
		<view class="logo">
			<image class="logo-image" src="../../static/logo3.png"></image>
		</view>
		<view class="top-titles">
			<view class="top-title" style="font-size: 35rpx; margin-top: 6rpx;">西安航天远征流体控制股份有限公司</view>
			<view class="top-title" style="font-size: 25rpx; margin-top: -6rpx;">Xi'an Aerospace Yuanzheng Fluid Control Co,.Ltd</view>
		</view>
	</view>
		<view class="VerticalBox">
			<scroll-view class="VerticalNav nav" scroll-y scroll-with-animation :scroll-top="verticalNavTop" style="height:calc(100vh - 375upx)">
				<view v-if="type=='c'" class="cu-item" :class="index==tabCur?'text-black cur':''" :id="item.cId" v-for="(item,index) in list" :key="index"  @tap="TabSelect($event,item.cName)"
				 :data-id="index">
					{{item.cName}}
				</view>
				<view v-if="type=='e'" class="cu-item" :class="index==tabCur?'text-black cur':''" :id="item.cId" v-for="(item,index) in list" :key="index"  @tap="TabSelect($event,item.cEname)"
				 :data-id="index">
					{{item.cEname}}
				</view>
			</scroll-view>
			<scroll-view class="VerticalMain"  scroll-y scroll-with-animation >
				<view class="padding-top padding-lr">
					<view class="cu-bar solid-bottom bg-white">
						<view class="action">
							<text class="cuIcon-title text-green"></text>{{categoryName}}</view>
					</view>
					
					<view class="category-box bg-white" >
						<view class="category-item"  @click="into(two.cId)" v-for="two in  TwoList" :key="two.cId">
							<view class="category-image">
								<image class="category-image" :src="two.cImg"></image>
							</view>
							<view class="category-title">{{two.cName}}</view>
						</view>
					</view>
					
				</view>
			</scroll-view>
			
		</view>
		
	
	</view>
</template>

<script>
	import interfaces from '../../utils/interfaces.js';
		import {
		        mapState,
		        mapMutations
		    } from 'vuex';
	export default {
	computed: {
	            ...mapState(['type'])
	        },
		data() {
			return {
				
				list: [],
				categoryName:"",
				tabCur: 0,
				mainCur: 0,
				height:0,
				verticalNavTop: 0,
				cid:-1,
				TwoList:[],
				hasNextPage:true
			};
		},
		onLoad() {
			var _this=this;
			           // 获取手机状态栏高度
			           uni.getSystemInfo({
			               success:function(data){
			                   // 将其赋值给this
			                   _this.height=data.statusBarHeight;
			               }
			           });
			uni.showLoading({
				title: '加载中...',
				mask: true
			});
			
			
			this.request({
								url: interfaces.getoneCategory,
			/* 					data:{sessionKey:sessionKey}, */
								success: ((res) => {
								
									this.list=res.data;
									this.getTwoCategory(this.list[0].cId);	
									if(this.type=="c"){
										this.categoryName=this.list[0].cName;
									}else{
										this.categoryName=this.list[0].cEname;
									}
									
								
								})
							});
			
			
			
		},
		onReady() {
			uni.hideLoading()
		},
		
		methods: {
			into(id){
				var pages = getCurrentPages();
				var prevPage = pages[pages.length - 2]; 
				prevPage.onShow(id);
				uni.navigateBack({
					
				});
			},
			getData(){
				
					this.request({
										url: interfaces.getoneCategory,
					/* 					data:{sessionKey:sessionKey}, */
										success: ((res) => {
											console.log(res);
											this.list=res.data;
												
										
										
										})
									});
				
			},
			
			
			getTwoCategory(id){
				
				this.request({
									url: interfaces.getTwoCategory,
				 					data:{pid:id}, 
									success: ((res) => {
										console.log(res);
										this.TwoList=res.data;
											
									
									
									})
								});
			},
			
			TabSelect(e,name) {
				
				this.tabCur = e.currentTarget.dataset.id;
				this.getTwoCategory(e.target.id);
				this.categoryName=name;
				this.cid=e.target.id;
				
				
			},
			VerticalMain(e) {
				// #ifdef MP-ALIPAY
				   return false  //支付宝小程序暂时不支持双向联动 
				// #endif
				let that = this;
				let tabHeight = 0;
				if (this.load) {
					for (let i = 0; i < this.list.length; i++) {
						let view = uni.createSelectorQuery().select("#main-" + this.list[i].cId);
						view.fields({
							size: true
						}, data => {
							this.list[i].top = tabHeight;
							tabHeight = tabHeight + data.height;
							this.list[i].bottom = tabHeight;
						}).exec();
					}
					this.load = false
				}
				let scrollTop = e.detail.scrollTop + 10;
				for (let i = 0; i < this.list.length; i++) {
					if (scrollTop > this.list[i].top && scrollTop < this.list[i].bottom) {
						this.verticalNavTop = (this.list[i].id - 1) * 50
						this.tabCur = this.list[i].id
						console.log(scrollTop)
						return false
					}
				}
			},
			
		
	
	
		},
	}
</script>

<style>
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
	.category-item{
		margin-left: 10rpx;
		margin-top: 40rpx;
		width: 150rpx;
		height: 150rpx;
	}
	.category-image{
		width: 150rpx;
		height: 150rpx;	
	}
	.category-title{
		text-align: center;
		width: 150rpx;
	}
	.category-box{
		width: 100%;
		padding-bottom: 80rpx;
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: baseline;
		
		flex-wrap: wrap;
	}
	.fixed {
		position: fixed;
		z-index: 99;
	}

	.VerticalNav.nav {
		width: 200upx;
		white-space: initial;
	}

	.VerticalNav.nav .cu-item {
		width: 100%;
		text-align: center;
		background-color: #fff;
		margin: 0;
		border: none;
		height: 50px;
		position: relative;
	}

	.VerticalNav.nav .cu-item.cur {
		background-color: #f1f1f1;
	}

	.VerticalNav.nav .cu-item.cur::after {
		content: "";
		width: 8upx;
		height: 30upx;
		border-radius: 10upx 0 0 10upx;
		position: absolute;
		background-color: currentColor;
		top: 0;
		right: 0upx;
		bottom: 0;
		margin: auto;
	}

	.VerticalBox {
		display: flex;
	}

	.VerticalMain {
		background-color: #f1f1f1;
		flex: 1;
	}
</style>
