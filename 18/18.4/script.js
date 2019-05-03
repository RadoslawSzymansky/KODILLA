var moviesJSON = [{
        id: 1,
        title: 'Harry Potter',
        desc: 'film o czarodzieju',
        src: "./img/harry.jpeg"
    },
    {
        id: 2,
        title: 'Król Lew',
        desc: 'Film o królu sawanny',
        src: "./img/content.jpeg"
    }, {
        id: 3,
        title: 'Wiedzmin',
        desc: 'Film o wiedzminie',
        src: "./img/witcher.jpg"
    }, {
        id: 4,
        title: 'Król Lew',
        desc: 'Film o królu sawanny',
        src: "./img/zadrzwiami.jpg"
    },
];
var Movie = React.createClass({
    propTypes: {
        title: React.PropTypes.string.isRequired,
        desc: React.PropTypes.string.isRequired,
        src: React.PropTypes.string.isRequired,
    },
    render: function () {
        return (
            React.createElement('li', {},
                React.createElement(MovieTitle, {
                    title: this.props.title
                }),
                React.createElement(MovieDescription, {
                    desc: this.props.desc
                }),
                React.createElement(MovieImg, {
                    src: this.props.src
                })
            )
        )
    },
});
var MovieImg = React.createClass({
    propTypes: {
        src: React.PropTypes.string.isRequired,
    },
    render: function () {
        return (
            React.createElement('img', {
                    src: this.props.src
                },

            )
        )
    },
});
var MovieDescription = React.createClass({
    propTypes: {
        desc: React.PropTypes.string.isRequired,
    },
    render: function () {
        return (
            React.createElement('p', {},
                this.props.desc
            )
        )
    },
});
var MovieTitle = React.createClass({
    propTypes: {
        title: React.PropTypes.string.isRequired,
    },
    render: function () {
        return (
            React.createElement('div', {}, this.props.title)
        )
    },
});
var MoviesList = React.createClass({
    propTypes: {
        movies: React.PropTypes.array.isRequired,
    },
    render: function () {
        const movies = this.props.movies.map(movie => {
             return React.createElement(Movie, {key: movie.id,title: movie.title,desc: movie.desc,src: movie.src})
        })
        return (
            React.createElement('ul', {className: "main"},movies)
        )
    },
});

var moviesList = React.createElement(MoviesList, {
    movies: moviesJSON
});



ReactDOM.render(moviesList, document.getElementById('app'));