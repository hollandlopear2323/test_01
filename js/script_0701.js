	var myObj = "";
	function wrapFunc(index){
		switch (index){
			case 0:return "<div class='green' />";
			case 1:return "<div class='yellow' />";
			case 2:return "<div class='blue' />";
		}
	}	


	function mapFunc(index, elem){
		return $(elem).css("height");
	}


(function($){


	$(function(){		
	
		$("#btn_01").click(function(){
			var test = $("#div_01").css(["width", "height", "backgroundPosition", "backgroundImg", "backgroundRepeat"]);
			alert(test.width+"\n "+test.height+"\n "+test.backgroundPosition+"\n "+test.backgroundImg+"\n "+test.backgroundRepeat+"\n ");
		});	

		$("#btn_02").click(function(){
			var ans = $("[id*='div_02']").map(mapFunc).get();
			alert(ans);
		});

	}); //------end $(function(){  });
	
	
})(jQuery);























