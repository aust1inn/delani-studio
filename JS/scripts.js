$(document).ready(function () {
  $(".design")
    .find("img")
    .click(function () {
      $(".design").find("p").toggle();
      $(".design").find("img").hide();
    });

    $(".design").find("p").click(function(){
      $(".design").find("img").show();
      $(".design").find("p").hide();

    });


  $(".development")
    .find("img")
    .click(function () {
      $(".development").find("p").toggle();
      $(".development").find("img").hide();

    });

    $(".development").find("p").click(function(){
      $(".development").find("img").show();
      $(".development").find("p").hide();

    });


  $(".project-management")
    .find("img")
    .click(function () {
      $(".project-management").find("p").toggle();
      $(".project-management").find("img").hide();

    });

    $(".project-management").find("p").click(function(){
      $(".project-management").find("img").show();
      $(".project-management").find("p").hide();

    });

});

$(document).ready(function () {
  let classes = [
    "img1",
    "img2",
    "img3",
    "img4",
    "img5",
    "img6",
    "img7",
    "img8",
  ];

  classes.forEach((element) => {
    $("." + element).hover(
      function () {
        $("." + element)
          .find(".overlay")
          .css("display", "block");
      },
      function () {
        $("." + element)
          .find(".overlay")
          .css("display", "none");
      }
    );
  });
});
