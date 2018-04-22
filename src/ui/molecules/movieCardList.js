import React from 'react'
import styled from 'styled-components'

const ImgMovie = styled.img`
  display: block;
`
const TitleMovie = styled.h3`
  font-size: 32px;
  margin-bottom: 10px;
`

const RatingIcon = styled.i`
  margin-right: 5px;
  margin-bottom: 10px;  
`

const RatingMovie = styled.p`
`

const GenreMovie = styled.p`
  margin-bottom: 10px;  
`
const OverviewMovie = styled.p`
`

const LeftSideWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25%;
  padding: 10px 20px;
`

const RightSideWrapper = styled.div`
  width: 75%;
  padding: 10px 20px; 
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  border-radius: 5px;
  border: 1px solid gray;
  font-family: 'Roboto';
  font-size: 22px;
  color: white;  
  background-color: rgba(68,68,68,0.95);
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
`
const RatingWrapper = styled.div`
  display: flex;
`

export const MovieCardListUI = ({pathImg, title, rating, genre, overview}) => (
  <Wrapper>
    <LeftSideWrapper>
      <ImgMovie src={pathImg}/>
    </LeftSideWrapper>
    <RightSideWrapper>
      <TitleMovie>{title}</TitleMovie>
      <RatingWrapper>
        <RatingIcon className='far fa-star'></RatingIcon>
        <RatingMovie>{rating}</RatingMovie>
      </RatingWrapper>
      <GenreMovie>Жанр: {genre}</GenreMovie>
      <OverviewMovie>Описание: {overview}</OverviewMovie>
    </RightSideWrapper>
  </Wrapper>
)