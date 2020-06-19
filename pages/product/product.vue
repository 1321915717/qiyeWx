<template>
	<view>
		
		<swiper class="screen-swiper square-dot" :indicator-dots="true" :circular="true"
		 :autoplay="true" interval="5000" duration="500">
			<swiper-item v-for="(item,index) in goods.imgs" :key="index">
				<image :src="item"  ></image>
				
			</swiper-item>
		</swiper>
		
		<view  class="bg-white  product-title">
			产品名称:{{goods.name}}
		</view>
		
		<view v-show="goods.video!=''" class="we-video" style="margin-bottom: 10rpx;">
			<view class="xiangqing" style="margin-bottom: 10rpx;">-----产品宣传片-----</view>
			<video :src="goods.video"  style="width: 750rpx; height: 400rpx;"  objectFit="fill"></video>
		</view>
		<view class="xiangqing" style="margin-bottom: 10rpx;">-----详情-----</view>
		<view class="bg-white" style="padding: 10rpx 0; margin-bottom: 30px;">
			<u-parse :content="goods.content"  ></u-parse>
		</view>
		
		<view class="images"  style="position: fixed; top: 0;" v-if="show" catchtouchmove="true">
			<canvas  canvas-id="11" catchtouchmove="true" :style="{ width: canvasW + 'px', height: canvasH + 'px', display:isnone, }"></canvas>
			<view  class="image-box">
				<view class="bg-red submit" @click="success">保存图片</view>
				<view class="bg-blue submit" @click="quxiao">取消</view>
			</view>
		</view>
		
		<view class="cu-bar bg-white tabbar border shop product-bar">
			<button class="action" open-type="contact">
				<view class="cuIcon-service " style="color:#4186F8;">
					
				</view>
				客服
			</button>
			<button class="action" open-type="share">
				<view class="cuIcon-share " style="color: #4186F8;">
					
				</view>
				分享好友
			</button>
			
			<view class="bg-red submit" @click="OnCanvas" style="background-color: #4186F8 ;">生成海报</view>
		</view>
		
	 <view class="shadow" catchtouchmove="true" v-if="show"></view> 
	</view>
</template>

