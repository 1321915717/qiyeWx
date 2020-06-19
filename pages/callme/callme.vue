<template>
	<view>
		<view class="bg-white top" style="width: 750rpx;  display: flex; justify-content: center;">
			<view class="logo">
				<image class="logo-image" src="../../static/logo3.png"></image>
			</view>
			<view class="top-titles">
				<view class="top-title" style="font-size: 35rpx;  margin-top: 6rpx;">西安航天远征流体控制股份有限公司</view>
				<view class="top-title" style="font-size: 25rpx; margin-top: -6rpx;">Xi'an Aerospace Yuanzheng Fluid Control Co,.Ltd</view>
			</view>
		</view>
		<view class="we-top">
			<image src="../../static/banners.png"></image>
		</view>
		<view class="bg-white my-title">{{type=='c'?'联系方式':'Contact information'}}</view>
		<view class="info bg-white" v-if="type=='c'">
				<u-parse :content="jianjie"  ></u-parse>
		</view>
		
		<view v-else class="info bg-white" >
		
				<u-parse :content="jianjieE"  ></u-parse>
		</view>
	
		<view class="my-banner">
			<image src="../../static/banner-2.jpg"></image>
		</view>
		<view class="bg-white my-title">{{type=='c'?'在线留言':'Leave word'}}</view>
		<view class="input-box">
			<view class="input-title"><span class="input-title-one">*</span>{{type=='c'?'姓名':'name'}}:</view>
			<view class="my-input">
				<input v-if="type=='c'" placeholder="请输入您的姓名" v-model="name">
				<input  v-if="type=='e'" placeholder="Please enter your name" v-model="name">
			</view>
			<view class="input-title"><span class="input-title-one">*</span>{{type=='c'?'电话':'mobile phone'}}:</view>
			<view class="my-input">
				<!-- <input placeholder="{{type=='c'?'请输入您的电话':'Please enter your mobile phone number'}}"> -->
				<input v-if="type=='c'" placeholder="请输入您的电话" v-model="iphone">
				<input v-if="type=='e'" placeholder="Please enter your mobile phone number" v-model="iphone">
			</view>
			<view class="input-title"><span class="input-title-one">*</span>{{type=='c'?'公司':'company'}}:</view>
			
			<view class="my-input">
				
			<input v-if="type=='c'" placeholder="请输入您的公司名称" v-model="company">
			<input v-if="type=='e'" placeholder="Please enter your company name" v-model="company">
			</view>
			<view class="input-title"><span class="input-title-one">*</span>{{type=='c'?'产品需求':' Demand'}}:</view>
			<view class="my-input">
				<textarea v-if="type=='c'"  placeholder="请输入您想定制的内容" v-model="info"></textarea>
				<textarea v-if="type=='e'"  placeholder="Please enter what you want to customize" v-model="info"></textarea>
			</view>
			<button @click="insert" class="cu-btn bg-blue margin-tb-sm lg" style="width: 700rpx;">{{type=='c'?'马上提交':'submit'}}</button>
		</view>
		<menus></menus>
	</view>
</template>

<script>
	import {
	        mapState
	    } from 'vuex';
		import uParse from '@/components/u-parse/u-parse.vue';
		import interfaces from '../../utils/interfaces.js';
	import menus from "../../components/menu.vue"

		
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
				iphone:"",
				name:"",
				info:"",
				company:"",
				
				jianjie:"",
				jianjieE:"",
			}
		},
		onLoad() {
			this.getData();
		},
		onPullDownRefresh() {
		        //监听下拉刷新动作的执行方法，每次手动下拉刷新都会执行一次
				this.getData();
				
				uni.stopPullDownRefresh();
		    },
		methods: {
			
			insert(){
				
				if(this.name==""||this.company==""||this.iphone==""||this.info==""){
				
				if(this.type=="c"){
					uni.showToast({
					               icon:"none",
									duration:2000,
					               title:"请填写完整信息"
					           });
				}else{
					uni.showToast({
					               icon:"none",
									duration:2000,
					               title:"Please complete the form"
					           });
				}
					
							   
							   return;
				}
				
				this.request({
					url: interfaces.insertCallme,
					data:{
						name:this.name,
						company:this.company,
						iphone:this.iphone,
						info:this.info
					},
					success: ((res) => {
						if(res.errno==0){
							if(this.type=="c"){
								uni.showToast({
								               icon:"none",
												duration:2000,
								               title:"已提交"
								           });
							}else{
								uni.showToast({
								               icon:"none",
												duration:2000,
								               title:"Successful submission"
								           });
							}
									   
									   this.name="";
									   this.info="";
									   this.company="";
									   this.iphone="";
						}
						//console.log(res);
						
					
				
					})
				})
			},
			getData(){
					
				this.request({
					url: interfaces.getIntroduce,
					success: ((res) => {
						if(res.errno==0){
							this.jianjie=res.data.calls;
							this.jianjieE=res.data.ecall;
						}
						//console.log(res);
						
					
				
					})
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
	.my-banner{
		margin-top: 5rpx;
		width: 750rpx;
		
	}
	.my-banner>image{
		width: 750rpx;
		height: 200rpx;
		
	}
	.my-input{
		margin: 10rpx 0;
		background-color: #F7F7F7;
		padding: 10rpx;
	}
	.input-box{
		padding: 20rpx;
		background-color: #FFFFFF;
	}
	.input-title-one{
		color: red;
	}
	.info{
		width: 750rpx;
		
		padding: 40rpx 0;
		}
	.info-title{
		font-size: 25rpx;
		margin-bottom: 50rpx;
	}
	.infos{
		font-size: 30rpx;
		color: #333333;
		text-align: center;
	}
	.we-top{
		width: 750rpx;
		
	}
	.we-top>image{
		width: 750rpx;
		height: 300rpx;
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
</style>
