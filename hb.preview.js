/*
 * hb.preview v1.4
*/
(function($){
	$.fn.hbPreview = function(options) {
		var option = $.extend({}, $.fn.hbPreview.defaults, options);
		var element = this;
		var hb_showLi = $('.hb_show > li',element);
		var hb_show = $('.hb_show',element);
		var hb_th = $('.hb_th li',element);
		var hb_showH = hb_showLi.eq(0).outerHeight();
		
		hb_show.css({height:hb_showH});

		$(window).on('resize load',function(){
			hb_showH = hb_showLi.eq(0).outerHeight();
			hb_show.css({height:hb_showH,background:'none'});
		});
	
		hb_showLi.eq(0).css({display:'block',opacity:'1'});
		hb_th.eq(0).addClass('current');
		hb_th.hover(function(){
			$(this).css({cursor:'pointer'});}).on('click',function(){
				var num = hb_th.index(this);
				if($(this).hasClass('current')){
					return false;
				}else{
					hb_showLi.stop().animate({opacity:'0'},option.fadeSpeed,function(){
					$(this).css({display:'none'});
				});
				hb_th.removeClass('current');
				$(this).addClass('current');
				hb_showH = hb_showLi.eq(num).outerHeight()
				if(option.itemHeightAuto==true){
					hb_show.animate({height:hb_showH});
				}
				hb_showLi.eq(num).css({display:'block'}).stop().animate({opacity:'1'},option.fadeSpeed);
		}
			return false;
		});
	};

	$.fn.hbPreview.defaults = {
		fadeSpeed:600,
		itemHeightAuto:true
	};

})(jQuery);
