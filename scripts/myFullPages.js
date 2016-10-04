;(function($){
	$("body").animate({scrollTop:"0"},1);
 	$.fn.myfullpage = function(options){ 
 			options = $.extend({
 				sectionsColor: [],
				anchors: [],
				title: "",
				scrollSpeed: 900
 			},options);
 			var $body = $("body");
 			var sectionPages = $(this).find(".section");
			sectionPages.each(function( i ){
				var newTitle = $("<p class = 'pagesTitle'>"+options.title[0]+i+options.title[1]+"</p>");
				$(this).attr("id",options.anchors[i]); 
				$(this).css({"backgroundColor":options.sectionsColor[i],"top": i*100+"%"});
				$(this).append(newTitle);
			 
			})
		
			var myconsole = $("#console");
			document.body.addEventListener("mousewheel",function(e){
			
				// myconsole.html("现在的滚轮数值:"+e.wheelDelta);
				
				if($body.is(":animated")){

					}
				else{ 
					if( e.wheelDelta < -80 ){
						$body.animate({scrollTop:"+="+document.body.clientHeight},options.scrollSpeed)
					 //    window.setTimeout(function(){
					 //    	wait = 1;
					 //    },900)
						// wait = 0;
					}
					
					else if(e.wheelDelta > 80){
						$body.animate({scrollTop:"-="+document.body.clientHeight},options.scrollSpeed)
					// 	window.setTimeout(function(){
					//     	wait = 1; 
					//     },900)
					// 	wait = 0;
					}
					
				}
			
			e.preventDefault();

 			});
		};
 

})(jQuery);
 