<script>
	let _this;

	  import interfaces from '../../utils/interfaces.js';
	  import uParse from '@/components/u-parse/u-parse.vue'
	export default {
		components:{
			
		},
		data() {
			return {
				isnone:"block",
				id:0,
				show:false,
				
				canvasW:0,
				canvasH: 0,
				saveimage:"",
				canvasImgSrc:'',
				ctx:null,
				CanvasID:"11",
				imgSrc:"",
				QrSrc:"",
				Title:"",
				LineType:true,
				PriceTxt:"",
				PriceColor:"#3A82F8",
				OriginalTxt:"",
				OriginalColor:"#b8b8b8",
				Width:"750",
				CanvasBg:"#ffffff",
				Referrer:"航天远征推荐给您",
				ViewDetails:"更多详情长按或扫描识别二维码",
				issuccess:false,
				goods:{
					imgs:[],
					name:"",
					content:"",
					categoryName:"",
					img:"",
					video:"",
					token:""
				}
			}
		},
		onLoad(id) {
			
			
			if(id.scene){
				var scene = decodeURIComponent(id.scene);
				
				var index=	scene.indexOf('=');
				
			 var ids=	scene.substring(index+1);
				this.id=ids;
				
			}else{
				this.id=id.id;
			}
			
			this.getData();
			this.getimage();
			//this.getimage(); 生成分享二维码
		},
		methods: {
			onShareAppMessage(res) {
			    if (res.from === 'button') {// 来自页面内分享按钮
			     // console.log(res.target)
			    }
			    return {
			      title: this.name
			    }
			  },
			geterweima(token){
				this.request({
					url: interfaces.geterweima,
					data:{
						token:token,
						id:this.id
					},
					success: ((res) => {
						console.log(res)
							this.QrSrc=res.data.fileDownLoadUrl;
							console.log(this.QrSrc)
						
				
					})
				})
			},
			getimage(){
			let	_this=this;
				this.request({
					url: interfaces.getCode,
					success: ((res) => {
						if(res.errno==0){
							console.log(res);
							_this.geterweima(res.data);
							
						}
						
					
				
					})
				})
			},
			getData(){
				
				
				this.request({
					url: interfaces.getGoodsByGid,
					data: {
					       id:this.id
					    },
					success: ((res) => {
						if(res.errno==0){
					let imgs= res.data.gLun.split(",")
							this.goods.imgs=imgs;
							this.goods.content=res.data.gContent;
							this.goods.name=res.data.gTitle;
							this.goods.categoryName=res.data.category.cName;
							this.goods.img=res.data.gImg;
							this.goods.video=res.data.gVideo;
							this.PriceTxt='产品名称:'+this.goods.name;
						}
						console.log(res);
					
				
					})
				})
			},
			
			success(){
				var _this=this;
			uni.saveImageToPhotosAlbum({
			    filePath: this.saveimage,
			    success: function () {
					_this.isnone="none";
					_this.show=false;
					uni.showToast({
					               icon:"none",
									duration:2000,
					               title:"图片已保存到手机相册"
					           });
			    }
			});
			},
			quxiao(){
			
				this.isnone="none";
				this.show=false;
			
			},
			async OnCanvas() {
						
				
				
						uni.showLoading({title:"加载中..."})
				
				_this=this;
				_this.ctx = uni.createCanvasContext(_this.CanvasID,this);
				const C_W = uni.upx2px(_this.Width), //canvas宽度
					C_P = uni.upx2px(10), //canvas Paddng 间距
					C_Q = uni.upx2px(150); //二维码或太阳码宽高
				let _strlineW = 0; //文本宽度
				let _imgInfo = await _this.getImageInfo({ imgSrc: _this.goods.img }); //广告图
				let _QrCode = await _this.getImageInfo({ imgSrc: _this.QrSrc }); //二维码或太阳码
				let r = [_imgInfo.width, 300];
				let q = [_QrCode.width, _QrCode.height];
				let imgW = C_W - C_P * 2;
				if (r[0] != imgW) {
					r[1] = Math.floor((imgW / r[0]) * r[1]);
					r[0] = imgW;
				}
				if (q[0] != C_Q) {
					q[1] = Math.floor((C_Q / q[0]) * q[1]);
					q[0] = C_Q;
				}
				_this.canvasW = C_W;
				_this.canvasH = r[1] + q[1] + 128;
				_this.ctx.setFillStyle(_this.CanvasBg); //canvas背景颜色
				_this.ctx.fillRect(0, 0, C_W, _this.canvasH); //canvas画布大小
				
				//添加图片展示
				_this.ctx.drawImage(_imgInfo.path, C_P, C_P, r[0], r[1]);
				//添加图片展示 end
			
				//设置文本
				_this.ctx.setFontSize(uni.upx2px(28)); //设置标题字体大小
				_this.ctx.setFillStyle(_this.TitleColor); //设置标题文本颜色
				let _strLastIndex = 0; //每次开始截取的字符串的索引
				let _strHeight = r[1] + C_P * 2 + 10; //绘制字体距离canvas顶部的初始高度
				let _num=1;
				for (let i = 0; i < _this.Title.length; i++) {
					_strlineW += _this.ctx.measureText(_this.Title[i]).width;
					if (_strlineW > r[0]) {
						if(_num == 2&&_this.LineType){
							//文字换行数量大于二进行省略号处理
							_this.ctx.fillText(_this.Title.substring(_strLastIndex, i-8)+'...', C_P, _strHeight);
							_strlineW = 0;
							_strLastIndex = i;
							_num++;
							break;
						}else{
							_this.ctx.fillText(_this.Title.substring(_strLastIndex, i), C_P, _strHeight);
							_strlineW = 0;
							_strHeight += 20;
							_strLastIndex = i;
							_num++;
						}
					}else if (i == _this.Title.length - 1) {
						_this.ctx.fillText(_this.Title.substring(_strLastIndex, i + 1), C_P, _strHeight);
						_strlineW = 0;
					}
				}
				//设置文本 end
			
				//设置价格
				_strlineW = C_P;
				_strHeight += uni.upx2px(20);
				if(_num==1){
					_strHeight += 20;	//单行标题时占位符
				}
				
				if(_this.PriceTxt !=''){	//判断是否有销售价格
					_this.ctx.setFillStyle(_this.PriceColor);
					_this.ctx.setFontSize(uni.upx2px(24));
					_this.ctx.fillText(_this.PriceTxt, _strlineW, _strHeight); //商品价格
					_strlineW += _this.ctx.measureText(_this.PriceTxt).width + uni.upx2px(10);
				}
				if(_this.PriceTxt !='' && _this.OriginalTxt !=''){	//判断是否有销售价格且原价
					_this.ctx.setFillStyle(_this.OriginalColor);
					_this.ctx.setFontSize(uni.upx2px(24));
					_this.ctx.fillText(_this.OriginalTxt, _strlineW, _strHeight); //商品原价
				}
				_this.ctx.strokeStyle = _this.OriginalColor;
				_this.ctx.moveTo(_strlineW, _strHeight - uni.upx2px(10)); //起点
				_this.ctx.lineTo(_strlineW + _this.ctx.measureText(_this.OriginalTxt).width, _strHeight - uni.upx2px(10)); //终点
				_this.ctx.stroke();
				//设置价格 end
			
				//添加二维码
				_strHeight += uni.upx2px(20);
				_this.ctx.drawImage(_QrCode.path, r[0] - q[0] + C_P, _strHeight, q[0], q[1]);
				//添加二维码 end
			
				//添加推荐人与描述
				_this.ctx.setFillStyle("#b8b8b8");
				_this.ctx.setFontSize(uni.upx2px(24));
				_this.ctx.fillText(_this.Referrer, C_P, _strHeight + q[1] / 2);
				_this.ctx.setFillStyle(_this.OriginalColor);
				_this.ctx.setFontSize(uni.upx2px(24));
				_this.ctx.fillText(_this.ViewDetails, C_P, _strHeight + q[1] / 2 + 20);
				//添加推荐人与描述 end
				
				//延迟后渲染至canvas上
				setTimeout(function() {
					_this.ctx.draw(true,(ret)=>{
						_this.getNewImage();
					});
				}, 600);
				uni.hideLoading()
				this.isnone="block";
				this.show=true;
								
			},
			async getImageInfo({ imgSrc }) {
				return new Promise((resolve, errs) => {
					uni.getImageInfo({
						src: imgSrc,
						success: function(image) {
							resolve(image);
						},
						fail(err) {
							errs(err);
						}
					});
				});
			},
			getNewImage(){
			
				let _this=this;
				uni.canvasToTempFilePath({
					canvasId: _this.CanvasID,
					quality: 1,
					complete: (res) => {
					
											
						_this.show=true;
						console.log(res.tempFilePath);
						_this.saveimage=res.tempFilePath;
					}
				},this);
			}
		}
	}
</script>

<style>
	@import url("@/components/u-parse/u-parse.css");
	.xiangqing{
			width: 750rpx;
			text-align: center;
			color: #8799A3;
	}
	.product-title{
	min-height: 70rpx;
		width: 750rpx;
		padding: 20rpx 10rpx;
		line-height: 120%;
		font-weight: bold;
		font-size: 26rpx;
		color: #333333;
	}
	.product-bar{
		position: fixed;
		bottom: 0;
		width: 750rpx;
	}
	.images{
		position: absolute;
		top: 10%;
		left: 0;
		z-index:100000 ;
	}
	.image-box{
		display: flex;
		flex-direction: row;
		
	}
	.submit{
		width: 375rpx;
		padding: 30rpx;
		text-align: center;
	}
	.shadow{
	    width:100%;
	    height:100%;
	    position:absolute;
	    left:0;
	    top:0;
	    z-index:9999;
	    background-color:#000;
	    opacity:0.6;
	   
	}
</style>
