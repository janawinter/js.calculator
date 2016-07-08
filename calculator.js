
$(document).ready(function(){
    var testNumLength = function(number) {
          if (number.length > 9) {
              totaldiv.text(number.substr(number.length-9,9));
              if (number.length > 15) {
                  number = "";
                  totaldiv.text("Err");
              }
          }
      };
      var number = "";
      var newnumber = "";
      var operator = "";
      var totaldiv = $("#total");
      totaldiv.text("0");

      $(".number").click(function() {
      number += $(this).text();
      totaldiv.val(number);
      testNumLength(number);
      });
      $(".operator").click(function() {
      operator = $(this).text();
      newnumber = number;
      number = "";
      //totaldiv.val("");
      });
      $(".clear,.allclear").click(function() {
      number = "";
      totaldiv.val("0");
      if ($(this).hasClass("allclear")) {
        newnumber = "";
      }
      });

 $(".equals").click(function() {
    if (operator === "+") {
      result=parseInt(newnumber, 10) + parseInt(number, 10);
      number = result.toString(10);

    } else if (operator === "-") {
   result=parseInt(newnumber, 10) -  parseInt(number, 10);

      number = result.toString(10);
    } else if (operator === "÷") {
   result=parseInt(newnumber, 10) / parseInt(number, 10);
      number = result.toString(10);
    }
     else if (operator === "X") {
 result=parseInt(newnumber, 10) * parseInt(number, 10);
      number = result.toString(10);
 }

 totaldiv.val(number);
 testNumLength(number);
 number="";
 newnumber="";
 });
 });