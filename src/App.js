import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import WhatToDo from './components/WhatToDo';
import Sidebar from './components/Sidebar';
import './App.css';

import { Provider } from 'react-redux';
import store from './store';
import ThemeContainer from './containers/ThemeContainer';
import FooterContainer from './containers/FooterContainer';
import ItemDetailContainer from './containers/ItemDetailContainer';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <ThemeContainer>
      <BrowserRouter>
      <div className="site">
        <Header message="Toll, Toll, Supertoll"/>

        <div className="site-body">
          <Sidebar />
          <div className="site-main">
            <Switch>
              <Route path="/" exact component={WhatToDo} />
              <Route path="/item/:id" component={ItemDetailContainer} />
              <Route component={() => <p>Nein</p>} />
            </Switch>
          </div>
        </div>

        <FooterContainer />
      </div>
      </BrowserRouter>
      </ThemeContainer>
      </Provider>
    );
  }
}

export default App;
