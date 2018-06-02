//angular service:
eBase.app.service('Logs-HelperSvc', ['$http', function($http) {
	return {
		init: function() {
			//return an aray of values from an object array
			Array.prototype.grab = function(field) {
				var rvalue = [];

				this.each(function(el) {
					rvalue.push(el[field]);
				});

				return rvalue;
			};
		}
	}
}]);