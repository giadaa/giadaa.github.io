//script for destinations card filter

//europe
$("#show-europe").click(function(){
  $(".asia").hide();
  $(".south-america").hide();
  $(".north-america").hide();
  $(".europe").show();
  $(".europe").appendTo(".row1");

});

//north america
$("#show-n-america").click(function(){
  $(".asia").hide();
  $(".south-america").hide();
  $(".europe").hide();
  $(".north-america").show();
  $(".north-america").appendTo(".row1");
});

//south america
$("#show-s-america").click(function(){
  $(".asia").hide();
  $(".north-america").hide();
  $(".europe").hide();
  $(".south-america").show();
   $(".south-america").appendTo(".row1");
});

//asia and oceania
$("#show-asia").click(function(){
  $(".north-america").hide();
  $(".south-america").hide();
  $(".europe").hide();
  $(".asia").show();
  $(".asia").appendTo(".row1");
});






//reset filters
$('#reset-filters').click(function(){
  $(".asia").show();
  $(".south-america").show();
  $(".north-america").show();
  $(".europe").show();
});
