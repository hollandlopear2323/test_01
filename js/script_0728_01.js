(function($){
 
	
	$(function(){		
		
		//こっち×多分むかしのライブラリで動いてた？
		$("#input_01").on("focus", function(eo, aaa){
			$(this).val(aaa);
		});
		
		$("#btn_01").click(function(){
			$("#input_01").trigger("focus",["トリガ−"]);	
		});
		
		
		//こっちは動く
    $(document).on('focus', '#input_02', function(event, p1, p2){
        console.log(arguments);
        console.log(p1);
        console.log(p2);
				$(this).val(p1 + "　と　" + p2);
    });
    $(document).on('click', '#btn_02', function(){
        $('#input_02').trigger('focus', ["①トリガー", "②とりがあ"]);
    });
    $(document).on('click', '#btn_03', function(){
        $('#input_03').trigger('focus', ["①①トリガー", "②②とりがあ"]);
    });
		
		
		$("p").click( function (event, a, b) {
			// 普通にp要素がクリックされた場合、aとbには何も渡されないのでundefinedになります。
			// 以下の例にあるようにtriggerを用いて引数で渡すと、aには"foo"、bには"bar"が入ってきます。
			console.log("a: "+a+"  b:"+b);
		} ).trigger("click", ["foo", "bar"]);
	
	
    $(document).on('click', '#button', function(event, p1, p2){
        console.log(arguments);
        console.log(p1);
        console.log(p2);
    });
    $(document).on('focus', '#input_05', function(event, p11, p22){
        $(this).val(p11+" と　"+p22);
    });
    $(document).on('click', '#button1', function(){
        //$('#button').trigger('click', [$(this).text()]);
        $('#input_05').trigger('focus', ['ｑｑｑ', 'ｑｑ']);
    });
    $(document).on('click', '#button2', function(){
        $('#button').trigger('click', [$(this).text(), 'ほげほげ']);
    });
		
	}); //------end $(function(){  });
	
	
})(jQuery);























