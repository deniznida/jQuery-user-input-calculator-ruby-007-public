'use-strict';
describe('Calculator', function() {
  
  beforeEach(function(){
    setFixtures('<body><h1>User Input Calculator</h1><div><label for="number1">Number 1</label><input type="text" id="number1"></div><div><label for="operation">Operation</label><input type="text" id="operation"></div><div><label for="number2">Number 2</label><input type="text" id="number2"></div><div><label>Result</label><button id="equals">=</button><h2 id="result">0</h2></div></body>');
    var calculator = new Calculator();
  });

});