import React from 'react'
import { connect } from 'react-redux'
import { discoverMovies } from './action'
import { MovieCardListUI } from '../../ui/molecules'

export class MovieCardListRaw extends React.Component {

  componentDidMount() {
    this.props.dispatch(discoverMovies());
  }

  render() {
    const items =  this.props.isFetching ? <h1>Loading</h1> : this.props.films.map(item => {
      return (
        <MovieCardListUI
          pathImg={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
          title={item.original_title}
          rating={item.vote_average}
          genre='asdfasdf'
          overview={item.overview}
        />
      )
    })
    return (
      <React.Fragment>
        {items}
      </React.Fragment>
    )
  }
}

// const mapStateToProps = (state) => ({
//   films: state.discover.discoverData
// })

const mapStateToProps = (state) => {
  console.log(state.discover)
  return {
    films: state.discover.discoverData,
    isFetching: state.discover.isFetching
  }
}

export const MovieCardList = connect(mapStateToProps)(MovieCardListRaw)