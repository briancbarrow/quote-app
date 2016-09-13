$(document).ready(function(){

  var getQuote = function() {
    $.ajax({
      url: 'http://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?',
      dataType: 'jsonp',
      type: 'GET',
      success: function(data){
        console.log(data);   
        $('.quote').text(data.quoteText)
        if(data.quoteAuthor === ''){
          $('.author').text('- Anonymous') 
        } else {
          $('.author').text('- ' + data.quoteAuthor)
        }        
      }
    });
  }
  $('button').click(function(e){
    getQuote();
  });
  getQuote();
});