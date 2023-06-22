import React,{useEffect, useState} from "react";

export default function Buy(props) {
  const [pcheck,setPcheck] = useState({
    check:false,
    name:""
  })
  
  const checkPay = ()=>{
    
      setPcheck({
        check:true,
        name:""
      })
  }
  useEffect(()=>{
    //  onchange()
    checkPay()
  },[])
  return (
    <>
    {
     pcheck.check===true?<div className="alert alert-success" role="alert">
      {pcheck.name} SuccessFully Buy Product {props.p}
   </div>:null
    }
    <div className="container text-center my-3">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  
                  name="name"
                  
                  placeholder="Enter First Name..."
                />
              </div>
            </th>
            <th scope="col">
              <div className="mb-3">
                
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Enter Second Name..."
                />
              </div>
            </th>
          </tr>
          <tr>
            <th scope="col">
              <div className="mb-3">
                
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Enter State..."
                />
              </div>
            </th>
            <th scope="col">
              <div className="mb-3">
                
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Enter district..."
                />
              </div>
            </th>
          </tr>
          <tr>
            <th scope="col">
            <div className="mb-3">
                
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                />
              </div>
            </th>
            <th scope="col">
              <div className="mb-3">
                
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  placeholder="Enter Address.."
                ></textarea>
              </div>
            </th>
          </tr>
        </thead>
      </table>
      <button  type="button" onClick={checkPay} className="btn btn-primary">
        Payment
      </button>
    </div>
    </>
  );
}
