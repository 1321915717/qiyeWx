const domain = "https://www.cyzblog.xyz/";
//const domain = "http://localhost:8090/";
const interfaces = {

	getLunbo: domain+"wx/index/findLunbo",   //获取轮播
	getGoodsLimit: domain+"wx/index/findGoods",  //获取首页前四个商品
	getNewsLimit: domain+"wx/index/findNews",  //获取首页新闻列表
	getNewsByNid: domain+"wx/index/findNewsById",  //根据新闻获取新闻内容
	getIntroduce: domain+"wx/index/findIntroduce",  //获取介绍
	getCode: domain+"wx/share/getToken",  //获取微信小程序的token码
	
	
	getvideo: domain+"wx/index/findVideo",  //获取宣传片
	insertCallme :domain+"wx/index/insertCallMe", // 客户提交信息
	getGoodsByCid :domain+"wx/index/findGoodsByCid", //获取商品信息通过分类id
	getcategory:domain+"wx/index/findAllCategory", //获取分类
	getcategoryE:domain+"wx/index/findAllCategoryE", //获取英文分类
	getGoodsByGid:domain+"wx/index/findGoodsByGid",  //获取商品通过分类
	geterweima:domain+"wx/share/lun",  //获取微信分享二维码
	getoneCategory:domain+"wx/index/findOneCategory", //获取一级分类
	getTwoCategory:domain+"wx/index/findTwoCategory", //获取二级分类
	searchGoods:domain+"wx/index/searchGoods", // 搜索商品
	
	
	
	
}
module.exports = interfaces;