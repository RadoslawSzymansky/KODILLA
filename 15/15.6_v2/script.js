document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.btn-add-table').addEventListener('click', function () {
        var name = prompt('Enter a board name');
        var board = new Board(name);
        document.body.appendChild(board.element);
    });
    // boards class
    var Board = function (name) {
        this.name = name;
        this.element = generateTemplate('board-template', {
            name: this.name
        });
        this.element.addEventListener('click', () => {
            if (event.target.classList.contains('create-column')) {
                this.addColumn()
            }
            if (event.target.classList.contains('btn-delete-table')) {
                this.deleteBoard()
            };
        })
    }
    Board.prototype.addColumn = function () {
        var name = prompt('Enter a column name');
        var column = new Column(name)
        container = this.element.querySelector('.column-container');
        container.appendChild(column.element);
        initSortable(column.id);
    }
    Board.prototype.deleteBoard = function () {
        this.element.parentNode.removeChild(this.element);
    }
    /// column class
    class Column {
        constructor(name) {
            this.name = name;
            this.id = randomString();
            this.element = this.element = generateTemplate('column-template', {
                name: this.name,
                id: this.id
            });
            this.element.addEventListener('click', () => {
                if (event.target.classList.contains('add-card')) {
                    this.addCard();
                }
                if (event.target.classList.contains('btn-delete')) {
                    this.deleteColumn();
                };
            })
        }
        deleteColumn = () => {
            this.element.parentNode.removeChild(this.element);
        }
        addCard = () => {
            var name = prompt('Enter a card name');
            var card = new Card(name);
            this.element.querySelector('ul').appendChild(card.element);
        }
    }
    // card Class 
    class Card {
        constructor(desc) {
            this.id = randomString();
            this.description = desc;
            this.element = generateTemplate('card-template', {
                description: this.description
            }, 'li');
            this.element.querySelector('.card').addEventListener('click', (e) => {
                if (event.target.classList.contains('btn-delete')) {
                    e.stopPropagation();
                    this.removeCard();
                }
            });
        };
        removeCard = () => {
            this.element.parentNode.removeChild(this.element);
        }
    }
    // other fn-s
    function randomString() {
        var chars = '0123456789abcdefghiklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXTZ';
        var str = '';
        for (var i = 0; i < 10; i++) {
            str += chars[Math.floor(Math.random() * chars.length)];
        }
        return str;
    };

    function initSortable(id) {
        var el = document.getElementById(id);
        var sortable = Sortable.create(el, {
            group: 'kanban',
            sort: true
        });
    }

    function generateTemplate(name, data, basicElement) {
        var template = document.getElementById(name).innerHTML;
        var element = document.createElement(basicElement || 'div');
        Mustache.parse(template);
        element.innerHTML = Mustache.render(template, data);
        return element;
    }
});