import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Navbar from './components/navbar';
import PlantListItem from './components/plants/plantListItem';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      message: 'Click the button to load data!'
    }
  }

  fetchData = () => {
    axios.get('/api/data') // You can simply make your requests to "/api/whatever you want"
    .then((response) => {
      // handle success
      console.log(response.data) // The entire response from the Rails API

      console.log(response.data.message) // Just the message
      this.setState({
        message: response.data.message
      });
    })
  }


  render() {
    return (
      <div className="App" id="app">

        <Navbar/>

        <h1>{ this.state.message }</h1>
        <button onClick={this.fetchData} >
          Fetch Data
        </button>

        <br />

        <PlantListItem />

      </div>
    );
  }
}

export default App;
