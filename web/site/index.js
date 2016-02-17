$(document).ready(function () {

    // hide #arriba y #abajo first
    $("#arriba").hide();
    //$("#abajo").hide();

    // fade in #arriba
    $(function () {

        var altura = $(document).height();
        var alturaVentana = $(window).height();
        var pie = $("footer").height();
        $(".jumbotron").css({"height": (alturaVentana-50)-pie});
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $('#arriba').fadeIn();
            } else {
                $('#arriba').fadeOut();
            }
            ;

            if ($(this).scrollTop() + $(this).height() == altura) {
                $('#abajo').fadeOut();
            } else {
                $('#abajo').fadeIn();
            }
            ;
        });


        // scroll body to 0px on click
        $('#arriba').click(function () {
            var marco = Math.floor($(window).scrollTop() / alturaVentana);
            marco = (marco - 1) * alturaVentana;
            $('body,html').animate({
                scrollTop: marco + "px"
            }, 800);
            return false;
        });

        $('#abajo').click(function () {
            var marco = Math.floor($(window).scrollTop() / alturaVentana);
            marco = (marco + 1) * alturaVentana;
            $('body,html').animate({
                scrollTop: marco + "px"
            }, 800);
            return false;
        });
    });

});


