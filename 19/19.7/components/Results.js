const Results = (props) =>{
    const {format, list} = props;
    const items = list.map(item=><li key={ID()}>{format(item)}</li>)
    return (
        <ul className="results">{items}</ul>
    )
}
var ID = function () {
    return '_' + Math.random().toString(36).substr(2, 9);
};