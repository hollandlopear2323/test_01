(function($){


	$(function(){
	
//		$.ajaxSetup({context:document.body});	// ※要素はDOMの形式
		$.ajaxSetup({
			context: document.body,
			statusCode:{
				404:function(){ $("div").text("not found"); }
			}
		});		

		$("button").click(function(){
			$.get("../data/simple.txt", function(data){
				$(this).css("background-color", "#FCF");
				$('#div_01').html(data);
			});
		});


		$.ajaxPrefilter(prefFunc); // これを外すと、jqueryのlibソースが表示される

		$("#btn_get").click(function(){
			$.get("http://codeorigin.jquery.com/jquery-1.10.2.min.js", function (myData, myStatus){
				$("#div_02").html(myData);
				$("body").append("myStatus = " + myStatus);
			});
		});


		/*
		var myDefer = $.Deferred();
		$("#btn_defer").click(function(){
			myDefer.resolve();
		});
		
		setTimeout(function(){
			myDefer.reject();
		},3000);

		//setTimeout( myDefer.reject(), 3000);
		
		
		myDefer.done(function(){
			alert("DONE!");	
		});
		myDefer.fail(function(){
			alert("FAIL!");	
		});
		*/
		
		
		
		/*上記のmyDeferをカプセル化すると以下。*/
		var myPromise = dfdMaster();
		
		myPromise.done(function(){
			alert("DONE!");
		});
		myPromise.fail(function(){
			alert("FAIL!");
		});
		$(document).click(function(){
			//myDeferはカプセル化されてるので、操作されない。
			myDefer.resolve();
		});


	}); //------end $(function(){  });
	


	function prefFunc(options,originalOptions,jqXHR){
		if (options.crossDomain) {
			options.crossDomain = false;
			options.url="../data/simple.txt";
		}				
	}
	
	function dfdMaster(){
		var myDefer = $.Deferred();
		$("#btn_defer").click(function(){
			myDefer.resolve();
		});
		setTimeout(function(){
			myDefer.reject();
		},  3000);
		return myDefer.promise();
	}



})(jQuery);























