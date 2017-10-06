(function($){

	function selectFunc(eo) {
		$("p").append("select ");
	}
	

	$(function(){		
	
		$("form").focusin(function(eo) {
			$("span").text(eo.target.id);
		});
		
		$("form").select(selectFunc);

	}); //------end $(function(){  });
	
	
})(jQuery);























