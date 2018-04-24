import React, { Component } from 'react';
import { Container, Title, Header } from './ui/atoms'
import { Switcher } from './ui/molecules'
import { MovieCardList } from './features/moviecardlist'
import { Search } from './features/search'
import { store } from './store'

import { Provider } from 'react-redux';
import { Router, Route, Redirect, browserHistory } from 'react-router';

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <Container>
          <Header>
            <Title>КиноПроиск</Title>
            <Search/>
          </Header>
          <Switcher/>
          <MovieCardList/>
        </Container>
      </Provider>
    );
  }
}

export default App;
