import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import update from 'immutability-helper';

import Header from './components/Header';
import Footer from './components/Footer';
import List from './components/List';
import ChooseItemMessage from './components/ChooseItemMessage';
import ItemDetail from './components/ItemDetail';
import NewItem from './components/NewItem';
import data from './data/sample';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      items: []
    };
  }

  componentWillMount() {
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

  addItem = (title) => {
    const newItems = update(
      this.state.items,
      {$push: [{
        id: Date.now(),
        title: title,
        score: 0
      }]}
    );
    this.setState({ items: newItems });
  }

  deleteItem = (item) => {
    const index = this.state.items.findIndex(i => i.id === item.id);
    const newItems = update(this.state.items, {$splice: [[index, 1]]});
    this.setState({ items: newItems });
  }

  render() {
    return (
      <BrowserRouter>
      <div className="site">
        <Link to="/" style={{textDecoration: 'none'}}>
          <Header message="Toll, Toll, Supertoll"/>
        </Link>
        <div className="site-body">
            <div>
              <List items={this.state.items} />
              <NewItem add={this.addItem} />
            </div>
            <div className="site-main">
                <Switch>
                  <Route path="/" exact component={ChooseItemMessage} />
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
        <Footer />
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
