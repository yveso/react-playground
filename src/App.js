import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import update from 'immutability-helper';
import { ThemeProvider } from 'styled-components';

import Header from './components/Header';
import Footer from './components/Footer';
import WhatToDo from './components/WhatToDo';
import ItemDetail from './components/ItemDetail';
import Sidebar from './components/Sidebar';
import data from './data/sample';
import './App.css';

import { Provider } from 'react-redux';
import store from './store';

class App extends Component {
  constructor() {
    super();

    this.state = {
      items: [],
      themes: {
        black: { bg: 'black', fg: '#e0e0e0' },
        blue: { bg: 'blue', fg: 'darkkhaki' },
        pink: { bg: 'hotpink', fg: 'honeydew' }
      },
      activeTheme: 'black'
    };
  }

  componentDidMount() {
    this.setState({ items: data });
  }

  getItemByID = (id) => {
    return this.state.items.find(item => item.id === id);
  }

  modifyItemScore = (item, func) => {
    const oldItems = this.state.items;
    const itemIndex = oldItems.findIndex(i => item.id === i.id);
    const newItem = update(item, {score: {$apply: func }});
    const newItems = update(oldItems, {$splice: [[itemIndex, 1, newItem]]});

    this.setState({ items: newItems });
  }

  increaseItemScore = (item) => {
    this.modifyItemScore(item, score => score + 1);
  }

  decreaseItemScore = (item) => {
    this.modifyItemScore(item, score => score - 1);
  }

  deleteItem = (item) => {
    const index = this.state.items.findIndex(i => i.id === item.id);
    const newItems = update(this.state.items, {$splice: [[index, 1]]});
    this.setState({ items: newItems });
  }

  changeTheme = (theme) => {
    this.setState({ activeTheme: theme });
  }

  render() {
    return (
      <Provider store={store}>
      <BrowserRouter>
      <ThemeProvider theme={this.state.themes[this.state.activeTheme]}>
      <div className="site">
        <Header message="Toll, Toll, Supertoll"/>

        <div className="site-body">
          <Sidebar />
          <div className="site-main">
                <Switch>
                  <Route path="/" exact render={() => <WhatToDo itemCount={this.state.items.length} /> } />
                  <Route
                    path="/item/:itemID"
                    render={ (props) =>
                      <ItemDetail
                        item={this.getItemByID(Number(props.match.params.itemID))}
                        increase={this.increaseItemScore}
                        decrease={this.decreaseItemScore}
                        remove={this.deleteItem}
                        historyPush={props.history.push}
                        />
                    }
                  />
                  <Route component={Footer} />
                </Switch>
            </div>
        </div>

        <Footer themes={this.state.themes} changeTheme={this.changeTheme}/>
      </div>
      </ThemeProvider>
      </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
