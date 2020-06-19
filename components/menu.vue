<template>
	<view class="menu">
					<!-- <button class="cu-btn cuIcon bg-white block shadow-warp buttons " @click="call">
						<text class=" iconfont icon-dianhua"></text>
					</button>
					<button class="cu-btn cuIcon bg-white block shadow-warp buttons " @click="gotos">
						<text class=" iconfont icon-daohang"></text>
					</button> -->
					<button class="cu-btn cuIcon bg-white block shadow-warp buttons" @click="change">
						<text class=" iconfont icon-weibiaoti556" style="font-size: 50rpx;"></text>
					</button>
					
					
	</view>
</template>

<script>
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
				
				}
			},
			onLoad() {
		
			},
			methods: {
				call(){
					wx.makePhoneCall({
					  phoneNumber: '1340000' //仅为示例，并非真实的电话号码
					})
				},
				gotos(){
					//#ifdef MP-WEIXIN
					wx.openLocation({
					latitude:  Number(34.171002),//要去的纬度-地址
					longitude: Number(108.962269),//要去的经度-地址
					})
					
					//#endif
				},
				
				...mapMutations(['changeType']),
				change(){
					if(this.type=="c"){
						this.changeType("e");
						
				uni.setTabBarItem({
				            index: 0,
				            text: "index"
				        });
						uni.setTabBarItem({
						            index: 1,
						            text: "product"
						        });
								uni.setTabBarItem({
								            index: 2,
								            text: "we"
								        });
										uni.setTabBarItem({
										            index: 3,
										            text: "relation"
										        });
					}else if(this.type=="e"){
						uni.setTabBarItem({
						            index: 0,
						            text: "首页"
						        });
								uni.setTabBarItem({
								            index: 1,
								            text: "产品"
								        });
										uni.setTabBarItem({
										            index: 2,
										            text: "关于我们"
										        });
												uni.setTabBarItem({
												            index: 3,
												            text: "联系我们"
												        });
						this.changeType("c")
					}
					
					
				},
			}
		}
</script>

<style>
	.menu{
		width: 80rpx;
		position: fixed;
		bottom: 10%;
		right: 3%;
	}
	.buttons{
		margin-bottom: 20rpx;
	}
</style>
