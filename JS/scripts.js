$(document).ready(function() {
    $(".design").find("img").click(function() {
        $(".design").find("p").toggle();
    });

    $(".development").find("img").click(function() {
        $(".development").find("p").toggle();
    });

    $(".project-management").find("img").click(function() {
        $(".project-management").find("p").toggle();
    });
});

$(document).ready(function() {
    let classes = ["img1" , "img2" , "img3" , "img4" , "img5" , "img6" , "img7" , "img8"]

    classes.forEach(element => {
        $("." + element).hover(function() {
            $("." + element).find(".overlay").css("display" , "block");
        },
        function () {
            $("." + element).find(".overlay").css("display" , "none");
        });
    });
   
});