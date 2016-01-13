$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var nameInput = $("input#name").val().toUpperCase;
    var streetInput = $("input#street").val();
    var cityInput= $("input#city").val();
    var stateInput = $("input#state").val();

    $(".name").text(nameInput);
    $(".street").text(streetInput);
    $(".city").text(cityInput);
    $(".state").text(stateInput);


    $("#letter").show();

    event.preventDefault();
  });

});
