$(function() {
	
	var url = 'http://api.icndb.com/jokes/random',
		button = document.getElementById('get-joke'),
		list = document.getElementById('list');
		
	
	function getJoke() {
		var xhr = new XMLHttpRequest(),
			listElement = document.querySelector('#list li');
		
		xhr.open('GET', url);
		xhr.addEventListener('load', function() {
			var response = JSON.parse(xhr.response),
				joke = document.createElement('li');
			joke.classList.add('list-group-item')
			joke.innerHTML = response.value.joke;
			list.insertBefore(joke, listElement);
			
		});
		xhr.send();
	}
	
	getJoke();
	
	button.addEventListener('click', function() {
		getJoke();
	});
	
});