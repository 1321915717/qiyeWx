<template>
	<view>
		<view class="bg-white my-title">{{type=='c'?'企业荣誉':'Honor'}}</view>
		<view class="image-box">
			<view class="image-tiem" v-for="(item,index) in images" :key="index" @click="looks">
				<image class="imagestwo" :src="item"></image>
			</view>
		
			
			<view class="image-tiem" :key="index" v-for="(items,index) in hen" @click="look" >
				<image class="images" :src="items"></image>
			</view>
		</view>
	</view>
</template>

<script>
	import {
	        mapState
	    } from 'vuex';
	export default {
		computed: {
		            ...mapState(['type'])
		        },
		data() {
			return {
				hen:[
					"https://ppt-download.oss-cn-beijing.aliyuncs.com/%E4%BC%81%E4%B8%9A/%E6%A8%AA1.png",
					"https://ppt-download.oss-cn-beijing.aliyuncs.com/%E4%BC%81%E4%B8%9A/%E6%A8%AA10.png",
					"https://ppt-download.oss-cn-beijing.aliyuncs.com/%E4%BC%81%E4%B8%9A/%E6%A8%AA11.png",
					"https://ppt-download.oss-cn-beijing.aliyuncs.com/%E4%BC%81%E4%B8%9A/%E6%A8%AA2.png",
					"https://ppt-download.oss-cn-beijing.aliyuncs.com/%E4%BC%81%E4%B8%9A/%E6%A8%AA3.png",
					"https://ppt-download.oss-cn-beijing.aliyuncs.com/%E4%BC%81%E4%B8%9A/%E6%A8%AA4.png",
					"https://ppt-download.oss-cn-beijing.aliyuncs.com/%E4%BC%81%E4%B8%9A/%E6%A8%AA5.png",
					"https://ppt-download.oss-cn-beijing.aliyuncs.com/%E4%BC%81%E4%B8%9A/%E6%A8%AA6.png",
					"https://ppt-download.oss-cn-beijing.aliyuncs.com/%E4%BC%81%E4%B8%9A/%E6%A8%AA7.png",
					"https://ppt-download.oss-cn-beijing.aliyuncs.com/%E4%BC%81%E4%B8%9A/%E6%A8%AA8.png",
					"https://ppt-download.oss-cn-beijing.aliyuncs.com/%E4%BC%81%E4%B8%9A/%E6%A8%AA9.png",
				],
				images:[
					"https://ppt-download.oss-cn-beijing.aliyuncs.com/%E4%BC%81%E4%B8%9A/%E7%AB%968.png",
					"https://ppt-download.oss-cn-beijing.aliyuncs.com/%E4%BC%81%E4%B8%9A/%E7%AB%969.png",
					"https://ppt-download.oss-cn-beijing.aliyuncs.com/%E4%BC%81%E4%B8%9A/%E7%AB%9610.png",
					"https://ppt-download.oss-cn-beijing.aliyuncs.com/%E4%BC%81%E4%B8%9A/%E7%AB%9611.png",
					"https://ppt-download.oss-cn-beijing.aliyuncs.com/%E4%BC%81%E4%B8%9A/%E7%AB%961.png",
					"https://ppt-download.oss-cn-beijing.aliyuncs.com/%E4%BC%81%E4%B8%9A/%E7%AB%962.png",
					"https://ppt-download.oss-cn-beijing.aliyuncs.com/%E4%BC%81%E4%B8%9A/%E7%AB%963.png",
					"https://ppt-download.oss-cn-beijing.aliyuncs.com/%E4%BC%81%E4%B8%9A/%E7%AB%964.png",
					"https://ppt-download.oss-cn-beijing.aliyuncs.com/%E4%BC%81%E4%B8%9A/%E7%AB%966.png",
					"https://ppt-download.oss-cn-beijing.aliyuncs.com/%E4%BC%81%E4%B8%9A/%E7%AB%967.png",
					"https://ppt-download.oss-cn-beijing.aliyuncs.com/%E4%BC%81%E4%B8%9A/%E7%AB%965.png",
					
					
				]
					
				
			}
		},
		methods: {
			look(){
				 uni.previewImage({
				            urls: this.images,
				            longPressActions: {
				                itemList: ['发送给朋友', '保存图片', '收藏'],
				                success: function(data) {
				                    console.log("66");
				                },
				                fail: function(err) {
				                    console.log(err.errMsg);
				                }
				            }
				        });
			},
			looks(){
				 uni.previewImage({
				            urls: this.hen,
				            longPressActions: {
				                itemList: ['发送给朋友', '保存图片', '收藏'],
				                success: function(data) {
				                    console.log("66");
				                },
				                fail: function(err) {
				                    console.log(err.errMsg);
				                }
				            }
				        });
			}
		}
	}
</script>

<style>
	.imagestwo{
		width: 360rpx;
		height: 500rpx;
	}
	.image-tiem{
		margin-top: 10rpx;
	}
	.image-title{
		width: 100%;
		text-align: center;
		
	}
	
	.image-box{
			width: 750rpx;
			display: flex;
			flex-direction: row;
			padding: 10rpx 10rpx;
			flex-wrap: wrap;
			justify-content: space-between;
		}
	.images{
		width: 360rpx;
		height: 250rpx;
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
	.mu-content{
		padding: 20rpx 10rpx;
	}
	
</style>
