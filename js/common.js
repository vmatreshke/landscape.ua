$(document).ready(function() {
	
	
	// dropdown
	
	$(".js-dropdown-list").hide();
	$(".js-dropdown").click(function(){
		$(this).parent().find('.js-dropdown-list').slideToggle();
	});

	// gallery
	$(".js-slider").each(function(){
        var slider_1 = $(this).find('.js-cycle-1');
        var slider_2 = $(this).find('.js-cycle-2');
        slider_1.cycle();
        slider_2.cycle();

        var slideshows = $(this).find('.js-cycle').on('gallery__next gallery__prev', function(e, opts) {
            slideshows.not(this).cycle('goto', opts.currSlide);
        });

        slider_2.find(".cycle-slide").click(function(){
            var index = slider_2.data('cycle.API').getSlideIndex(this);
            slideshows.cycle('goto', index);
        });
    });

	// show/hide info
	$(".js-hide").click(function(){
		$(this).hide();
	});

	// tabs
	function tab() {
       $(".js-tab").each(function(){
         var tab_link = $(this).find("a");
         var tab_cont = $(this).parents(".js-tab-group").find(".js-tab-cont");
         tab_cont.hide();
         $(this).parents(".js-tab-group").find(".js-tab1").show();
            tab_link.on("click", function() {
             	var index = $(this).attr("href");
             	tab_link.removeClass("is-active");
             	tab_link.parent().removeClass("is-active");
             	$(this).addClass("is-active");
             	$(this).parent().addClass("is-active");
             	tab_cont.hide();
             	$(this).parents(".js-tab-group").find("."+index).show();
                return false;
            });
        });
    }
    	if ($(".js-tab-group").length) {
    		tab();
    	};

  	$(".overlay").hide();
  	$(".js-popup").hide();

  	// map popup

  	$(".js-map").on('click', function(){
  		$(".overlay").show();
		$(".js-popup-map").show();
  		return false;
  	});
  	$(".js-popup-close").on('click', function(){
		  $(this).parents(".js-popup").hide();
		  $(".overlay").hide();
  	});

  	// body scroll-top	
	
	$(".js-scrolltop").click(function (){
	  	$('html, body').animate({
	  	 	scrollTop: $(".out").offset().top
	  	}, 500);
	})
    
	// toggle company answer

	$(".js-comm-text").hide();
	$(".js-comm-btn").removeClass('is-open');
	$(".js-comm-btn").on('click', function(){
		$(this).toggleClass('is-open');
		$(this).next().toggle();
	});

	// popup add comment
	$(".js-popup-comment").on('click', function(){
		$(".js-popup-comm").show();
		$(".overlay").show();
		return false;
	});	


  // spinner
  
  $( ".spinner" ).slider({
      range: true,
      min: 0,
      max: 500,
      values: [ 0, 500 ],
      slide: function( event, ui ) {
        $( ".spinner-value__min input" ).val( ui.values[ 0 ] );
        $( ".spinner-value__max input" ).val( ui.values[ 1 ] );
      }
    });


    // count popup

    $(".js-count").hide();
    $(".js-thanks").hide();
    
    $(".js-count-btn").on('click', function(){
      $(".js-count").show();
      $(".overlay").show();
      return false;
    }); 
    $(".js-count-close").on('click', function(){
      $(".overlay").hide();
      $(".js-count").hide();
    });

    $(".overlay").on('click', function(){
      $(".js-popup").hide();
      $(".js-count").hide();
      $(".js-thanks").hide();
      $(".js-login").hide();
      $(this).hide();
    });

    $(".js-thanks-btn").on('click', function(){
      $(".js-count").hide();
      $(".js-thanks").show();
      return false;
    });

    $(".js-thanks-close").on('click', function(){
      $(".js-thanks").hide();
      $(".overlay").hide();
    });

    // login popup

    $(".js-login").hide();

    $(".js-login-btn").on('click', function(){
      $(".js-login").show();
      $(".overlay").show();
      return false;
    });

    $(".js-login-close").on('click', function(){
      $(".js-login").hide();
      $(".overlay").hide();
    });

    // window scroll
    $(window).scroll(function(){
        
    });

    $(document).click(function(event){

	});

});