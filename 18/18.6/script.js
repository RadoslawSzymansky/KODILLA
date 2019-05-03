var Counter = React.createClass({
    getInitialState: function() {
        console.log('Inicjalizacja state')
        return {
            counter: 0
        };
    },
    increment: function() {
        this.setState({
            counter: this.state.counter + 1
        });
    }, 
    decrement: function() {
        this.setState({
            counter: this.state.counter - 1
        });
    },
    getDefaultProps(){
        const name = 'Radek'
        console.log('wczytywanie domyslnych propsow np name:' + name)
        return{
            name
        }
    },
    componentWillMount(){
        console.log('ComponentWillMount nie zaleca sie juz jej uzywac',)
    }, 
    componentDidMount(){
        console.log('ComponentDidMount , moge pobrac dane',)
    },
    componentWillReceiveProps(){
        console.log('ComponentWillReceiveProps, jak dojda nowe propsy',)
    },
    shouldComponentUpdate(){
        console.log('Sprawdzam czy cos sie zmienilo. musze zwrocic true lub false',)
        return true
    },  
    componentWillUnmount(){
        console.log('Komponent zostanie usuniety, moge usunac np setintertval',)
    },
    render: function() {
        console.log('render, musze zwrocic jeden element react')
        return React.createElement('div', {},
        React.createElement('button', {onClick: this.increment}, 'Odejmij'),
        React.createElement('button', {onClick: this.decrement}, 'Dodaj'),
        React.createElement('span', {}, 'Licznik ' + this.state.counter),
        this.props.counter? this.props.counter: null
        );
    }
});


var element2 = React.createElement(Counter);
var element = React.createElement(Counter,{counter: element2});
ReactDOM.render(element, document.getElementById('app'));