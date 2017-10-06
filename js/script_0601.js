(function($){

	$(function(){
	

		$("button").click(function(){
			
			$.get("../data/simple.txt #" + this.id, loadFunc);

		});
		
		/*
		$("button").click(function(){
			$("div").load("test.txt #" + this.id);
		});
		*/
	
	});
	
	function loadFunc(myData, myStatus){
		$("div").html(myData);
		$("body").append("myStatus = " + myStatus);
			console.log("myData >>> 引数に渡されるデータは#testだけでなく全部\n" + myData );
	}
	
	
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























