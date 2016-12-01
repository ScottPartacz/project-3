$.noConflict();
(function($) {
  
$(document).ready(function(){
    $('#movie-form').on('submit', function(e) { 
        e.preventDefault(); 
        var poster = $('#movie').val();
        var url = 'http://www.omdbapi.com/?t=' + poster + '&r=json' + '&plot=full';
        $.get(url).done(
          
          
    });
});
   
})(jQuery);