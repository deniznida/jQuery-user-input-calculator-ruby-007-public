'use-strict';
describe('Calculator', function() {
  
  beforeEach(function(){
    setFixtures('<body><h1>User Input Calculator</h1><div><label for="number1">Number 1</label><input type="text" id="number1"></div><div><label for="operation">Operation</label><input type="text" id="operation"></div><div><label for="number2">Number 2</label><input type="text" id="number2"></div><div><label>Result</label><button id="equals">=</button><h2 id="result">0</h2></div></body>');
    var calculator = new Calculator();
  });

  describe('validating inputs', function() {
    describe('validates numbers', function() {
      it('should validate the first numerical input and display an error if they are not a number', function() {
        $('#number1').val('taco');
        $('#operation').val('+');
        $('#number2').val(4);
        $('#equals').click();
        expect($('#result').text()).toBe('Sorry, one of those is not a valid number!');
      });
      it('should validate the second numerical input and display an error if they are not a number', function() {
        $('#number1').val(3);
        $('#operation').val('+');
        $('#number2').val('flibber flabber');
        $('#equals').click();
        expect($('#result').text()).toBe('Sorry, one of those is not a valid number!');
      });
    });
    describe('validates operators', function() {
      it('should validate that a +, -, /, or * was used', function() {
        $('#number1').val(3);
        $('#operation').val('marshmallow');
        $('#number2').val(5);
        $('#equals').click();
        expect($('#result').text()).toBe('Sorry, not a valid operation!');
      });
      it('should validate that only one +, -, /, or * was used', function() {
        $('#number1').val(3);
        $('#operation').val('++');
        $('#number2').val(5);
        $('#equals').click();
        expect($('#result').text()).toBe('Sorry, not a valid operation!');
      });
    });
  });
  describe('Does math', function() {
    it('should be able to add', function() {
      $('#number1').val(3);
      $('#operation').val('+');
      $('#number2').val(5);
      $('#equals').click();
      expect($('#result').text()).toBe('8');
    });
    it('should be able to subtract', function() {
      $('#number1').val(3);
      $('#operation').val('-');
      $('#number2').val(5);
      $('#equals').click();
      expect($('#result').text()).toBe('-2');
    });
    it('should be able to divide', function() {
      $('#number1').val(15);
      $('#operation').val('/');
      $('#number2').val(5);
      $('#equals').click();
      expect($('#result').text()).toBe('3');
    });
    it('should be able to multiply', function() {
      $('#number1').val(3);
      $('#operation').val('*');
      $('#number2').val(5);
      $('#equals').click();
      expect($('#result').text()).toBe('15');
    });
  });
});