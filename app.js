console.log('Linked.');

// (function(){
// var app = angular.module('list', [ ]);

// app.controller('ListController', function(){

// });
// })();

$.ajax({
      type: "GET",
      url:"https://openapi.etsy.com/v2/listings/active.js?callback=getData&api_key={insert api key here}",
      dataType: "jsonp",
      jsonpCallback: 'getData',
      contentType: "application/json",
    }).done(function(json) {
      console.log(json);
    });











