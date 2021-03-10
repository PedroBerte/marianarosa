$(window).on('beforeunload', function() { //to scroll to top
    $(window).scrollTop(0);
});

window.onload = function () {

    document.getElementById('inicio-logo').style.opacity = "100%";

    var timerId = setTimeout(function(){
        document.getElementById('inicio-logo').style.opacity = "0%";
    }, 1000);
    var timerId = setTimeout(function(){
        document.getElementById('conteudo-geral').style.opacity = "100%";
    }, 2000);
    var timerId = setTimeout(function(){
        document.getElementById('full-screen').style.display = "none";
    }, 2000);
    var timerId = setTimeout(function(){
        document.getElementById('inicio-logo').style.display = "none";
    }, 2000);

}

function rolar_para(elemento) {
    $('html, body').animate({
        scrollTop: $(elemento).offset().top
    }, 900);
}