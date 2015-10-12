'use strict';

(function () {

  var templateString = $('#itemTemplate').text();
  var templateFunction = _.template(templateString);

  var etsyURL = 'https://api.etsy.com/v2/listings/active.js?api_key=h9oq2yf3twf4ziejn10b717i&keywords=shibori+pillow&includes=Images,Shop';

  $.ajax({
    url: etsyURL,
    dataType: 'jsonp',
    method: 'get'
  }).then(function (response) {
    console.log(response);

    _.each(response.results, function (item) {

      var itemHTML = templateFunction(item);
      $('.item-results').append(itemHTML);
    });
  });
})();