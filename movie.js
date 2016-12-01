$.noConflict();
(function($) {
  
$(document).ready(function(){
    $('#movie-form').on('submit', function(e) { 
        e.preventDefault(); 
        var poster = $('#movie').val();
        var url = 'http://www.omdbapi.com/?t=' + poster + '&r=json' + '&plot=full';
        $.get(url).done(
          function(data,json) {
            var movie = data.Poster;
           
              
              $('#Rating').text('Rated: ' + data.Rated);
              $('#Release').text('Release: ' + data.Released);
              $('#Runtime').text('Runtime: ' + data.Runtime);
              $('#poster').html('<img id="thePoster" src=' + movie + ' alt = "Poster Not Found" />');
              $('#Plot').text('Plot: ' + data.Plot);
              $('#Metascore').text('MetaScore: ' + data.Metascore);
              $('#imdb').text('IMDbRating: ' + data.imdbRating);
            
            
          })
          
    });
});
   
})(jQuery);