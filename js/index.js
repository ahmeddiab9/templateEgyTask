$(function () {
    $('.scroll-link').click(function () {
        event.preventDefault();
        $('html , body').animate({
            scrollTop : $( '#' + $(this).data('id')).offset().top
        } , 750) 
      })
  })