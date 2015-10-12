(function () {

// var firstItem = etsy.results[0];

var templateString = $('#itemTemplate').text();

// var templateString = ' <div><p><%= Images[0] %></p><p><%= title %></p> <p><%= Shop.shop_name %></p><p><%= "$"+price+currency_code %></p></div>';

// <div>
//   <p>
//   <%= Images[0] %>
//   </p>
// </div>

// <div>
//   <p>
//   <%= title %>
//   </p> 
//   <p>
//   <%= Shop.shop_name %>
//   </p>
//   <p>
//   <%= "$"+price+currency_code %>
//   </p>
// </div>

// Call template function to call out string 
var templateFunction = _.template(templateString);

_.each(etsy.results, function (item) {


  
  var itemHTML = templateFunction(item);
  
  $('.item-results').append(itemHTML);

});

  
}());
