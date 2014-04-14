(function(){
  'use strict';
  $(document).ready(initialize);
  var numArray=[];
  function initialize(){
    $('.number').click(number);
    $('.clear').click(clear);
    $('.decimal').click(decimal);
    $('.sign').click(sign);
    $('.push').click(push);
    $('.operator').click(operator);
  }
  function operator() {
    var op = $(this).data('op');
    var result;
    switch(op){
      case 'add':
        extract();
        result = numArray[0] + numArray[1];
        $('#display').text(sum);
        break;
      case 'sub':
        extract();
        result = numArray[1] - numArray[0];
        break;
      case 'mult':
        extract();
        result = numArray[1] * numArray[0];
        break;
      case 'divide':
        extract();
        result = numArray[1] / numArray[0];
        break;
      case 'exp':
        extract();
        result = Math.pow(numArray[1], numArray[0]);
        break;
      case 'root':
        extract();
        result = Math.sqrt(numArray[0]);
        break;
       case 'fact':
         extract();
         var x = numArray[0];
         result =factorial(x);
         break;
       case 'sum':
         result = sum();
    }
    $('#display').text(result);
  }
  function sum(){
    extract();
    var total = 0;

    $('#queue > div').each(function(index,div){
      var x = div.textContent * 1;
      total += x;
    });
    return total;
  }

  function factorial(x){
    var product = 1;

    for(var i = 2; i<= x; i++){
      product *= i;
    }
    return product;
  }

  function extract(){
    var x = $('#queue > div:nth-child(1)').text() * 1;
    var y = $('#queue > div:nth-child(2)').text() * 1;
    numArray[0]= x;
    numArray[1]=y;
    return numArray;
  }

  function push(){
    var displayText = $('#display').text();
    $('#display').text('0');
    var $div = $('<div>');
    $div.text(displayText);
    $('#queue').prepend($div);

  }

  function number(){
    var num = this.textContent;
    var displayText = $('#display').text();
    if(displayText === '0'){
      displayText = num;
    }else{
      displayText += num;
    }
    $('#display').text(displayText);
  }

  function clear(){
    var x = $('#display').text(0);
    if(x === 'C'){
      $('#display').text(0);
    }
    else{
      $('#queue').empty();
    }
  }

  function decimal(){
    var display = $('#display').text();
    var noDecimal = display.indexOf('.') === -1;

    if(noDecimal){
      $('#display').text(display + '.');
    }
  }

  function sign(){
    var display = $('#display').text();
    $('#display').text(display * -1);
  }
})();
//js max integer size9007199254740992
