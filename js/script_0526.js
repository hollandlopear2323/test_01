(function($){

	$(function(){
	
		//var val = $('#my-form [name=my-radio]:checked').val();
		//console.log(val);  // => "B"	
		var testClass01 = new TestClass01();
		testClass01.init_const();
	});
	
	/*-*-*-*-*-
	クラス
	*-*-*-*-*-*/
	var TestClass01 = function(){
	
	}
	
	TestClass01.prototype = {
		init: false,
		val_radio: "",
		val_chks: [],
		ary_value : [],
		ary_temp:[],
		val_text:"",
		val_textarea:"",
		val_Num:"",
		val_select:"",
		val_select_multi:[],
		
		init_const: function(){
			var self = this;
			self.setElemOnMeth();
		},
		
		setElemOnMeth: function(){

			var self = this;

			//ok→
			//$("body").on("click", "#my-form :radio[name=my-radio]", function(){
			$("body").on("click", "#my-form [name=my-radio]", function(){

				//self.val_radio =  $('#my-form [name=my-radio]').prop('checked');
				self.val_radio =  $('#my-form [name=my-radio]:checked').val();
				console.log("### radio ###  "+self.val_radio); 			
			});
			
			$("body").on("click", "#my-form [name=my-checkbox]", function(){
				var $checked = $('#my-form [name=my-checkbox]:checked');
				console.log("### $checked.length 配列？↓ " +$checked.length);
				console.log("### typeof $checked===Object   " +( typeof $checked===Object ) );
				console.log("### $checked.constructor ===>>>  " +($checked.constructor ) );
				console.log("### $checked instanceof Function ===   " +($checked instanceof Function) );
				console.log("### $checked instanceof Object ===   " +($checked instanceof Object) );

				self.ary_value = $checked.map(function(index, el) { 
					return $(this).val(); 
				});
				console.log("### self.ary_value  " +self.ary_value);  //jQueryでラップされた配列
				console.log("### self.ary_value.get()  " +self.ary_value.get() );  // 普通の配列
			});

			$("body").on("click", "#my-form [name=my-select]", function(){
				self.val_select = $('#my-form [name=my-select]').val();
				console.log("### self.val_select   >>>   "+self.val_select);
			});
			
			$("body").on("click", "#my-form [name=my-multi-select]", function(){
				self.val_select_multi =  $('#my-form [name=my-multi-select]').val();
				console.log("### self.val_select_multi   >>>   "+self.val_select_multi);
			});
			
			$("body").on("change", "#my-form [name=my-number]", function(){
				var valText = $('#my-form [name=my-number]').val();
				self.val_Num = Number(valText) || 0;  // NaNのとき0にする
				console.log("### self.val_Num   >>>   "+self.val_Num);  // => 123
			});
			
			//数値チェックしたいときはisNaNではなく、isFinite関数
			console.log("### isFinite(NaN)" + isFinite(NaN)); // false
			console.log("### isFinite(undefined)" +isFinite(undefined)) // false
			console.log("### isFinite('1aaaa')" +isFinite('1aaa')) // false
			console.log("### isFinite([54,12])" +isFinite([54, 12])) // false
			console.log("### isFinite({hoho : 12})" +isFinite({hoho : 12})) // false
			console.log("### isFinite(Infinity)" +isFinite(Infinity)); // false
			
			
		}
	}

})(jQuery)























