/*
* @Author: Administrator
* @Date:   2018-07-27 18:49:27
* @Last Modified by:   Administrator
* @Last Modified time: 2018-07-30 20:31:38
*/

$(window).scroll(function(event) {
	if($(window).scrollTop()>=$('#platform').offset().top-$('#platform').height()*0.8){
		// 窗口滚动到platform
		console.log('窗口滚动到platform');
		// 图标出现
		$('#platform i').css({
			display: 'block'
		});
		$('#platform i').addClass('animated bounceIn');
	}else if($(window).scrollTop()>=$('#WebProject').offset().top-$('#WebProject').height()*0.5){
		// 窗口滚动到WebProject
		console.log('窗口滚动到WebProject');
		// 左边图片出现
		$('#WebProject .my_swiper').css({
			visibility: 'visible'
		});
		$('#WebProject .my_swiper').addClass('animated bounceInRight');
		// 右边的文字出现
		$('.web_right').css({
			display: 'block'
		});
		$('.web_right').addClass('animated bounceInLeft')
	}else if ($(window).scrollTop()>=$('#portfolio').offset().top-$('#portfolio').height()*0.5){
		// 窗口滚动到portfolio
		console.log('窗口滚动到portfolio');
		// 图片出现
		// $('#portfolio .overlay-container').css({
		// 	display: 'block'
		// });
		// $('#portfolio .overlay-container').addClass('animated fadeInUp')
	}else if($(window).scrollTop()>=$('#experience').offset().top-$('#experience').height()*0.5){
		// 窗口滚动到experice
		console.log('窗口滚动到experice');
		// 左边时间轴出现
		$('#timeline').css({
			display: 'block'
		});
		$('#timeline').addClass('animated bounceInLeft');
		// 右边文字出现
		$('.aboutme').css({
			display: 'block'
		});
		$('.aboutme').addClass('animated bounceInRight');
	}
});

// 图片过滤事件
$("#portfolio .filter li a").click(function(){
	console.log(1)
	var filterValue = $(this).attr('data-filter');
	$(".isotope-container").isotope({ filter:filterValue});
	$(this).parent().addClass('active').siblings().removeClass('active');
	return false;
});

$(function(){
	// swiper
	var swiper = new Swiper('.swiper-container', {
	  effect: 'coverflow',
	  grabCursor: true,
	  centeredSlides: true,
	  slidesPerView: 'auto',
	  initialSlide :2,
	  coverflowEffect: {
	    rotate: 50,
	    stretch: 0,
	    depth: 100,
	    modifier: 1,
	    slideShadows : true,
	  },
	  pagination: {
	    el: '.swiper-pagination',
	  },
	});
})
