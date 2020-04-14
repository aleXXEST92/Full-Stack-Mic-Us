import React, { Component } from 'react';
import Navbar from './Components/Navbar'
import Router from '../src/Router'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import store from './redux/store'
import './App.css';

class App extends Component {

  render () {
    return (
      <>
      <Provider store={store}>
      <BrowserRouter>
        <Navbar/>
        <Router />
      </BrowserRouter>
      </Provider>
       </>
    );
  }
}

export default App