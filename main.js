$(document).ready(function(){
    
    //button sinista
    $('.prev').click(function(){
        var images2=$('.images img.active');
        images2.removeClass('active');
        if(images2.hasClass('last')){
            var ultimaImg=$('.images img.first');
            ultimaImg.addClass('active')
        }
        else{
            images2.next().addClass('active');

        }
        
    })
    
    
    
    //button destra
    
    $('.next').click(function(){
        var images=$('.images img.active');
        images.removeClass('active');

        if(images.hasClass('last')){
            var primaImg=$('.images img.first');
            primaImg.addClass('active')
        }
        else{
            images.next().addClass('active');

        }
    })




})//fine di JQery