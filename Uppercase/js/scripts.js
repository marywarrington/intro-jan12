$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var entryInput = $("input#entry").val();
    var entryUpper = entryInput.toUpperCase();
    $(".entry").text(entryUpper);
    $("#uppercase").show();

    event.preventDefault();
  });

// dark/light
  $("button#dk").click(function() {
    $("body").removeClass();
    $("body").addClass("light");
    $("#dk").hide();
    $("#button2").show();
  });

  $("button#button2").click(function() {
    $("body").removeClass();
    $("body").addClass("dark");
    $("#button2").hide();
    $("#dk").show();
  });

// highlight and box

  $("#pink").click(function() {
    $("#pink").toggleClass("highlight2");


      // if($("#pink").hasClass("highlight2"))
      //   $("#pink").removeClass("highlight2");
      //   else {
      //     $("#pink").addClass("highlight2");
      //   }
  });


});
