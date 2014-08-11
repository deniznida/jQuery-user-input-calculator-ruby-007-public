$(function(){

  var number1       = 0,
      number2       = 0,
      operation     = '+',
      result        = 0,
      $number1      = $('#number1'),
      $n1IncrButton = $number1.find('.incr'),
      $n1DecrButton = $number1.find('.decr'),
      $n1Report     = $number1.find('.number'),
      $number2      = $('#number2'),
      $n2IncrButton = $number2.find('.incr'),
      $n2DecrButton = $number2.find('.decr'),
      $n2Report     = $number2.find('.number'),
      $addButton    = $('#add'),
      $subButton    = $('#sub'),
      $multButton   = $('#mult'),
      $divButton    = $('#div'),
      $opReport     = $('#operation'),
      $equalsButton = $('#equals'),
      $result       = $('#result');

  $n1IncrButton.click(function(){
    number1 += 1;
    $n1Report.text(number1);
  });

  $n1DecrButton.click(function(){
    if (number1 > 0) {
      number1 -= 1;
      $n1Report.text(number1);
    }
  });

  $n2IncrButton.click(function(){
    number2 += 1;
    $n2Report.text(number2);
  });

  $n2DecrButton.click(function(){
    if (number2 > 0) {
      number2 -= 1;
      $n2Report.text(number2);
    }
  });

  $addButton.click(function(){
    operation = '+';
    $opReport.text(operation);
  });

  $subButton.click(function(){
    operation = '-';
    $opReport.text(operation);
  });

  $multButton.click(function(){
    operation = '*';
    $opReport.text(operation);
  });

  $divButton.click(function(){
    operation = '/';
    $opReport.text(operation);
  });

  $equalsButton.click(function(){
    switch(operation) {
      case '+': result = number1 + number2; $result.text(result); break;
      case '-': result = number1 - number2; $result.text(result); break;
      case '*': result = number1 * number2; $result.text(result); break;
      case '/': result = number1 / number2; $result.text(result); break;
      default : result = NaN; $result.text(result);
    }
  });
});