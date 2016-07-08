//wait for DOM to be ready
$(document).ready(function(){
    //declaring the variables
    var number = "";
    var oldnumber = "";
    var operator = "";
    var totaldiv = $("#total");
    totaldiv.val("0");
    //when you click on a number class
    $(".number").click(function() {
      //check if number string has a decimal and if it has been clicked again.
      if (number.indexOf(".")> -1 && $(this).text()===".") {
        //do nothing
      }
      else {
        //add whatever has been clicked to number string
        number += $(this).text();
         //setting value of totaldiv to the number
        totaldiv.val(number);
      }
    });
    //when you click on an operator class
    $(".operator").click(function() {
     //whatever operator you click on, assign to operator variable.
      operator = $(this).text();
      //setting oldnumber value to number
      oldnumber= number;
      //set number to equal nothing
      number = "";
    });

    //when you click on clear and allclear classes
    $(".clear,.allclear").click(function() {
       //number = nothing
       number = "";
       //totaldiv display 0
       totaldiv.val("0");
       //if you click allclear
       if($(this).hasClass("allclear")) {
       //oldnumber is nothing
       oldnumber = "";
      }
    });
  //when you click on equals class
    $(".equals").click(function() {
      //if the operator used = plus
      if (operator === "+") {
      //turn result oldnumber string to a number and adding the next number
      result=parseFloat(oldnumber, 10) + parseFloat(number, 10);
      //change number result to a string
      number = result.toString(10);
      //else if operator used = minus
      }
      else if (operator === "-") {
      //turn result oldnumber string to a number and minus the next number
       result=parseFloat(oldnumber, 10) -  parseFloat(number, 10);
      //change number result to a string
       number = result.toString(10);
      //else if operator used = divide
      }
      else if (operator === "÷") {
      //turn result oldnumber string to a number and divide the next number
      result=parseFloat(oldnumber, 10) / parseFloat(number, 10);
      //change number result to a string
      number = result.toString(10);
      }
      //else if operator used is multiply
      else if (operator === "X") {
      //turn result oldnumber string to a number and multiply the next number
      result=parseFloat(oldnumber, 10) * parseFloat(number, 10);
      //change number result to a string
      number = result.toString(10);
      }
      //setting the value of the totaldiv to number
      totaldiv.val(number);
    });
 });
//THE END