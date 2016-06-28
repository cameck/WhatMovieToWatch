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
});
