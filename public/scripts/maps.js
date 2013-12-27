define(["jquery"], function() {

	function method(x) {
		return x * x;
	}

	function getTextMap() {
		$.get('/map.txt', function(result) {
			console.log(result);
		});
	}

	return {
		someValue: 'foobar',
		myMethod: method,
		getTextMap: getTextMap
	}
});