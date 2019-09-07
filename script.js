$(document).ready(function(){
   
    $('.red').click(function(){
        $(this).fadeOut();
    
});

    $('.green').click(function(){
        $('.blue').hide();
        
    });

    $('.yellow').click(function(){
        $('.green').hide();
        $('.blue').fadeIn();
        
    });

    $('.blue').click(function(){
        $('.blue, .red, .yellow, .green').fadeToggle();
    });
    
    $('.black').click(function(){
        $('.blue, .red, .yellow, .green').toggle("slow");
    });
});