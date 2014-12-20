console.log('Linked.');

var $body     = $('body');
var $entries  = $('#entries');
var $list     = $('#list');
var $mailTo   = $('#mail-to');
var $form     = $('#form');

$entries.append($('<p id="entry-text">'));
$('#entry-text').text("Add Item To Wishlist");
$entries.append($('<input type="text" placeholder="item name." id="item-name">'));
$entries.append($('<input type="text" placeholder="item description." id="item-description">'));
$entries.append($('<input type="text" placeholder="link to item." id="item-link">'));
$entries.append($('<input type="submit" id="add" value="add.">'));

$mailTo.append($('<p id="mail-text">'));
$('#mail-text').text("Send Your Wish List To A Loved One!");







$('#add').click( function() {
   if($("#item-name").val() === '') {
    $('#alert').html("<strong>Warning!</strong> You need to have an item name!");
  }
  else(    $list.append($("#item-name").val()) + "  " + $list.append($("#item-description").val()) + "  " + $list.append($("#item-link").val())    );
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











