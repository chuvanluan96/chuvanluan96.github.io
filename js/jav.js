
// Edit By @DTM JS //
jQuery(document).ready(function ($) {
    $("#menu").mmenu({
       "extensions": [
          "pagedim-black",
          "theme-dark"
       ],
    });
    var API = $("#menu").data( "mmenu" );
    $('.item_menu_mobile a').on('click',function(){
        API.close(); 
    }); 
  var status_form = true;
  function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
  $(".fancybox").fancybox({
      type: "iframe",
      // other API options
  });
  $('[data-toggle="tooltip"]').tooltip();
  $(".icon_scrolltop").click(function(event){
   $('html, body').animate({ scrollTop: 0 }, 1000);
  });
  // Hide,Show ScrollToTop
  var num = 100;
  $(window).bind('scroll', function () {
      if ($(window).scrollTop() > num) {
          $('.scrolltop,.header_top').addClass('fixed');
      }
      else
      {
          $('.scrolltop,.header_top').removeClass('fixed');
      }
  });

  $('.owl-news-item').owlCarousel({
        loop:true,
        margin:0,
        dots:false,
        responsiveClass:true,
        nav:false,
        autoHeight:true,
        autoplay:true,
        autoplayTimeout:3000,
        navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
        responsive:{
            0:{
                items:1
            },
            480:{
                items:2
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });
    $('.owl-4-collum-item').owlCarousel({
        loop:true,
        margin:0,
        dots:false,
        responsiveClass:true,
        nav:false,
        navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
        responsive:{
            0:{
                items:1,
                autoHeight:true,
                autoplay:true,
                autoplayTimeout:3000,
                smartSpeed:1000
            },
            600:{
                items:2,
                autoHeight:true,
                autoplay:true,
                autoplayTimeout:3000,
                smartSpeed:1000
            },
            1000:{
                items:4,
                loop:false
            }
        }
    });
    $('.owl-slideshow-item').owlCarousel({
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        items:1,
        dots:false,
        loop:true,
        responsiveClass:true,
        nav:true,
        navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
        autoHeight:true,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:false
    });
    $('.owl-quote-item').owlCarousel({
        items:1,
        dots:true,
        loop:true,
        responsiveClass:true,
        nav:false,
        navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
        autoHeight:true,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:false
    });
    $('.owl-block-item').owlCarousel({
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        items:1,
        dots:false,
        loop:true,
        responsiveClass:true,
        nav:false,
        navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
        autoHeight:true,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:false
    });
    $('.owl-3-collum-item').owlCarousel({
        loop:true,
        margin:0,
        dots:false,
        responsiveClass:true,
        nav:false,
        navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
        responsive:{
            0:{
                items:1,
                autoHeight:true,
                autoplay:true,
                autoplayTimeout:3000,
                smartSpeed:1000
            },
            600:{
                items:2,
                autoHeight:true,
                autoplay:true,
                autoplayTimeout:3000,
                smartSpeed:1000
            },
            1000:{
                items:3,
                loop:false
            }
        }
    });
    $('.owl-5-collum-item').owlCarousel({
        loop:true,
        margin:0,
        dots:false,
        responsiveClass:true,
        nav:false,
        navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
        responsive:{
            0:{
                items:1,
                autoHeight:true,
                autoplay:true,
                autoplayTimeout:3000,
                smartSpeed:1000
            },
            600:{
                items:2,
                autoHeight:true,
                autoplay:true,
                autoplayTimeout:3000,
                smartSpeed:1000
            },
            1025:{
                items:5,
                loop:false
            }
        }
    });
    $('.owl-2-collum-item').owlCarousel({
        loop:true,
        margin:0,
        dots:false,
        responsiveClass:true,
        nav:false,
        navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
        responsive:{
            0:{
                items:1,
                autoHeight:true,
                autoplay:true,
                autoplayTimeout:3000,
                smartSpeed:1000
            },
            600:{
                items:2,
                autoHeight:true,
                autoplay:true,
                autoplayTimeout:3000,
                smartSpeed:1000
            },
            1000:{
                items:2,
                loop:false
            }
        }
    });
    $('.owl-feedback-item').owlCarousel({
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        items:1,
        dots:true,
        loop:true,
        responsiveClass:true,
        nav:false,
        navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
        autoHeight:true,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:false
    });
    $('.owl-benefit-item').owlCarousel({
        items:1,
        dots:false,
        loop:true,
        responsiveClass:true,
        nav:true,
        navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
        autoHeight:true,
        //autoplay:true,
        autoplayTimeout:3000,
        smartSpeed:1000,
        autoplayHoverPause:false
    });
    $('.owl-themes-item').owlCarousel({
        loop:false,
        margin:0,
        dots:false,
        responsiveClass:true,
        nav:true,
        navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
        responsive:{
            0:{
                items:1,
                autoHeight:true,
                autoplay:true,
                autoplayTimeout:3000
            },
            480:{
                items:2,
                autoHeight:true,
                autoplay:true,
                autoplayTimeout:3000
            },
            600:{
                items:2,
                autoHeight:true,
                autoplay:true,
                autoplayTimeout:3000
            },
            1000:{
                items:4
            }
        }
    });
    $('.owl_blog_related_item').owlCarousel({
        loop:false,
        margin:0,
        dots:true,
        responsiveClass:true,
        nav:false,
        autoHeight:true,
        autoplay:true,
        smartSpeed:2000,
        autoplayTimeout:3000,
        navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
        responsive:{
            0:{
                items:1
            },
            480:{
                items:2
            },
            600:{
                items:2
            },
            1000:{
                items:4
            }
        }
    });

    $('.owl_teamleader_item').owlCarousel({
        loop:false,
        margin:0,
        dots:false,
        responsiveClass:true,
        nav:true,
        autoHeight:true,
        autoplay:true,
        smartSpeed:2000,
        autoplayTimeout:3000,
        navText: ['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>'],
        responsive:{
            0:{
                items:2
            },
            480:{
                items:2
            },
            600:{
                items:2
            },
            1000:{
                items:5
            }
        }
    });

    $('.choose_nganh').click(function() {
        $('.job_types').slideToggle(500);
    });
    $('.btn_send_cv').click(function() {
        //$('.btn_send_cv_content').slideToggle(500);
    });

    new WOW().init();


    $('.form_dk .phone input,.form_dk .phone_ql input,#phone_lh').bind('keyup paste', function(){
       this.value = this.value.replace(/[^0-9]/g, '');
    });
    $('#form_email').click(function() {
        fbq('track', 'CompleteRegistration');
        var email_val = $("#email_val").val();
        var email_type = $("#email_type").val();
        $('.register_email_form div').remove();
        $('.register_email_form').removeClass('erros');
        if(validateEmail(email_val) == false){
            $('.register_email_form').addClass('erros');
            $('.register_email_form').append('<div>Email không hợp lệ</div>');
            return false;
        }
        $('#load_page').show();
        var data = {
            'email'      : email_val,
            'email_type' : email_type,
            'form_type'  : 'email_dk',
        };
        str='https://bota.vn/success/';
        $.ajax
        ({
            type: "POST",
            url: str,
            data:data,
            success: function(response){
                    $('.register_email_form').append('<div class="dk_succsess">Quý khách đã đăng ký thành công</div>');
                    $('#email_val').val('');
                    $('#load_page').hide();
                }
           });
    });
    $('#banggia_dk').click(function() {
        fbq('track', 'CompleteRegistration');
        var website = $("#link_ql").val();
        var phone = $("#phone_ql").val();
        var email = $("#email_ql").val();
        $('.form_dk div.erros div').remove();
        $('.form_dk > div').removeClass('erros');
        if(website.length < 3){
            $('.link_ql').addClass('erros');
            $('.link_ql').append('<div>Vui lòng kiểm tra lại link website</div>');
            return false;
        }else if (phone.length <10 || phone.length >12 ){
            $('.phone_ql').addClass('erros');
            $('.phone_ql').append('<div>Số điện thoại không xác định</div>');
            return false;
        }else if (validateEmail(email) == false ){
            $('.email_ql').addClass('erros');
            $('.email_ql').append('<div>Email không hợp lệ</div>');
            return false;
        }
        $('#load_page').show();
        var data = {
            'website'  : website,
            'phone'    : phone,
            'email'    : email,
            'form_type': 'banggia_dk',
        };
        str='https://bota.vn/success/';
        $.ajax
        ({
            type: "POST",
            url: str,
            data:data,
            success: function(response){
                    $('#banggia_quanly .form_dk').empty();
                    $('#banggia_quanly .form_dk').append('<div class="dk_succsess">Quý khách đã đăng ký thành công</div>');
                    $('#website').val('');
                    $('#phone_ql').val('');
                    $('#email_ql').val('');
                    $('#load_page').hide();
                }
           });
    });

});
$("#trial-web").modal({ show: false, backdrop: 'static', });  
var blockW= $('.block_cate_news').width(); 
var blockR= $('.block1').height();
 blockR +=$('.block2').height();
 blockR +=$('.block3').height();
 blockR +=$('.block4').height();
 blockR = blockR + 400;
var total=$('html').height();
var bottom=$('.footer_top').height();
bottom = total - 500;
console.log(total);
  $(window).bind('scroll', function () {
      if ($(window).scrollTop() > blockR) {
          $('.block_right').addClass('fixed');
          $('.block_cate_news').css('width',blockW );
      }else if ($(window).scrollTop() > bottom) {
          $('.block_right').removeClass('fixed'); 
          $('.block_cate_news').css('width','auto' ); 
      }else{
          $('.block_right').removeClass('fixed');
          $('.block_cate_news').css('width','auto' );
      }
  });