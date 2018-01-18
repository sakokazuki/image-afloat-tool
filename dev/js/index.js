import React from 'react'
import ReactDOM from 'react-dom'
import './style/main.styl'
import App from './components/app'

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers/'

const store = createStore(reducer)


const ImageAfloatTool = (config)=>{
  let ele = document.createElement("div");
  ele.id = "web-tools"
  document.body.appendChild(ele);
  ReactDOM.render((
    <Provider store={store}>
      <App config={config}/>
    </Provider>
  ), document.getElementById('web-tools'));
}

const config = {
  imgsrc: [
    'img/design_pc.jpg',
    'img/design_pc_over.jpg',
    'img/design_sp.jpg'
  ],
}

// exports.hello = function (name) {
//   console.log("Hello, " + (name || ""));
// }

module.exports = ImageAfloatTool

