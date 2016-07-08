//wait for DOM to be ready
$(document).ready(function(){
  //declare testNumLength function
    var testNumLength = function(number) {
          if (number.length > 9) {
              totaldiv.val(number.substr(number.length-9,9));
              if (number.length > 15) {
                  number = "";
                  totaldiv.val("Err");
              }
          }
      };
    //declaring the variables
    var number = "";
    var newnumber = "";
    var operator = "";
    var totaldiv = $("#total");
      totaldiv.val("0");

    //number class click function
    $(".number").click(function() {
      if (number.indexOf(".")> -1 && $(this).text()===".") {
        //do nothing

      }
      else {
      number += $(this).text();
      totaldiv.val(number);
      testNumLength(number);
      }

      });
    //operator class function
    $(".operator").click(function() {
      operator = $(this).text();
      newnumber = number;
      number = "";
      });
    //clear and allclear functions
    $(".clear,.allclear").click(function() {
      number = "";
      totaldiv.val("0");
    if($(this).hasClass("allclear")) {
        newnumber = "";
      }
      });
    //equals function
    $(".equals").click(function() {
     if (operator === "+") {
      //turn result newnumber string, radix
      result=parseFloat(newnumber, 10) + parseFloat(number, 10);
      number = result.toString(10);
    } else if (operator === "-") {
   result=parseFloat(newnumber, 10) -  parseFloat(number, 10);

      number = result.toString(10);
    } else if (operator === "÷") {
   result=parseFloat(newnumber, 10) / parseFloat(number, 10);
      number = result.toString(10);
    }
     else if (operator === "X") {
 result=parseFloat(newnumber, 10) * parseFloat(number, 10);
      number = result.toString(10);
 }
 //call the functions
    totaldiv.val(number);
    testNumLength(number);
    number="";
    newnumber="";
 });
 });