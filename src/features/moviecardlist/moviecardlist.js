import React from 'react'
import { MovieCardListUI } from '../../ui/molecules'

export class MovieCardList extends React.Component {
  render() {
    return (
      <MovieCardListUI
        pathImg='http://via.placeholder.com/200x150'
        title='TestMovie1'
        rating='6.5'
        genre='Horror'
        overview='lorem iasfdsa asidfasdf asdhf asd fasdlfk hsadl fksahd lsak fhasld khflasdl lorem iasfdsa asidfasdf asdhf asd fasdlfk hsadl fksahd lsak fhasld khflasd lorem iasfdsa asidfasdf asdhf asd fasdlfk hsadl fksahd lsak fhasld khflasd lorem iasfdsa asidfasdf asdhf asd fasdlfk hsadl fksahd lsak fhasld khflasd'
      />
    )
  }
}
