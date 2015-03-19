'use-strict';
$(function(){

  var calculator = new Calculator();

});

// your code here!
function Calculator(){
	this.onCheck();
}

Calculator.prototype.calculate = function(num1, operator, num2){
	var result = eval(num1 + operator + num2);
	$('#result').html(result);
};

Calculator.prototype.onCheck = function(){
	var instance = this;
	$('#equals').click(function(){
		var first_number = $('#number1').val();
		var operator = $("#operation").val();
		var second_number = $('#number2').val();
		instance.valid(first_number, operator, second_number);
		
	});
};

Calculator.prototype.valid = function(first_number, operator, second_number){
	if (isNaN(parseFloat(first_number)) || isNaN(parseFloat(second_number))){
		$('#result').html("Sorry, one of those is not a valid number!");
	} else if (operator!=="+" && operator!=="-" && operator!=="*" && operator!=="/"){
		$('#result').html("Sorry, not a valid operation!");
	} else {
		this.calculate(first_number, operator, second_number);
	}

};