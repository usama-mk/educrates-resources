import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import allReducers from './reducers';
import { Provider } from 'react-redux';

// created global store for state management using Redux
const store =createStore(allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ & window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  // Passing the global store to the whole app so that each component can have access to the data provided
  // store is paased to the app using Provider
ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
