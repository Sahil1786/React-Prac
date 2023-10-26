import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'




const anotherUer="sahil eat chai";

const ractElemet=React.createElement(
  'a',
  {href:'https://google.com',target:'_blank'},
  'click me to vissit google',
  anotherUer
)


ReactDOM.createRoot(document.getElementById('root')).render(
ractElemet


)
