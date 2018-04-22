import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  font-family: 'Roboto';
  padding: 10px 20px;
  margin-left: auto;
`
const WrapperOne = styled.div`
  width: 400px;
  background-color: gray;
  opacity: 0.4;
  border-radius: 7px;  
`

const SearchIcon = styled.i`
  color: white;
`;

const Input = styled.input`
  width: 91%;
	background: transparent;
	border: 0;
  font: inherit;
  font-size: 18px;
  color: white;
  outline: 0;
  padding: 10px 20px;
`

const Button = styled.button` 
  background: transparent;
	border: 0;
	color: inherit;
	font: inherit;
  outline: 0;
  cursor: pointer;
`
export const SearchUI = ({onChangeInput, onClickButton}) => (
  <Wrapper>
    <WrapperOne>
      <Input onChange={onChangeInput}/>
      <Button onClick={onClickButton}>
        <SearchIcon className='fa fa-search'></SearchIcon>
      </Button>
    </WrapperOne>
  </Wrapper>
)
