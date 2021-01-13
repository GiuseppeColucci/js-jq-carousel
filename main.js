$(document).ready(function(){
//button sinista
    $('.prev').click(function(){
        $('.active').removeClass('active').prev().addClass('active');

    })

//button destra

    $('.next').click(function(){
        $('.active').removeClass('active').next().addClass('active');
    })




})//fine di JQery