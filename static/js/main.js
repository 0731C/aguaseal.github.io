function num(n){
    return n<10 ? n="0"+n : n;
}

$(document).ready(function() {
	//动画加载
	if(window.innerWidth>1024){
		new WOW().init();
	}

	//头部导航
	if($(window).scrollTop()>0){
		$('header').addClass('mini');
	}else{
		$('header').removeClass('mini');
	}
	$(window).on('scroll',function(){
		if($(window).scrollTop()>0){
			$('header').addClass('mini');
		}else{
			$('header').removeClass('mini');
		}
	}.debounce(50))

	//头部菜单
    $('.header-nav li').hover(function(){
        $(this).find('.subnav').stop().fadeIn();
    },function(){
        $(this).find('.subnav').stop().fadeOut();
    });
	
	//头部菜单
	$('.nav-btn').on('click',function(){
			if($(this).hasClass('cur')){
				$(this).removeClass('cur');
				$('.header-m-nav').stop().slideUp();
			}else{
				$(this).addClass('cur');
				$('.header-m-nav').stop().slideDown();
			}
		})
		//头部菜单二级
	$('.header-m-nav li .tit').on('click',function(){
			var _this = $(this);
			var thisLi = _this.parent();
			if(thisLi.hasClass('on')){
				thisLi.removeClass('on');
				_this.next().stop().slideUp();
			}else{
				thisLi.addClass('on').siblings().removeClass('on');
				$('.header-m-nav li .navson').stop().slideUp();
				_this.next().stop().slideDown();
			}
		});

	$('.header-m-close').on('click',function(){
		$('.header-m-nav').stop().fadeOut();
	});

	//底部菜单
		$('footer .footer-nav li .tit').on('click',function(){
			var _this = $(this);
			var thisLi  = _this.parent();
			if(window.innerWidth<768){
				if(thisLi.hasClass('on')){
					thisLi.removeClass('on');
					_this.next().stop().slideUp();
				}else{
					thisLi.addClass('on').siblings().removeClass('on');
					$('.footer-nav li .navson').stop().slideUp();
					_this.next().stop().slideDown();
				}
			}else{
				location.href = _this.data('link');
			}
		})
		
		//搜索
		$('.search-btn').on('click',function(){
				$('.header-search-box').stop().fadeIn();
		});
			
		$('.search-close').on('click',function(){
				$('.header-search-box').stop().fadeOut();
		});



	//企业荣浴
	$('.sec-about-course').eq(0).find('li').eq(0).addClass('cur');
	$('.sec-about-course').eq(0).find('li').eq(0).find('.item-info').stop().show();
	$('.sec-about-course .item-desc .item-title').on('click',function(){
		var _this = $(this);
		var thisLi = _this.parents('li');
		var courseList = _this.parents('.sec-about-course');
		if(thisLi.hasClass('cur')){
			thisLi.removeClass('cur');
			thisLi.find('.item-info').stop().slideUp();
		}else{
			thisLi.addClass('cur').siblings().removeClass('cur');
			courseList.find('.item-info').stop().slideUp();
			thisLi.find('.item-info').stop().slideDown();
		}
	})
});


