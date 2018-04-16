import React, { Component } from 'react';
import { Container, Title, Header } from './ui/atoms'
import { Search, Switcher } from './ui/molecules'
import { MovieCardList } from './ui/molecules'

class App extends Component {
  //TODO: сделать органзим из хедера
  state = {
    text: ''
  }

  buttonClick = () => {
    console.log(this.state.text)
  }

  inputChange = (e) => {
    this.setState({
      text: e.target.value
    })
  }

  render() {
    return (
      <Container>
        <Header>
          <Title>КиноПроиск</Title>
          <Search 
            onClickButton={this.buttonClick}
            onChangeInput={this.inputChange}
          >
          </Search>
        </Header>
        <Switcher/>
        <MovieCardList
          pathImg='http://via.placeholder.com/200x150'
          title='TestMovie1'
          rating='6.5'
          genre='Horror'
          overview='lorem iasfdsa asidfasdf asdhf asd fasdlfk hsadl fksahd lsak fhasld khflasdl lorem iasfdsa asidfasdf asdhf asd fasdlfk hsadl fksahd lsak fhasld khflasd lorem iasfdsa asidfasdf asdhf asd fasdlfk hsadl fksahd lsak fhasld khflasd lorem iasfdsa asidfasdf asdhf asd fasdlfk hsadl fksahd lsak fhasld khflasd'
        />
        
      </Container>
    );
  }
}

export default App;
