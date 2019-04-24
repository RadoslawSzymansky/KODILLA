// https://cors-anywhere.herokuapp.com/
// https://crossorigin.me/
var boardLoader = createLoader(board.element)
var baseUrl = 'https://cors-anywhere.herokuapp.com/https://kodilla.com/pl/bootcamp-api';
var myHeaders = {
	'X-Client-Id': 4008,
	'X-Auth-Token': 'e52c72dcbfe4bffe6e46bfec4da76ce5'
};
fetch(baseUrl + '/board', {
		headers: myHeaders,
	})
	.then(function (resp) {
		if (resp.ok) {
			return resp.json()
		} else {
			throw new Error("Błąd połączenia")
		}
	})
	.then(function (resp) {
		setupColumns(resp.columns);
	}).catch(error => {
		board.element.innerHTML = `<h3>Wystabił błąd: ${error}.
		<br> Proszę odświeżyć strone i spróbować ponownie.`
	}).finally(() => {
		removeLoader(boardLoader)
	})

function setupColumns(columns) {
	columns.forEach(function (column) {
		var col = new Column(column.id, column.name);
		board.addColumn(col);
		setupCards(col, column.cards);
	});
}

function setupCards(col, cards) {
	cards.forEach(function (card) {
		var cardObj = new Card(card.id, card.name);
		col.addCard(cardObj);
	});
}

function generateTemplate(name, data, basicElement) {
	var template = document.getElementById(name).innerHTML;
	var element = document.createElement(basicElement || 'div');
	Mustache.parse(template);
	element.innerHTML = Mustache.render(template, data);
	return element;
}

function createLoader(parent) {
	let loader = document.createElement('div');
	loader.classList.add('loader');
	parent.appendChild(loader)
	return loader
}

function removeLoader(loader) {
	loader.parentNode.removeChild(loader)
}