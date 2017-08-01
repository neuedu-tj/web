$(function(){

	/*  先让点赞和评论区  都隐藏   */
	$(".moment-function-control").hide();
	
	/* 点击事件 */
	$(".moment-function-right").click(function(){
		var control = $(this).find(".moment-function-control");
		$(control).toggle(100)
	});
	
	

});


