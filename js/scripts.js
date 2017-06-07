$(document).ready(function() {
  $("#blanks form").submit(function(event) {
  var firstName = $("input#firstName").val();
  var lastName = $("input#lastName").val();

  $(".firstName").text(firstName);
  $(".lastName").text(lastName);

  $(".award").show();
  event.preventDefault();
 })
})
