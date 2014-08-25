define([], function () {
	function Cat() {}

	Cat.prototype = {
		runAway: function () {
			console.log("I'm running away!");
		}
	};

	return Cat;
});