(function($){
 
	
	$(function(){		
		
		$("body").on("click", "div", function(eo){
			alert("off");
			$(this).off(eo);
		});
		
		$("body").on("click", "div", function(eo){
			alert("aaa");
		});
				
		$("body").on("click", "a#test_a_01", false);

		$("#button_01").click(function(){
			$("body").off("click", "a#test_a_01", false);
		});
		
		
		//$("body").on("click", "a#test_a_02", false); //※① セレクタ引数合わせる
		$("body").on("click", "#test_a_02", false);//※① セレクタ引数合わせる
		
		$("body").on("click", "#test_a_02", function(){
			$(this).append("クリックされたよ ");
		});

		
		
		$("#button_02").click(function(){
			//$("body").off("click", "a#test_a_02", false);//※① セレクタ引数合わせる
			$("body").off("click", "#test_a_02", false);//※① セレクタ引数合わせる
		});
		
	}); //------end $(function(){  });
	
	
})(jQuery);























