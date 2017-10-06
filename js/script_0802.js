(function($){


	function aaaFunc(eo){
		alert("aaa");
		
		// bbbFuncの前に必要
		eo.stopImmediatePropagation();
	}

	function bbbFunc(eo){
		alert("bbb");
		//eo.stopImmediatePropagation();
	}


	$(function(){		

		$("#blue_01").click(function(eo){
			$(eo.target).addClass("test");
			console.log("jqueryオブジェクトに変換 $(eo.target)" + $(eo.target));
			console.log("jqueryオブジェクトに変換 $(eo.currentTarget)" + $(eo.currentTarget));
			console.log("eo.target.id　　" + eo.target.id);
			console.log("eo.target.alt　　" + eo.target.alt);
		});	
		

		$(".div_002").click(function(eo){
			$(eo.currentTarget).addClass("test");
			console.log("jqueryオブジェクトに変換 $(eo.target)" + $(eo.target));
			console.log("jqueryオブジェクトに変換 $(eo.currentTarget)" + $(eo.currentTarget));
			console.log("eo.target.id　　" + eo.target.id);
			console.log("eo.target.alt　　" + eo.target.alt);
		});	
		
		//
		$("body").on("click", "#blue_01", function(eo){
			console.log("範囲：body　" + eo.delegateTarget.id);
		});

		$("#blue_02").on("click", "#red_02", function(eo){
			console.log("範囲: #blue_02　"+eo.delegateTarget.id);
			
		});
				
		$("#blue_02").mouseover(function(eo){
			//alert(eo.relatedTarget.id);
			console.log(eo.relatedTarget.id);
			eo.stopPropagation();
		});

		$("#blue_02").mouseout(function(eo){
			//alert(eo.relatedTarget.id);
			console.log(eo.relatedTarget.id);
			eo.stopPropagation();
		});
		
		$("body").on("click", "#blue_01", function(eo){
			//alert(eo.target.id);
			console.log("onメソッドでstopPropagationする。【可】 " + eo.target.id);
			eo.stopPropagation();
		});		
						
//		$("#blue_03").click(aaaFunc);
		$("#blue_03").click(function(eo){
			aaaFunc(eo);
			console.log("stopImmediatePropagation実行済？>>>>　" + eo.isImmediatePropagationStopped());
		});
		$("#blue_03").click(bbbFunc);
		
		
		$("#green_04").bind("myClick", function(eo) {
//			alert("bbb");
			console.log("bbb: bind 'myClick'");
			eo.preventDefault();
		});	

		$(".div_004").click(function(eo) {
			var customEO = jQuery.Event("myClick");
			$(this).trigger(customEO);
			if(!customEO.isDefaultPrevented()) {
//			alert("aaa");
				console.log("aaa: isDefaultPrevented()?>>>> " + customEO.isDefaultPrevented());
			}
		});		
		
		
	}); //------end $(function(){  });
	
	
})(jQuery);























