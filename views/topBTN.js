$(document).ready(function(){
	
	$(window).scroll(function () {
            if ($(this).scrollTop() > 50) {
                $('#top').fadeIn();
            } else {
                $('#top').fadeOut();
            }
        });
        // scroll body to 0px on click
        $('#top').click(function () {
           // $('#top').title('hide');
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
        
     //   $('#top').title('show');

})