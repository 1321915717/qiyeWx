<template>
	<view >
	<view class="bg-white top" style="width: 750rpx;  display: flex; justify-content: center;">
		<view class="logo">
			<image class="logo-image" src="../../static/logo3.png"></image>
		</view>
		<view class="top-titles">
			<view class="top-title" style="font-size: 35rpx;  margin-top: 6rpx;">西安航天远征流体控制股份有限公司</view>
			<view class="top-title" style="font-size: 25rpx; margin-top: -6rpx;">Xi'an Aerospace Yuanzheng Fluid Control Co,.Ltd</view>
		</view>
	</view>
	
		<swiper class="screen-swiper round-dot" :indicator-dots="true" :circular="true"
		 :autoplay="true" interval="5000" duration="500">
			<swiper-item v-for="item in swiperList" :key="item.gId">
				<image  :src="item.gUrl" mode="aspectFill" v-if="item.gType=='image'"></image>
				<!-- <video :src="item.gUrl"  style="z-index: 10000; position: absolute;"   objectFit="cover" v-if="item.gType=='video'"></video> -->
			</swiper-item>
		</swiper>
		
		
		<view class="bg-white my-title">{{type=='c'?'公司简介':'Company profile'}}</view>
		<view class="bg-white" style="display: flex; flex-direction: row;" >
			
			
			<view class="jianjie bg-white" v-if="type=='c'">
				西安航天远征流体控制股份有限公司（以下简称航天远征）
				是以中国航天科技集团公司第十一研究所为主发起人成立的高科技股份有限公司。自成立以来，依托液体火箭发动机技术和人才优势，
				面向国际国内市场，聚焦以特种阀门为主的流体控制技术领域及传感测控领域，致力于为客户提供一流产品和服务。
			</view> 
			
			<view class="jianjie bg-white" v-if="type=='e'">
				Xi 'an aerospace expedition fluid control co., LTD. (hereinafter referred to as "aerospace expedition") is 
				a high-tech co., LTD. Founded by the 11th research institute of China aerospace science and technology 
				corporation.Since its establishment, relying on the advantages of liquid rocket engine technology and talents, 
				it has been facing the international and domestic market, focusing on the fluid control technology field and the 
				sensor measurement and control field with special valves as the main focus, and is 
				committed to providing first-class products and services for customers.
			</view> 
		</view>
		
		
		<view v-show="video!=''" class="bg-white my-title">{{type=='c'?'宣传片':'The exhibition'}}</view>
		<view v-show="video!=''" class="we-video" >
			<video :src="video"  style="width: 750rpx; height: 400rpx;"  objectFit="cover"></video>
		</view>
		<view class="bg-white my-title" style="margin-top: 10rpx;">{{type=='c'?'产品展示':'The exhibition'}}</view>
		<view class="my-tu bg-white">
			<view class="tu-item" @click="intoproduct(goods.gId)" v-for="goods in goodsList" :key="goods.gId">
				<image :src="goods.gImg"></image>
				<view class="text-center" style="overflow: hidden;white-space: nowrap;text-overflow: ellipsis;">{{goods.gTitle}}</view>
			</view>
			<view class="bg-white" style="height: 300rpx; width: 750rpx; line-height: 150rpx; text-align: center;" v-if="goodsList.length==0">
				nothing
			</view>
			
		</view>
		
		<view class="bg-white my-title">{{type=='c'?'新闻资讯':'news'}}</view>
		<view class="news-box">
			<view class="news-item bg-white" @click="intonews(news.nId)" :key="news.nId" v-for="news in newList">
				<view class="new-left ">
					<view class="new-title">{{news.nTitle}}</view>
					
					<view class="new-date" style="margin-top: 80rpx;">{{news.nDate | dateFormat}}</view>
				</view>
				<view class="news-right bg-cyan">
					<image :src="news.nImg"></image>
				</view>
			</view>
		</view>
		
		<view class="bg-white" style="height: 300rpx; width: 750rpx; line-height: 150rpx; text-align: center;" v-if="newList.length==0">
			nothing
		</view>
			
			<menus></menus>
		</view>
	</view>
</template>

