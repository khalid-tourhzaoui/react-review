import React from 'react'
import { useSelector } from 'react-redux'
import ReviewItem from './ReviewItem'
import { removeReview } from '../redux/actions'
function ReviewList() {
  const data=useSelector(state=>state)
  console.log(useSelector(state=>state))

  return (
    <ul className='mt-4 list-group'>
      {
        data.map((personne)=><ReviewItem key={personne.id} personne={personne} removeReview={removeReview}/>)
      }
    </ul>
  )
}

export default ReviewList