const GIPHY_API_URL = 'https://api.giphy.com'
const GIPHY_PUB_KEY = '5ndrRik4Dkhv5izNrHgpdAmoOQOl9yVC'
App = React.createClass({
    getInitialState() {
        return {
            loading: false,
            searchingText: '',
            gif: {},
            searchStatus: true
        };
    },
    handleChange: function(event) {
        var searchingText = event.target.value;
        this.setState({
            searchingText: searchingText
        });
    },
    handleSearch: function(searchingText) {  
        this.setState({
          loading: true  
        });
        this.getGif(searchingText)
            .then(gif=>{
               this.setState({
                   loading: false,
                   gif,
                   searchingText,
                   searchStatus: true
               })
            }).catch(error=>{
                if(error.message === "No results"){
                    this.setState({
                        loading: false,
                        gif,
                        searchingText,
                        searchStatus: false
                    })
                }
                else{
                    throw new Error(error)
                }
            })
    },
    getGif: function(searchingText) {  
        return new Promise((resolve, reject)=>{
            var url = GIPHY_API_URL + '/v1/gifs/random?api_key=' + GIPHY_PUB_KEY + '&tag=' + searchingText;  
            var xhr = new XMLHttpRequest();  
            xhr.open('GET', url);
            xhr.onload = function() {
                if (xhr.status === 200) {
                    var data = JSON.parse(xhr.responseText).data; 
                    var gif = {  
                        url: data.fixed_width_downsampled_url,
                        sourceUrl: data.url
                    };
                    if(!gif.url || !gif.sourceUrl){
                        reject(new Error("No results"));
                        return;
                    }
                    resolve(gif)
                } else{
                    reject(new Error(xhr.statusText))
                }
            };
            xhr.send();
        })
    },
    render: function() {
        var styles = {
            margin: '0 auto',
            textAlign: 'center',
            width: '90%'
        };
        return (
          <div style={styles}>
                <h1>Wyszukiwarka GIFow!</h1>
                <p>Znajdź gifa na <a href='http://giphy.com'>giphy</a>. Naciskaj enter, aby pobrać kolejne gify.</p>
                <Search onSearch={this.handleSearch}/>
                {this.state.searchStatus? null : <h2>Sorry, no results. Try something diffrent.</h2>}
                <Gif
                    loading={this.state.loading}
                    url={this.state.gif.url}
                    sourceUrl={this.state.gif.sourceUrl}
                />
          </div>
        );
    }
});