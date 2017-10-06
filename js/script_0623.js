(function($){


		var classFunc = function(index, currentClass) {
			var addedClass;
			console.log("index===== " +index);
			if ( currentClass == "aqua" ) {
				addedClass = "green";
			}else{
				addedClass = "pink";
			}
			return addedClass;
		};

	$(function(){
		
		
		$(":input[type='text']").click(function(){
			$(":input[type='text']:focus").css("background-color","#FCC");
			$(":input[type='text']:not(':focus')").css("background-color","#FFF");
		});
		
		$("button").click(function(){
			$("div").addClass(classFunc);
		});



		
		
		
			
		

	}); //------end $(function(){  });
	
	
})(jQuery);























