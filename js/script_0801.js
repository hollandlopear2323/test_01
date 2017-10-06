(function($){

	function firstFunc(eo){
		var val = "red red red";
		console.log(val);
		return val;
	}
	
	function secondFunc(eo){
		console.log("ここの関数の直前に実行してretした値です＞＞＞　" + eo.result);
	}
	
	function preloadFunc() {
		/*
		for(var i = 0; i<arguments.length; i++){
			$("<img>").attr("src", arguments[i]);
			console.log("★★★ src=" + arguments[i]);
		}
		*/
		
		for(var j = 0; j<arguments[0].length; j++){
			$("<img>").attr("src", arguments[0][j]);
			console.log("★★★ src=" + arguments[0][j]);
		}
	}	

	$(function(){		
	
		$("#div_01").click(firstFunc);
		$("#div_01").click(secondFunc);

		// 親要素に伝承するのはstop可能。※子孫要素からのバブリングはstop不可。
		$("div").click(function (eo) {
			alert(this.id);
			eo.stopPropagation();
			
			// stopPropagationを使用しない場合はfalseで対応可
			// return false;
		});
		
		$("a#a_01").click(function (eo) {
			eo.preventDefault();

			// preventDefaultを使用しない場合はfalseで対応可
			// return false;
		});
		
		// 画像preload
		var arr = ["img/image.jpg", "img/image_02.jpg"]; 

		//preloadFunc("img/image.jpg", "img/image_02.jpg");
		preloadFunc( arr );
		
					
		$("#btn_01").click(function(){
			$("#div_02").css("background-image","url(img/image.jpg)");
		});		
		
	}); //------end $(function(){  });
	
	
})(jQuery);























