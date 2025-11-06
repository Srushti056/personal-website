$(document).ready(function () {
  $("#learnMore").click(function () {
    $(".intro p").fadeOut(300, function () {
      $(this)
        .text(
          "I’m currently studying Computer Science and love building creative web projects."
        )
        .fadeIn(300);
    });
  });
});
