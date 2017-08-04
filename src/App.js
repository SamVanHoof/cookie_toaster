import React, { Component } from 'react';
import Cookie from './node_modules/components/cookieToaster/CookieToaster';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Cookie title="test" />
      </div>
    );
  }
}

export default App;
