(function($){


	$(function(){
		
		$("button#test01").click(function(){
			$("li:only-child").css("background-color","#F00");
			var $li_only_child=$("li:only-child[class]");
			console.log("length ===== "+$li_only_child.length);
			console.log("class ===== "+$li_only_child.eq(0).attr("class"));
			console.log("class ===== "+$li_only_child.eq(1).attr("class"));      
		});
		
		$("button#test02").click(function(){
//			$("li:nth-child(even)").css("background-color","#FCC");
			$(".ul_01 li:nth-child(even)").css("background-color","#FCC");
//			console.log("length ===== "+$li_only_child.length);
		});
		

		$("button#test03").click(function(){
			$("p:nth-child(3)").css("background-color","#FCC");
		});
			
		$("button#test04").click(function(){
			$(":hidden").show();
		});
		

	}); //------end $(function(){  });
	
	
})(jQuery);























