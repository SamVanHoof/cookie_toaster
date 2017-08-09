import React, { Component } from 'react';
import CookieToaster from './node_modules/components/cookieToaster/CookieToaster';
import CookieToasterTop from './node_modules/components/cookieToasterTop/CookieToasterTop';
import CookieToasterModal from './node_modules/components/cookieToasterModal/CookieToasterModal';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CookieToaster title="test" />
        {/*<CookieToasterTop title="test" />*/}
        {/*<CookieToasterModal title="test" linkUrl="http://www.google.com" />*/}
      </div>
    );
  }
}

export default App;
