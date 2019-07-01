/*
//script for destinations card filter

//europe
$("#show-europe").click(function(){
  $(".asia").hide();
  $(".south-america").hide();
  $(".north-america").hide();
  $(".europe").show();

});

//north america
$("#show-n-america").click(function(){
  $(".asia").hide();
  $(".south-america").hide();
  $(".europe").hide();
  $(".north-america").show();
});

//south america
$("#show-s-america").click(function(){
  $(".asia").hide();
  $(".north-america").hide();
  $(".europe").hide();
  $(".south-america").show();
});

//asia and oceania
$("#show-asia").click(function(){
  $(".north-america").hide();
  $(".south-america").hide();
  $(".europe").hide();
  $(".asia").show();
});
*/







//reset filters
$('#reset-filters').click(function(){
  $(".asia").show();
  $(".south-america").show();
  $(".north-america").show();
  $(".europe").show();
});
