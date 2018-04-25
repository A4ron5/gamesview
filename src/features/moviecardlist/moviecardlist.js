import React from 'react'
import { connect } from 'react-redux'
import { discoverMovies } from './action'
import { MovieCardListUI } from '../../ui/molecules'
import { Loader } from '../loader'

export class MovieCardListRaw extends React.Component {

  componentDidMount() {
    this.props.discoverMovies();
  }

  render() {
    const items = this.props.films.map(item => {
      return (
        <MovieCardListUI
          key={item.id}
          pathImg={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
          title={item.original_title}
          rating={item.vote_average}
          genre='asdfasdf'
          overview={item.overview}
        />
      )
    })
    return (
      <Loader loading={this.props.isFetching}>
        {items}
      </Loader>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    films: state.discover.items,
    isFetching: state.discover.isFetching
  }
}

export const MovieCardList = connect(mapStateToProps, {discoverMovies})(MovieCardListRaw)