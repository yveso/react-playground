import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import List from './components/List';
import ChooseItemMessage from './components/ChooseItemMessage';
import ItemDetail from './components/ItemDetail';
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

  render() {
    return (
      <BrowserRouter>
      <div className="site">
        <Link to="/" style={{textDecoration: 'none'}}>
          <Header message="Toll, Toll, Supertoll"/>
        </Link>
        <div className="site-body">
            <List items={this.state.items} />
            <div className="ste-main">
                <Switch>
                  <Route path="/" exact component={ChooseItemMessage} />
                  <Route
                    path="/item/:itemID"
                    render={ (props) =>
                      <ItemDetail
                        {...props}
                        item={this.state.items[props.match.params.itemID]} />
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
