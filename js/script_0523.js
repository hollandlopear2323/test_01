(function($){

	/*
	$(function(){
		alert("jQueryファイルー");
	});
	*/

	
	/*
	$(window).on('load',function(){	console.log('jq_on_load1');	 });
	
	window.onload = function(){	console.log('js_onload1'); }
	
	$(function(){	console.log('jq_ready1'); });
	
	document.addEventListener('DOMContentLoaded', function(){	console.log('js_ready1');}, false);
	
	$(window).load(function(){	console.log('jq_load1'); });
	
	$(window).load(function(){	console.log('jq_load2'); });
	
	$(window).on('load',function(){	console.log('jq_on_load2'); });
	
	window.onload = function(){	console.log('js_onload2'); }
	
	$(function(){	console.log('jq_ready2'); });
	
	document.addEventListener('DOMContentLoaded', function(){	console.log('js_ready2'); }, false);
	*/
	$(function(){
	
		$("#type1").on("click", function () {
			if ($("#type1").attr('checked')) {
				$("#next").attr("href", "#type_1");
			} else {
				$("#next").attr("href", "#default");
			}
		});
	
	});
	
	
	function test(){
		var cnt = 0;
		var li = document.getElementsByTagName('li');
		for (var i in li) {
			cnt++;
			console.log("iは？　"+i);	
		}
		console.log("liの個数は？　"+cnt);
	}
	test();	
	

})(jQuery)


