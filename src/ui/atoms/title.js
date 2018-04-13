import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  padding: 10px 20px;
`

const TitleRaw = styled.h1`
  font-size: 36px;
  color: white;
  font-family: 'Roboto';
`

export const Title = ({children}) => (
  <Wrapper>
    <TitleRaw>{children}</TitleRaw>
  </Wrapper>
)