<script>
		import interfaces from '../../utils/interfaces.js';
	import menus from "../../components/menu.vue"
	import {
	        mapState,
	        mapMutations
	    } from 'vuex';

	export default {
			computed: {
			            ...mapState(['type'])
			        },
		components:{
			menus
			
		},
		data() {
			return {
				pageNum:1,
				hasNext:true,
				cardCur: 0,
				swiperList: [
				],
				video:'',
				goodsList:[],
				newList:[],
				latitude:"",
				longitude:"",
			}
		},
		onLoad() {
			
			
			/* wx.getLocation({
			type: 'gcj02',
			success: (res) => {
			console.log(res)
			
			},
			}) */
	
		
		/* 	uni.chooseLocation({
				latitude: 108.962269,//要去的纬度-地址
				longitude: 34.171002,//要去的经度-地址
			    success: function (ress) {
			        console.log('位置名称：' + ress.name);
			        console.log('详细地址：' + ress.address);
			        console.log('纬度：' + ress.latitude);
			        console.log('经度：' + ress.longitude);
			    }
			}); */
			
				this.getData();
				this.getProduct();
				
				this.getNews();
		},
		watch:{
			type(){
				
				this.getProduct();
				this.hasNext=true;
				this.pageNum=1;
				this.getNews();
			}
		},
		methods: {
			...mapMutations(['changeType']),
			
			getData(){
				this.request({
					url: interfaces.getLunbo,
					data: {
					       
					    },
					success: ((res) => {
						if(res.errno==0){
							this.swiperList=res.data;
						}
						console.log(res);
					
				
					})
				});
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
				});
			},
			onPullDownRefresh() {
			        //监听下拉刷新动作的执行方法，每次手动下拉刷新都会执行一次
					this.hasNext=true;
					this.pageNum=1;
					this.getData();
					this.getProduct();
					
					this.getNews();
					
					 uni.stopPullDownRefresh();
			    },
			onReachBottom(){
					if(this.hasNext==true){
						this.request({
							url: interfaces.getNewsLimit,
							data: {
							       type:this.type,
								   pageNum:this.pageNum,
								   pageSize:4
							    },
							success: ((res) => {
								console.log(res)
								if(res.errno==0){
									this.pageNum=res.data.pageNum+1;
									this.hasNext=res.data.hasNextPage;
									for(let i=0;i<res.data.list.length;i++){
										
										this.newList.push(res.data.list[i]);
									
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
			getProduct(){
				
				
				
				this.request({
					url: interfaces.getGoodsLimit,
					data: {
					       type:this.type
					    },
					success: ((res) => {
						if(res.errno==0){
							this.goodsList=res.data;
						}
						
					
				
					})
				})
			},
			getNews(){
				this.newList=[];
				this.pageNum=1;
				
				
				if(this.hasNext==true){
					this.request({
						url: interfaces.getNewsLimit,
						data: {
						       type:this.type,
							   pageNum:this.pageNum,
							   pageSize:4
						    },
						success: ((res) => {
							this.pageNum++;
							console.log(res)
							if(res.errno==0){
								
								this.hasNext=res.data.hasNextPage;
								this.newList=res.data.list;
								
							}
							
						
					
						})
					})
				}
			
			},
			intonews(id){
				uni.navigateTo({
				                    url:"../news/news?id="+id,
				                    success: res => {},
				                    fail: () => {},
				                    complete: () => {}
				                });
				
			},
			intoproduct(id){
				uni.navigateTo({
					url:"../product/product?id="+id,
					success: res => {},
					fail: () => {},
					complete: () => {}
				})
			}
		}
	}
</script>

<style>
.we-video{
		width: 750rpx;
		height: 400rpx;
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
	.jianjie{
		margin-top: 10rpx;
		line-height: 50rpx;
		text-align: left;
		padding: 10rpx 20rpx;
		padding-top: 0rpx;
		width: 750rpx;
		color:#777777;
		font-size: 25rpx;
		font-weight: 500;
		
		
	}
	.my-tu{
		padding: 20rpx;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		flex-wrap: wrap;
		padding-bottom: 10rpx;
	}
	.tu-item{
		width: 350rpx;
		margin-bottom: 10rpx;
	}
	.tu-item>image{
		width: 350rpx;
		height: 250rpx;
	}
	.news-item{
		margin-bottom: 4rpx;
		padding: 20rpx;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
	.new-title{
		font-size: 32rpx;
		color: #333333;
		font-weight: bold;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	.new-content{
		margin-top: 10rpx;
		color: #8799A3;
	}
	.new-left{
		width: 550rpx;
		
	}
	.new-date{
		margin-top: 20rpx;
		font-weight: bold;
	}
	.news-right{
		width: 150rpx;
	}
	.news-right>image{
		width: 150rpx;
		height: 150rpx;
	}
</style>
