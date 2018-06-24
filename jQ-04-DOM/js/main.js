$(document).ready(function() {

//$('body').find('p:first').css({
//    'color':'blue',
//    'font-style': 'italic',
//})

$('body').find('p:eq(1)').css({
    'color':'blue',
    'font-style': 'italic',
}).after("<strong>Drgi paragraf namierzony!!</strong>");

});

