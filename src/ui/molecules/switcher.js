import React from 'react'
import styled from 'styled-components'
import {List, Grid} from '../atoms'

const Wrapper = styled.div`
  width: 70px;
  display: flex;
  justify-content: space-between;
  margin-left: auto;  
  margin-bottom: 15px;
`

export const Switcher = () => (
  <Wrapper>
    <List className='fas fa-th-list'/>
    <Grid className='fas fa-th-large'/>
  </Wrapper>
)