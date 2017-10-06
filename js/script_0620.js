(function($){


	$(function(){
		$("button").click(function(){
			
			var myValue = $("select").val();
//			var myValue = $("select").val("04"); 存在しないvalueの場合はから選択状態になる
//			var myValue = $("select").val("02"); 存在する値の場合はその値のoptionが選択状態になる
			console.log(myValue);
		});


	}); //------end $(function(){  });
	
	
})(jQuery);























