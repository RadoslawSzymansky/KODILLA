class App extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            running: false,
            list: [],
            times: {
                minutes: 0,
                seconds: 0,
                miliseconds: 0
            }
        }
    }
    resetList = () => {
        this.setState({
            list: []
        })
    }
    createLi(time){
        const li  = document.createElement('li')
        li.textContent = this.format(time)
        return li
    }
    resetClock = () => {
        this.setState({
            times: {
                minutes: 0,
                seconds: 0,
                miliseconds: 0
            }
        })
    }
    addTimeToList = () => {
        const newTime = Object.assign({}, this.state.times)
        const list = [...this.state.list, newTime]
        this.setState({
            list
        })
    }
    
    format= times => {
        return `${this.pad0(times.minutes)} : ${this.pad0(times.seconds)} : ${this.pad0(Math.floor(times.miliseconds))}`;
    }
    start= () => {
        if (!this.state.running) {
            this.setState({
                running: true
            })
            this.watch = setInterval(() => this.step(), 10);
        }
    }
    step() {
        if (!this.state.running) return;
        this.calculate();
    }
    calculate() {
        const times = this.state.times;
        times.miliseconds += 1;
        if (times.miliseconds >= 100) {
            times.seconds += 1;
            times.miliseconds = 0;
        }
        if (times.seconds >= 60) {
            times.minutes += 1;
            times.seconds = 0;
        }
        this.setState({
            times
        })
       
    }
    stop= () => {
        this.setState({
            running: false
        })
        clearInterval(this.watch);
    }
    pad0(value) {
        let result = value.toString();
        if (result.length < 2) {
            result = '0' + result;
        }
        return result;
    }
    render(){
        return(
            <div>
                <div className="wrapper">
                    <nav className="controls">
                        <a href="#" onClick={this.start} className="button" id="start">Start</a>
                        <a href="#" onClick={this.stop} className="button" id="stop">Stop</a>
                        <a href="#" onClick={this.resetClock} className="button" id="reset">Reset</a>
                        <a href="#" onClick={this.addTimeToList} className="button" id="add">Add to list</a>
                        <a href="#" onClick={this.resetList} className="button" id="resetList">Reset List</a>
                    </nav>
                    <div className="stopwatch">{this.format(this.state.times)}</div>
                </div>
                <Results list={this.state.list} format={this.format}/>
            </div>
        )
    }
}