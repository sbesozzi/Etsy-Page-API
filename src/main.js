(function () {

// Create variables for template

var templateString = $('#itemTemplate').text();
var templateFunction = _.template(templateString); 

// Assign variable for Etsy URL 

let etsyURL = 'https://api.etsy.com/v2/listings/active.js?api_key=h9oq2yf3twf4ziejn10b717i&keywords=shibori+pillow&includes=Images,Shop';

// Create jQuary request

$.ajax({
  url: etsyURL,
  dataType: 'jsonp',
  method: 'get'
}).then (function (response) {
  console.log(response);
 
// Create result forEach response function 

  _.each(response.results, function (item) {

// Append text to HTML

    var itemHTML = templateFunction(item);
    $('.item-results').append(itemHTML);
  });
 
 });

}());