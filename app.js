console.log('Linked.');

var $body = $('body');
var $entries  = $('#entries');
var $list   = $('#list');
var $mailTo = $('#mail-to');

$entries.append($('<p id="entry-text">'));
$('#entry-text').text("Add Item To Wishlist");
$entries.append($('<input type="text" placeholder="item name." id="item-name">'));
$entries.append($('<input type="text" placeholder="item description." id="item-description">'));
$entries.append($('<input type="text" placeholder="link to item." id="item-link">'));
$entries.append($('<input type="submit" id="add" value="add.">'));









$('#add').click( function() {
   var Description = $('#description').val();
   if($("#item-name").val() === '') {
    $('#alert').html("<strong>Warning!</strong> You need to have an item-name!");
  }
});





// (function(){
// var app = angular.module('list', [ ]);

// app.controller('ListController', function(){

// });
// })();

// $.ajax({
//       type: "GET",
//       url:"https://openapi.etsy.com/v2/listings/active.js?callback=getData&api_key={insert api key here}",
//       dataType: "jsonp",
//       jsonpCallback: 'getData',
//       contentType: "application/json",
//     }).done(function(json) {
//       console.log(json);
//     });











