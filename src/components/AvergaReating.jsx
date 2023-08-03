import React from 'react'

function AvergaReating({data}) {

    const calculerAverage=()=>{
      let average=data.reduce((total,review)=>{
       return  total+review.rating /data.length;
      },0)
      return average

    }
  return (
    <div className='container'>
        <div className='d-flex justify-content-between align-items-center'>
            <h4>Reviews: <span className='badge bg-warning text-danger rounded-pill'>{data.length}</span></h4>
            <h4>Averge: <span className='badge bg-warning text-danger rounded-pill'>{calculerAverage()}</span></h4>

        </div>

    </div>
  )
}
export default AvergaReating