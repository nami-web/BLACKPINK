$(function () {
    //section의 높이를 브라우저의 높이와 같게 설정
    //var winHeight = $(window).height();
    // var imgHeight = $('.swiper-slide img').height();
    //  $('section').css('height', winHeight);
    //$('.swiper-container').css('height', imgHeight);
var filter = "win16|win32|win64|mac|macintel"; 
    if ( navigator.platform ) { 
        if ( filter.indexOf( navigator.platform.toLowerCase() ) < 0 ) 
        { 
            //mobile alert('mobile 접속'); 
            //모바일 기종에 높이 자동 맞춤
            var h=$(window).height();
            $('nav').css('height',h);
            
            //햄버거 메뉴 클릭하면 nav 나옴
            $('.mobile_menu').click(function(){
                $('nav').stop().animate({
                    right:0
                });
            });
            //close버튼 클릭하면 nav 들어감
            $('.close').click(function(){
                $('nav').stop().animate({
                    right:'-100vw'
                });
            });
            
            
            
            
            
            
            
            //내비게이션 (아코디언 메뉴)    
            //next - 이벤트 발생하는 객체의 형제객체
            $('nav>ul>li>a').click(function(){
		if($(this).attr('class') != 'active' ){
		$('nav>ul>li>a').next().slideUp();
		$('nav > ul > li > a').removeClass('active');
       $(this).addClass('active');
       $(this).next().slideDown();
	}else{
	   $(this).removeClass('active');
       $(this).next().slideUp();
		}
	});
            
        } else {
            
            
            
            
            //pc alert('pc 접속'); 
        
        $('nav>ul>li').hover(function () {
        $('.sub').stop().slideDown();
        $('.sub_bg').stop().slideDown();
    }, function () {
        $('.sub').stop().slideUp();
        $('.sub_bg').stop().slideUp();
    });
            
            
            
            
        
        
    
      } 
     }

    //내비게이션
 
    

    

    //슬라이드(swiper)
    var swiper = new Swiper('.swiper1', {
        effect: 'fade',
        //        cssMode: true, (effect쓸때는 없어야함)
        loop: true,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true

        },
        mousewheel: true,
        keyboard: true,
    });


    //album(swiper)
    var swiper = new Swiper('.swiper3', {
        slidesPerView: 5,
        spaceBetween: 30,
        //        effect: 'fade',
        //        cssMode: true, (effect쓸때는 없어야함)
        breakpoints:{
           1920:{
            slidesPerView:5
        }, 
            1600:{
            slidesPerView:5
        },
            1200:{
            slidesPerView:5
        },
            960:{
            slidesPerView:3
        },
                     768:{
            slidesPerView:3             
        },
                    640:{
            slidesPerView:3            
        },   
                    480:{
            slidesPerView:1            
        },   
                    320:{
            slidesPerView:1            
        }   
         },
        loop: true,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        on:{
            slideChangeTransitionEnd:function(){
                var resNum=0;
                var actNum=this.activeIndex;
                var slides=this.slides;
                if($(window).width()>960){
                    resNum=actNum+2;
                    slides.removeClass('active');
                    slides.eq(resNum).addClass('active');
                }else{
                    resNum=actNum+1;
                    slides.removeClass('active');
                    slides.eq(resNum).addClass('active');
                }
            }
        }
    });




    //magazine(swiper)
    var swiper = new Swiper('.swiper4', {
        slidesPerView: 4,
        spaceBetween: 0,
        
        breakpoints:{
           1920:{
            slidesPerView:4
        }, 
            1600:{
            slidesPerView:4
        },
            1200:{
            slidesPerView:4
        },
            960:{
            slidesPerView:3
        },
                     768:{
            slidesPerView:3             
        },
                    640:{
            slidesPerView:3            
        },   
                    480:{
            slidesPerView:1            
        },   
                    320:{
            slidesPerView:1            
        }   
         }, 
         
        
        //        effect: 'fade',
        //        cssMode: true, (effect쓸때는 없어야함)
        loop: true,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });


    //fullpage(마우스휠로 화면 이동)
    //fullpage 
        $('#fullpage').fullpage({
        navigation:true,
        navigationPosition:'right',
        responsiveWidth:960,    
        afterLoad:function(anchorLink,index){
            
        //만약 접속한 기기의 가로길이가 961이상이면 동그라미버튼 보임, 960이하이면 안보임
            if($(window).width()>960){
                
              //동그라미 버튼 2,3,4 화면에서만 보임
            if(index === 1 || index === 5){
                $('#fp-nav').fadeOut();
            }else{
                $('#fp-nav').fadeIn();  
            }
        }
        if($(window).width()>480){
             //모바일에서는 section의 높이 자동으로 인식
            $('section.section').removeClass('fp-auto-height');            
        }else{
                $('.section').addClass('fp-auto-height');
                
        }
              
                
                
        
            
            
            
            if(index==2){
                $('.album .animated').addClass('active');
                $('.banner .animated').removeClass('active');
                $('.banner li').removeClass('active'); 
                $('.maz .animated').removeClass('active');
        //        swiper3의 slide 애니메이션을 첫번째부터 시작하도록 하는 코딩
        //        $('.swiper3 .swiper-slide').each(function(){
                  //$(this)는 .swiper-slide 1개 가리킴    
        //         var idx=$(this).index()*0.1; 
        //         $(this).css('transition-delay',idx+'s');    
                    
                    
       //         });
                
            }else if(index==3){
                $('.album .animated').removeClass('active');
                $('.banner .animated').addClass('active');
                $('.banner li').addClass('active');
                $('.maz .animated').removeClass('active');
            }else if(index==4){
                $('.album .animated').removeClass('active');
                $('.banner .animated').removeClass('active');
                $('.banner li').removeClass('active'); 
                $('.maz .animated').addClass('active');
            } 
        }
    });
 });