import React, { Component } from 'react';
import './App.css';
import { getUrls, postUrls } from '../../apiCalls';
import UrlContainer from '../UrlContainer/UrlContainer';
import UrlForm from '../UrlForm/UrlForm';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      urls: []
    }
  }

  componentDidMount() {
    this.getRequest()
  }

  getRequest = () => {
    getUrls()
    .then(data => this.setState({urls: [...this.state.urls, ...data.urls]}))
  }

  addUrl = (newUrl) => {
    // this.setState({urls: [this.state.urls, newUrl]})
    postUrls(newUrl)
    .then(data => this.setState({urls: [...this.state.urls, data]}))
    // .then(this.getRequest())
  }

  render() {
    
    return (
      <main className="App">
        <header>
          <h1>URL Shortener</h1>
          <UrlForm addUrl={this.addUrl}/>
        </header>

        <UrlContainer urls={this.state.urls}/>
      </main>
    );
  }
}

export default App;
