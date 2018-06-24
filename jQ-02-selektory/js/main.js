$(document).ready(function() {
   //selektory po tagu
    
    var akapity = $("p");
    console.log(akapity);
    
    //selektor konkretnego paragrafu na stronie :eq(index)
    var akapity = $("p:eq(2)");
    console.log(akapity);
    
    var PagrafID = $('#paragraf');
    console.log(PagrafID);
    
    var ParagrafKlasa = $('.paragraf');
    console.log(ParagrafKlasa);
    
    var ParagrafAtrybut1 = $("[class^='paragraf']");
    console.log(ParagrafAtrybut1);
    
    var ParagrafAtrybut2 = $("[class$='next']");
    console.log(ParagrafAtrybut2);
    
    //pobiera paragrafy, których klasa zaczyna się od 'paragraf'
    //class$ pobrał by paragraf którego klasa kończy się danym ciągiem znaków
    
});
