(function($){
 
	function checkFunc_01(eo){
	//	alert(eo.type);
		console.log( "eo.type  " + eo.type);
	}	

	function checkFunc_02(eo){
	//	alert(eo.data.test);
		console.log( "eo.data.test " + eo.data.test);
	}
	
	function clickFunc_03(eo){
//		alert("my name is " + eo.data.myName)
		console.log( "my name is  " + eo.data.myName);
	}

	
	$(function(){		
		
		$("#div_01").on("click", function (eo){
			//alert(eo.test);
			console.log( "eo.test  " + eo.test);
		});
		
		$("#btn_01").click(function(){
			var eo = $.Event("click", {test:10});
			//eo.stopPropagation(); イベントをstopしたいとき
			$("#div_01").trigger(eo); 
		});
		
		$("body").on("click mouseenter mouseleave", "#div_01", checkFunc_01);
				
		$(function () {
			$("body").on("click", "#div_02", {test:10}, checkFunc_02);
		});		

		$("#main").on("click", ".box", {myName:"John"}, clickFunc_03);
		$("#sub").on("click", ".box", {myName:"Bob"}, clickFunc_03);

		$("#div_03").click(function (eo){
			$("#div_03").text(eo.pageX);
		});

		$("#div_04").click(function (eo){
			$("#div_04").text(eo.timeStamp);
		});

	}); //------end $(function(){  });
	
	
})(jQuery);























