(function($){

	$(function(){

		$("button").click(function(){
			console.log("1111");
			$.getJSON("../data/simple.json", getFunc);
			console.log("4444");
		});		
		
	});
	
	function getFunc(myData){
			console.log("22222");
		$("div").text("私の名前は"+myData.name);
			console.log("3333");
	}

	
})(jQuery);























