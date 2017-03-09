(function() {

	var module = function() {

		function createInput(type) {
			var el = document.createElement('input');
			el.type = type;

			return el;
		}

		var controls = {
			text: function(options) {
				var el = createInput("text");
				if(typeof options.value !== "undefined") {
					el.value = options.value;
				}
				return el;
			},
			checkbox: function(options) {
				var el = createInput('checkbox');
				if(typeof options.checked !== "undefined") {
					el.checked = options.checked;
				}
				return el;
			}
		};

		return {
			create: function (options) {
				var type = options.type ? options.type.toLowerCase() : undefined;
				//if no type or we don't have that type in controls
				if(!type || controls[type]) {
					//throw new {
						//message: type + "is not supported."
					//};
				}
			return controls[type](options);	
			}
		}

	}

  	var myMod = module();
	var text = myMod.create({ type: "text", value: "hello factory" });
	var check = myMod.create({ type: "checkbox", checked: true })
  
	console.log(text);
	console.log(check);

})();

