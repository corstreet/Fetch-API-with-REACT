import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    }
  }

  componentDidMount() {
    console.log('Mounted!');
    //set url for the fetch (netflix roulette)
    let url = 'http://netflixroulette.net/api/api.php?director=Quentin%20Tarantino'; //tarantino movies currently on Netflix
    //call our fetch function and supply this url
    this.fetchAPI(url);
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React Netflix Fetcher!</h2>
        </div>
        <p className="App-intro">
        </p>

        {this.state.data.map((data) => 
            <div key={data.show_id}>
              <h1>{data.show_title}</h1>
              <img src={data.poster} alt={data.summary} />
              <div>Runtime: {data.runtime}</div>
              <p>{data.summary}</p>
            </div>
        )}
      </div>
    );
  }

  fetchAPI(url) {
    //fetch data, convert to json
    fetch(url).then((resp) => resp.json()).then((data) => {
      console.log(data);
      //replace state
      this.setState({
        data: data
      })
    })
  }
}

export default App;
