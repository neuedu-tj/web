$(function(){

	/* 在发现里  点击朋友圈时   要让发现隐藏   让朋友圈显示  */
	$("#moment").click(function(){
		$("#wrap-discovery").hide();
		$("#moments").show(200)
	});
	
	/*  先让回复区域 都隐藏   */
	$(".moment-function-control").hide();
	
	$(".moment-function-right").click(function(){
		var control = $(this).find(".moment-function-control");
		$(control).toggle(100)
	});
	
	
	
	/* 图片初始化 */
	$(".moment-content-imgs").each(function(){
		
		var imgs = $(this).find(".user-imgs");
		
		if(imgs.length==1) {
			imgs.css("background-image" , "url('"+imgs.data("img")+"')");
			imgs.addClass("user-imgs-single");
		} else if( imgs.length>1 ) {

			imgs.each(function( i , img ){
				$(img).css("background-image" , "url('"+$(img).data("img")+"')");
				$(img).addClass("user-imgs-multi");
			});
		
		} else {
			
		}

	});


});


