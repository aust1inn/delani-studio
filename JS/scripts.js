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