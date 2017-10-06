(function($){
 
	
	$(function(){		
		
		$("#input_01").on("focus", function(eo, dispTxt){
			$(this).val(dispTxt);
		});
		
		$("#btn_01").click(function(){
			$("#input_01").triggerHandler("focus", ["トリガーハンドラー"]);	
		});
		
		$("#input_02").on("focus", function(eo, dispTxt_01, dispTxt_02){
			$(this).val(dispTxt_01 + "　と　" + dispTxt_02);
		});
		
		$("#btn_02").click(function(){
			$("#input_02").triggerHandler("focus", ["①トリガー", "②ハンドラー"]);	
		});		
		

		$("#input_03").on("focus", function(eo){
			$(this).val("フォーカスされたよ");
		});
		
		$("#btn_03").click(function(){
			$("#input_03").trigger("focus");	
		});		

		
				$("#input_04").on("focus", function(eo, aaa){
					$(this).val(aaa);
				});
				
				$("#btn_04").click(function(){
					$("#input_04").trigger("focus",["トリガ−"]);	
				});
				
		
	}); //------end $(function(){  });
	
	
})(jQuery);























