$(function(){
    
    //HAMBURGER NAV
    $.fatNav();

    //SMOOTCH SCROLL
$(".fat-nav, .header-button-skills").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 500);
});
	//CHANGE MENU'S COLOR 
    var scroll_start = 0;
   	var startchange = $('#skills');
   	var endchange = $('#education');
   	var offsets = startchange.offset();
   	var offsete = endchange.offset();
   	$(document).scroll(function() { 
    	scroll_start = $(this).scrollTop();
    	if(scroll_start > offsets.top && scroll_start < offsete.top ) {
    		$('.hamburger').css({'background-color': '#333',
    								'border': '0.1rem solid #333' 
    							});
       	} else {
          	$('.hamburger').css({'background-color': 'transparent',
          						'border': '0.1rem solid #fff'
          						});
       	}
   	});    
});





