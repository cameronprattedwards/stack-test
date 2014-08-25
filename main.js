requirejs.config({
	paths: {
		"Cat": "js/Cat",
		"Dog": "js/Dog"
	}
});

require(["Cat", "Dog"], function (Cat, Dog) {
	var cat = new Cat();
	var dog = new Dog();

	dog.addListener(function () { cat.runAway(); });

	dog.bark();
});