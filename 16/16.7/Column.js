function Column(id, name) {
	var self = this;
	this.id = id;
	this.name = name || 'No name given';
	this.element = generateTemplate('column-template', {
		name: this.name,
		id: this.id
	});

	this.element.querySelector('.column').addEventListener('click', function (event) {
		if (event.target.classList.contains('btn-delete')) {
			self.removeColumn(event.target);
		}
		if (event.target.classList.contains('add-card')) {
			let loader = createLoader(self.element)
			var cardName = prompt("Enter the name of the card");
			event.preventDefault();
			var data = new FormData();
			data.append('name', cardName);
			data.append('bootcamp_kanban_column_id', self.id);
			fetch(baseUrl + '/card', {
					method: 'POST',
					headers: myHeaders,
					body: data,
				})
				.then(function (resp) {
					if (resp.ok) {
						return resp.json()
					} else {
						throw new Error("Błąd połączenia")
					}
				})
				.then(function (resp) {
					var card = new Card(resp.id, cardName);
					self.addCard(card);
				}).catch((error) => {
					board.element.innerHTML = `<h3>Wystabił błąd: ${error}.
					<br> Proszę odświeżyć strone i spróbować ponownie.`
					console.log(error)
				}).finally(() => {
					removeLoader(loader)
				})
		}
	});
}

Column.prototype = {
	addCard: function (card) {
		this.element.querySelector('ul').appendChild(card.element);
	},
	removeColumn: function (btn) {
		btn.setAttribute('disabled', true)
		var self = this;
		document.querySelector('.loader')
		fetch(baseUrl + '/column/' + self.id, {
				method: 'DELETE',
				headers: myHeaders
			})
			.then(function (resp) {
				return resp.json();
			})
			.then(function (resp) {
				self.element.parentNode.removeChild(self.element);
			});
	}
};