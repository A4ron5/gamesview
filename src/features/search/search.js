import React from 'react'
import { SearchUI } from '../../ui/molecules'

export class Search extends React.Component {
  
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
      <SearchUI 
        onClickButton={this.buttonClick}
        onChangeInput={this.inputChange}        
      ></SearchUI>
    )
  }
}

