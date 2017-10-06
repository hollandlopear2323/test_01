(function($){

	$(function(){
	

		$("button#btn_json").click(function(){
			// utf-8。あとjsonファイルにコメント入れるとアボートされる
			$.getJSON("../data/simple.json",getFunc_json);

		});

		$("button#btn_xml").click(function(){
			$.get("../data/simple.xml", getFunc_xml);
		});
		
		$("button#btn_script").click(function(){
			$.getScript("../data/simple.js", getFunc_script);
		});


	});
	
	function getFunc_json(myData, myStatus){
		// $("div#div_json").text("私の名前は"+myData.name);
		$("div#div_json").html("私の名前は"+myData[2].name +"<br />私の年齢は" +myData[2].age);
	}
	
	function getFunc_xml(myData, myStatus){
		// $関数：myDataをjQueryオブジェクトに変換
		var myName = $(myData).find("name").text();
		$("div#div_btn_xml").text(myName);
	};

	function getFunc_script(myData, myStatus){
		$("div#div_script").text(myData);
		$("body").append("myStatus = " +myStatus);
	};

　	
})(jQuery);























