$(document).ready(function() {

  $("#meow").click(function() {
    $("ul#cat").prepend("<li>Meow!</li>");
    $("ul#dog").prepend("<li>Woof!</li>");
    $("ul#cat").children("li").first().click(function() {
      $(this).remove();
      });
    $("ul#dog").children("li").first().click(function() {
      $(this).remove();
    });
  });

  $("#hiss").click(function() {
    $("ul#cat").prepend("<li>Hiss!</li>");
    $("ul#dog").prepend("<li>Growl!</li>");
  });

  $("#purr").click(function() {
    $("ul#cat").prepend("<li>Purr!</li>");
    $("ul#dog").prepend("<li>Whimper!</li>");
  });

  $("#p1").click(function() {
    // $("#img1").show();
    // $("#img1").children("img").click(function() {
    //   $("#img1").hide();
    // });
    $("#img1").html("<img src='img/dog.jpg'>");
    $("#img1").children("img").last().click(function() {
      $(this).remove();
    });
  });


});
