import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import WhatToDo from './containers/WhatToDo';
import Sidebar from './components/Sidebar';
import { Site, SiteBody, SiteMain } from './primitives/SiteDivs';

import { Provider } from 'react-redux';
import store from './store/store';
import ThemeContainer from './containers/ThemeContainer';
import FooterContainer from './containers/FooterContainer';
import ItemDetailContainer from './containers/ItemDetailContainer';

const App = () => {
  return (
    <Provider store={store}>
      <ThemeContainer>
        <BrowserRouter>
          <Site>
            <Header message="Toll, Toll, Supertoll"/>

            <SiteBody>
              <Sidebar />
              <SiteMain>
                <Switch>
                  <Route path="/" exact component={WhatToDo} />
                  <Route path="/item/:id" component={ItemDetailContainer} />
                  <Route component={() => <p>Nein</p>} />
                </Switch>
              </SiteMain>
            </SiteBody>

            <FooterContainer />
          </Site>
        </BrowserRouter>
      </ThemeContainer>
    </Provider>
  );
};

export default App;
