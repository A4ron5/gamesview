import React, { Component } from 'react';
import Button from 'material-ui/Button'
import { Container, Title } from './ui/atoms'
import { Search } from './features/search'

class App extends Component {
  render() {
    return (
      <Container>
        <Title>КиноПоиск</Title>
        <Search></Search>
      </Container>
    );
  }
}

export default App;
