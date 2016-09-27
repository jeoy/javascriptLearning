$(function(){
$("#inputSearch").focus(function(){
 		$(this).val("");
	}).blur(function(){
		if($(this).val() == ""){
			$(this).val("请输入商品名");
		}
	});

$("#skin li").click(function(){
	$(this).addClass("selected").siblings().removeClass("selected");
	$("#cssfile").attr("href","styles/skin/"+this.id+".css");
});

$(".nav li").hover(function(){
	$(this).find(".jnNav").show();
},function(){
	$(this).find(".jnNav").hide();

});

var adTimer = null; 
var index  = 0;
var imgLen = $("#jnImageroll img").length;
var $imageRoll = $("#jnImageroll div a");
$imageRoll.mouseover(function(){
	index = $imageRoll.index(this);
	showImg(index);
}).eq(0).mouseover();
$('#jnImageroll div').hover(function(){ 
	if(adTimer){
		clearInterval(adTimer);
	} 
	},function(){ 
	adTimer = setTimeout(function(){
	 	index ++;
	 	showImg(index);
	 	if (index == imgLen ) {index = 0;}
		},2000
	);
 }).trigger("mouseleave");

// $imageRoll.trigger("mouseleave")

});

function showImg(index){
	var $rollobj = $("#jnImageroll");
	var $rolllist = $rollobj.find("div a");
	var newhref = $rolllist.eq(index).attr("href");
	$("#JS_imgWrap").attr("href",newhref)
			 .find("img").eq(index).stop(true,true).fadeIn().siblings().fadeOut();
	$rolllist.removeClass("chos").css("opacity","0.7")
			 .eq(index).addClass("chos").css("opacity","1"); 
}