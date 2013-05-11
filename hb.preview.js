/*
 * hb.preview v1.2
*/
(function($){
	$.fn.hbPreview = function(options) {
			var option = $.extend({}, $.fn.hbPreview.defaults, options);
			var element = this;
			var hb_show = $('.hb_show > li',element);
			var hb_th = $('.hb_th > li',element);
			hb_show.first().css({display:'block',opacity:'1'});
			hb_th.first().addClass('current');
			hb_th.hover(function(){
				$(this).css({cursor:'pointer'});
			}).click(function(){
		var num = $(this).index();
		if($(this).hasClass('current')){
			return false;
		}
		else{
			hb_show.stop().animate({opacity:'0'},option.fadeSpeed,function(){
				$(this).css({display:'none'});
			});
			hb_th.removeClass('current');
			$(this).addClass('current');
			hb_show.eq(num).css({display:'block'}).stop().animate({opacity:'1'},option.fadeSpeed);
		}
			return false;
		});
	};

	$.fn.hbPreview.defaults = {
		fadeSpeed:600
	};

})(jQuery);