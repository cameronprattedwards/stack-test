define([], function () {
	function Dog() {
		this.listeners = [];
	}

	Dog.prototype = {
		bark: function () {
			console.log("I'm barking");
			this.fire();
		},
		fire: function () {
			for (var i = 0; i < this.listeners.length; i++) {
				this.listeners[i]();
			}
		},
		addListener: function (callback) {
			this.listeners.push(callback);
		}
	};

	return Dog;
});