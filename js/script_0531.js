(function($){

	$(function(){
	
		$.get("test.txt", function(myData){
			testHTML = myData;
		})

		$("button").click(function(){
			
			var myHTML = $(testHTML);
			
			var myHTML_parse = $.parseHTML(testHTML, true);
			$("div").append(myHTML_parse);

			console.log(myHTML_parse.length);
			console.log("$.type(myHTML_parse)　" + $.type(myHTML_parse));
			console.log("$.type(true)　" + $.type(true));
			console.log("$.type(123)　" + $.type(123));
			console.log("$.type(\"asd\")　" + $.type("asd"));
			var obj_test={};
			console.log("$.type(obj_test)　" + $.type(obj_test));
			
		});
	
	});
	
	/*-*-*-*-*-
	クラス
	*-*-*-*-*-*/
	/*
	var TestClass01 = function(){
	
	}
	
	TestClass01.prototype = {

	};
	*/
	
})(jQuery);























