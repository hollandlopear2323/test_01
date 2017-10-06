$(function () {
	/*
	$("button").click(function(){
		var myArray = $("div").get();
		console.log(myArray);
		myArray.reverse();
		$(myArray).appendTo("body");
	});
	*/
	
	$("button").click(function(){
		var elm_0 = $("div").eq(3);
		console.log( elm_0.text() );
		//myArray.reverse();
		//$(myArray).appendTo("body");
	});

});

/*
function mapFunc(index, elem){
	return $(elem).find("span").get();
//	return $(elem).find("span");
};
		
$(function () {
	$("button").click(function(){
		$("div").map(mapFunc).css("background-color","#fcf");
	});
});
*/