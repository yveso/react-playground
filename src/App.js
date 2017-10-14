import React, { Component } from 'react';
import List from './components/List';
import data from './data/sample';

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
      <List
        items={this.state.items}
      />
    );
  }
}

export default App;
