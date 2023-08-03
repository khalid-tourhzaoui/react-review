import React from 'react';
import { showRating } from './star';
import { useDispatch } from 'react-redux';

function ReviewItem({personne,removeReview}){
  const dispatch=useDispatch()
  const handelRemove=(id)=>{
    dispatch(removeReview(id))
  }
  return (
    <li className='list-group-item d-flex justify-content-between align-center'>
        <div className="ms-2 me-auto">
              <div className="div fw-bold">FirstName: {personne.firstName}</div>
              <div className="div fw-bold">LastName: {personne.lastName}</div>
              <div className="div fw-bold">Review Massage: {personne.message}</div>
              <div className="div fw-bold">Review Rating:  {showRating(personne.rating)}</div>
        </div>
        <div className="d-flex flex-column pt-4 ">
            <button className='btn  btn-danger ' onClick={()=>handelRemove(personne.id)}>
                <i className='bi bi-trash'></i>
            </button>
        </div>

    </li>
    /*<li className='list-group-item d-flex justify-content-between align-center'>
        <div className="ms-2 me-auto">
            <div className="div fw-bold">First name: {review.name}</div>
            <div className="div fw-bold">Last name: {review.prenom}</div>
            <div className="div fw-bold">Review Rating: {showRating(review.rating)}</div>
        </div>
        <div className="d-flex flex-column pt-4">
            <button className='btn btn-sm btn-danger' onClick={()=>RemoveReview(review.id)}>
                <i className='bi bi-trash'></i>
            </button>
        </div>

    </li> */
  )
}
export default ReviewItem