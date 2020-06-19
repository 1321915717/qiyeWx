<template>
	<view>
		<view class="banner" auto-focus>
					<image class="banner-img" :src="news.nImg"></image>
					<view class="title-area">
						<text class="title-text">{{news.nTitle}}</text>
					</view>
		</view>
		<view class="content bg-white">
			<view class="date text-gray">发布时间:{{news.nDate | dateFormat}}</view>
			<view class="article-content">
			 <u-parse :content="news.nContent"  ></u-parse>
			</view>
			
			
		</view>
		
	</view>
</template>

<script>
	//@preview="preview" @navigate="navigate"
import uParse from '@/components/u-parse/u-parse.vue'
	import interfaces from '../../utils/interfaces.js';
	export default {
		components:{
			uParse
		},
		data() {
			return {
				news:{},
				contents:[]
			}
		},
		onLoad(id) {
			let ids=id.id;
			console.log("id"+ids);
			this.request({
				url: interfaces.getNewsByNid,
				data: {
				       id:ids
				    },
				success: ((res) => {
					if(res.errno==0){
						this.news=res.data;
						
					}
					console.log(res);
				
			
				})
			})
			
		},
		methods: {
			
		}
	}
</script>

<style>
	@import url("@/components/u-parse/u-parse.css");
	.article-content{
		margin-top: 50rpx;
		font-size: 28rpx;
		
	}
	.content{
		width: 750rpx;
		padding: 30rpx;
		min-height: 500rpx;
	}
.banner {
		height: 360upx;
		position: relative;
		background-color: #ccc;
		flex-direction: row;
		overflow: hidden;
	}

	.banner-img {
		width: 750rpx;
	}
	.title-area {
		color: #FFFFFF;
		position: absolute;
		font-weight: bold;
		left: 30upx;
		right: 30upx;
		bottom: 30upx;
		z-index: 11;
	}
	

</style>
