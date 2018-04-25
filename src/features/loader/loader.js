import React, {Fragment} from 'react'
import { LoaderUI } from '../../ui/atoms/loader'

export const Loader = (props) => {
  return (
    <Fragment>
      {
        props.loading ? <LoaderUI/> : props.children
      }
    </Fragment>
  )
}