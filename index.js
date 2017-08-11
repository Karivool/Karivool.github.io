$(document).ready(function() {
    $(".namebar").hide();
    let topOfTechs = $(".techs").offset().top;
    $(window).scroll(function() {
        if($(window).scrollTop() > topOfTechs) { //scrolled past the other div?
            $(".namebar").show(10); //reached the desired point -- show div
        } else {
          $(".namebar").hide();
        }
    });
});
