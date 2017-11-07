import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import update from 'immutability-helper';

import Header from './components/Header';
import WhatToDo from './components/WhatToDo';
import ItemDetail from './components/ItemDetail';
import Sidebar from './components/Sidebar';
import data from './data/sample';
import './App.css';

import { Provider } from 'react-redux';
import store from './store';
import ThemeContainer from './containers/ThemeContainer';
import FooterContainer from './containers/FooterContainer';

class App extends Component {
  constructor() {
    super();

    this.state = {
      items: []
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

  render() {
    return (
      <Provider store={store}>
      <BrowserRouter>
      <ThemeContainer>
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
                  <Route component={<p>ToDo</p>} />
                </Switch>
            </div>
        </div>

        <FooterContainer />
      </div>
      </ThemeContainer>
      </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
