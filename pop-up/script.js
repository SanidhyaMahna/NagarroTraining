// $(document).ready(function(){


//     $('.click').on('click',function(){
//         $('#box').addClass('show');
//     });
//     $('.submission').on('click',function(){
//         $('#box').removeClass('show');
//     });
// });



var k = 0;
$(document).ready(function(){
 
    $('.clicks').on('click', function(){
        console.log("BUTTON CLICKED");
        if(k%2 == 0) $('#box').addClass('show');
        else $('#box').removeClass('show');
        k++;
    });
 
    $('.submission').on('click', function(){
        $('#box').removeClass('show');
    });
 
});