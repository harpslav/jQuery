$(document).ready(function() {

    /*var textParagrafu = $("#paragraf").text();
    console.log(textParagrafu);
//    $("h1").text("Nowy tytuł");
    $("h1#first").text("Nowy tytuł H1");
    
    //Poniższe przydaje się dokopiowania treści całych elementów do innych częśći strony
    var body = $("body").html();
    console.log(body);
    
//    $("body").html("<div class='nowy-div'><h5>TYtuł H5</h5></div>");
    $("body").append("<div class='color-div'><h5>TYtuł H5</h5></div>");
//    $("body").prepend("<div class='nowy-div'><h5>TYtuł H5</h5></div>");
//    $("p").append("<div class='nowy-div'><h5>TYtuł H5</h5></div>"); dostawia element o danej treści po lub przed $("elementem") lub zastępuje element
    
$(".color-div").after("<img src='https://picsum.photos/400/600' class='img'>");
$(".color-div").before("<img src='https://picsum.photos/400/600' class='img-transform'>");
    
//usuwa wszystkie akapity
//$('p').remove();


//Usuwa zawartość elementu
//$('h1').empty();*/

//$('#second').css({
//    'font-size': '4rem',
//    'color': 'green',
//    'text-decoration': 'underline'
//});

setTimeout(function(){
    $('#second').addClass('ladny-napoj');
    $("#input").val("Start akcji");
}, 3500 );

    setTimeout(function(){
    $('#second').removeClass('ladny-napoj');
        $("#input").val("Powrót do stanu początkowgo");
}, 6500 );

var inputValue = $('#input').val();
    console.log (inputValue);
    
    
});

