$(document).ready(function(){
    var number = "";
    var oldnumber = "";
    var operator = "";
    var totaldiv = $("#total");
    totaldiv.val("0");
    $(".number").click(function() {
      if (number.indexOf(".")> -1 && $(this).text()===".") {
      }
      else {
        number += $(this).text();
        totaldiv.val(number);
      }
    });
    $(".operator").click(function() {
      operator = $(this).text();
      oldnumber= number;
      number = "";
    });
    $(".clear,.allclear").click(function() {
       number = "";
       totaldiv.val("0");
       if($(this).hasClass("allclear")) {
       oldnumber = "";
      }
    });
    $(".equals").click(function() {
    switch(operator){
      case "+" :
        number=parseFloat(oldnumber)+ parseFloat(number);
        break;
      case "-":
        number=parseFloat(oldnumber) - parseFloat(number);
        break;
        case "÷" :
        number=parseFloat(oldnumber) / parseFloat(number);
        break;
        case "X" :
        number=parseFloat(oldnumber) * parseFloat(number);
        break;
        case "%" :
        number=number=parseFloat(oldnumber) % parseFloat(number);
       }
    totaldiv.val(number);
  });
});
