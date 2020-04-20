import React from 'react';
import ReactDOM from 'react-dom';
import WebFontLoader from 'webfontloader'
import './index.css';
import App from './App';

WebFontLoader.load({
  google: {
    families: [
      'Roboto:300,400,900:latin-ext',
    ]
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App digits={[0,0,"0",0,9,8,7,"3",5,9]} />
  </React.StrictMode>,
  document.getElementById('root')
);
