import React from "react"
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";


/*const h2 = document.createElement('h2');
h2.innerText = 'Hola Mundo' */
// Arriba es con javascrit nativo, abajo es con React
// const h1 = React.createElement('div', null, React.createElement('ul', null, React.createElement('li', null, 'item 1')));
// este de abajo sigue siendo con React pero mucho más sencillo
//const h1 = <div><ul><li>Hola mundo</li></ul></div>;

const ul = /*#__PURE__*/_jsx("container", {
  children: /*#__PURE__*/_jsx("div", {
    children: /*#__PURE__*/_jsxs("ul", {
      children: [/*#__PURE__*/_jsx("li", {
        children: "1"
      }), /*#__PURE__*/_jsx("li", {
        children: "2"
      }), /*#__PURE__*/_jsx("li", {
        children: "3"
      }), /*#__PURE__*/_jsx("li", {
        children: "4"
      }), /*#__PURE__*/_jsx("li", {
        children: "5"
      }), /*#__PURE__*/_jsx("li", {
        children: "6"
      })]
    })
  })
});


ReactDOM.createRoot(document.getElementById('root')).render(
  /*<React.StrictMode>
    <App/>
  </React.StrictMode>*/
  ul
)
