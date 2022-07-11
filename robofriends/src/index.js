import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { robots } from './robots';
import CardList from './CardList';

//ReactDOM.render(<h1>Hello World</h1>, document.getElementById('root'));


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <CardList robots={robots} />
  </div>
  
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
