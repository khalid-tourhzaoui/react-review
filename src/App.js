import React from "react";
import Header from './components/Header'
import AvergaReating from "./components/AvergaReating";
import ReviewList from "./components/ReviewList";
import Form from "./components/Form";
import { useSelector } from "react-redux";
function App() {
  const data=useSelector(state=>state)

  return (
    <div className="container">
      <div className='row my-5'>
    <div className='col-md-8 m-auto'>
      <div className='card'>
        <div className='card-header bg-secondary'><Header/></div>
        <div className='div card-body text-warning bg-dark'>
          <Form/>
          <AvergaReating data={data}/>
          <ReviewList/>
        </div>

      </div>
    </div>
  </div>
    </div>
  );
}

export default App;
