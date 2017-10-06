(function($){

	function clickFunc(eo){
		alert("my name is " + eo.data.myName);
	}
	
	$(function(){		
		
/*
		$("button").click(function(){
			$("<div />").appendTo("body");
		});
		
		$("body").on("click", "div", function(eo){
			alert("div click");
		});
*/		
//		$("button").click(function(){
		$("#btn_01").click(function(){
			$("<div class='div_01'></div><div class='div_01'></div><div class='div_01'></div>").appendTo("body");
		});
		
		$("body").on("click", ".div_01", function(eo){
			alert("div click");
		});
		
		$("#main").on("click", ".box", {myName: "casie"}, clickFunc);
		$("#sub").on("click", ".box", {myName: "tinashe"}, clickFunc);
		



			var eventObj = new Object();
			
			eventObj.click = function(eo){
				$(this).text(eo.data.cl);
			};
			
			eventObj.mouseenter = function(eo){
				$(this).text(eo.data.me);
			};
			
			eventObj.mouseleave = function(eo){
				$(this).text(eo.data.ml);
			};
			
			$(function () {
				var testObj = {cl:"click", me:"enter", ml:"leave"};
				$("#main_02").on(eventObj, ".box_02", testObj);
			});		
		
		
	}); //------end $(function(){  });
	
	
})(jQuery);























