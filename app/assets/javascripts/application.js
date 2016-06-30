// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require materialize-sprockets
//= require materialize/extras/nouislider
//= require jquery_ujs
//= require turbolinks
//= require react
//= require react_ujs
//= require components
//= require_tree .

// Materialize initializations
$( document ).on('page:load', function(){
  // desktop dropdown menu
  $(".dropdown-button").dropdown({ hover: true,
                                   belowOrigin: true });
  // mobile sidenav
  $('.button-collapse').sideNav();
});

$( document ).ready(function(){
  // mobile sidenav
  $('.button-collapse').sideNav();
  // Add Truncate to strings
  String.prototype.trunc =
      function(n){
          return this.substr(0,n-1) + ( this.length > n ? '…' : '' );
      };

  // Facebook configs
  window.fbAsyncInit = function() {
    FB.init({
      appId      : '551107808409493',
      status     : true,
      xfbml      : true,
      version    : 'v2.4' // or v2.0, v2.1, v2.2, v2.3
    });
  };

  (function(d, s, id){
   var js, fjs = d.getElementsByTagName(s)[0];
   if (d.getElementById(id)) {return;}
   js = d.createElement(s); js.id = id;
   js.src = "//connect.facebook.net/en_US/sdk.js";
   fjs.parentNode.insertBefore(js, fjs);
 }(document, 'script', 'facebook-jssdk'));
});
