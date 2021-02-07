window.onload = function () {
    document.getElementById('inicio-logo').style.opacity = "100%";
    var timerId = setTimeout(function(){
        document.getElementById('inicio-logo').style.opacity = "0%";
    }, 1600);
    var timerId = setTimeout(function(){
        document.getElementById('full-screen').style.display = "none";
    }, 3200);
    var timerId = setTimeout(function(){
        document.getElementById('conteudo-geral').style.opacity = "100%";
    }, 3100);
}

function rolar_para(elemento) {
    $('html, body').animate({
        scrollTop: $(elemento).offset().top
    }, 900);
}