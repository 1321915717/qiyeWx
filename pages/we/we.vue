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
		<view class="we-top">
			<image src="../../static/banners.png"></image>
		</view>
		<view class="we-center bg-white">
			<view @click="intotech">
				<view class="we-item bg-white">
					<image style="width: 70rpx;height: 70rpx;" src="../../static/jishu.png"></image>
				</view>
				<view class="we-title text-center" >{{type=='c'?'技术实力':'Technology'}}</view>
			</view>
			<view @click="intomu">
				<view class="we-item bg-white">
					<image style="width: 70rpx;height: 70rpx;" src="../../static/zhizao.png"></image>
				</view>
				<view class="we-title text-center">{{type=='c'?'制造能力':'Capacity'}}</view>
			</view>
			<view @click="intohonor">
				<view class="we-item bg-white">
					<image  style="width: 70rpx;height: 70rpx;" src="../../static/rongyu.png"></image>
				</view>
				<view class="we-title text-center">{{type=='c'?'资质荣誉':'Honor'}}</view>
			</view>
			<view @click="intocust">
				<view class="we-item bg-white">
					<image  style="width: 70rpx;height: 70rpx;"  src="../../static/he.png"></image>
				</view>
				<view class="we-title text-center">{{type=='c'?'客户群体':'Partner'}}</view>
			</view>
		</view>
		<view class="bg-white my-title">{{type=='c'?'企业介绍':'Introduce '}}</view>
		<!-- <view v-show="video!=''" class="we-video" style="margin-bottom: 80rpx;">
			<video :src="video"  style="width: 750rpx; height: 400rpx;"  objectFit="cover"></video>
		</view> -->
		<view class="we-bottom bg-white" v-if="type=='c'">
				<u-parse :content="jianjie"  ></u-parse>
		</view>
		
		<view v-else class="we-bottom bg-white" >
		
				<u-parse :content="jianjieE"  ></u-parse>
		</view>
		
		<menus></menus>
	</view>
</template>

<script>
	import {
	        mapState
	    } from 'vuex';
		import uParse from '@/components/u-parse/u-parse.vue'
	import menus from "../../components/menu.vue"
		import interfaces from '../../utils/interfaces.js';
	export default {
		computed: {
		            ...mapState(['type'])
		        },
		components:{
			menus,
			uParse
		},
		data() {
			return {
				jianjie:"",
				jianjieE:"",
				swiperList:[],
				video:""
			}
		},
		onLoad() {
			this.getData();
			this.getImg();
		},
		methods: {
			onPullDownRefresh() {
			        //监听下拉刷新动作的执行方法，每次手动下拉刷新都会执行一次
					this.getData();
					this.getImg();
					
					 uni.stopPullDownRefresh();
					
			    },
			getImg(){
			this.request({
				url: interfaces.getvideo,
				success: ((res) => {
					if(res.errno==0){
						if(res.data!=null){
						this.video=res.data.gUrl;	
						}
						
						
						/* for(let i=0;i<this.swiperList.length;i++){
							if(this.swiperList[i].gType=="video"){
								this.video=this.swiperList[i];
							}
							
						
						} */
					}
					
				
			
				})
			})
			},
			
			getData(){
		
				this.request({
					url: interfaces.getIntroduce,
					success: ((res) => {
						if(res.errno==0){
							this.jianjie=res.data.introduce;
							this.jianjieE=res.data.eintroduce;
						}
						//console.log(res);
						
					
				
					})
				})
			},
			intotech(){
				uni.navigateTo({
					url:"../tech/tech"
				})
			},
			intomu(){
				uni.navigateTo({
					url:"../mu/mu"
				})
			},
			intohonor(){
			uni.navigateTo({
				url:"../honor/honor"
			})
			},
			intocust(){
				uni.navigateTo({
					url:"../customer/customer"
				})
			}
		}
	}
</script>

<style>
	@import url("@/components/u-parse/u-parse.css");
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
	.we-top{
		width: 750rpx;
		
	}
	.my-title{
		background-image:url(https://ppt-download.oss-cn-beijing.aliyuncs.com/%E4%BC%81%E4%B8%9A/banner.png);background-repeat:no-repeat;
		        background-size:100% 100%;
		width: 750rpx;
		text-align: center;
		font-size: 30rpx;
		font-weight: bold;
		color: #FFFFFF;
		padding: 20rpx 0;
		margin: 10rpx 0rpx;
	}
	.we-video{
		width: 750rpx;
		height: 300rpx;
	}
	.we-top>image{
		width: 750rpx;
		height: 300rpx;
	}
	.we-center{
		margin-top: 10rpx;
		margin-bottom: 10rpx;
		width: 750rpx;
		padding: 30rpx;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
	.we-item{
		width: 70rpx;
		height: 70rpx;
		
		
		text-align: center;
		line-height: 70rpx;
	}
	.we-title{
		margin-top: 10rpx;
		width: 80rpx;
		font-size: 20rpx;
	}
	.we-item>text{
		font-size: 30px;
		color: #1296DB;
	}
	.we-bottom{
		padding: 20rpx;
		min-height: 800rpx;
	}
	.one{
		margin-bottom: 20rpx;
		font-size: 25rpx;
	}
</style>
