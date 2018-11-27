import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import registerServiceWorker from './registerServiceWorker';

console.log(App);

ReactDOM.render(
  <React.StrictMode>
    {/* <div>Test</div> */}
    <App/>
  </React.StrictMode>
  , document.getElementById('root'));
// ReactDOM.createRoot(document.getElementById('root')).render(<App/>);

registerServiceWorker();
