import React from 'react'
import ProductsItems from './ProductsItems'
import Category from './Category'
import P from './test.json'
export default function Products(props) {
  return (
    <>
     
      <Category />
     <div className="container">
     <div className="row">
        {props.p && P.map((e)=>{
           return  props.p===e.category?<div key={e.id} className="col-4 my-2">
           <ProductsItems all={e} c={()=>props.c(e)} p={()=>props.pg(e.pname)} pname={e.pname} price={e.price} image={e.image}/>
           </div>:null
        })}
        {!props.p && P.map((e)=>{
           return  <div key={e.id} className="col-4 my-2">
           <ProductsItems all={e} c={()=>props.c(e)} p={()=>props.pg(e.pname)} pname={e.pname} price={e.price} image={e.image}/>
           </div>
        })}
      
     </div>
     </div>
    </>
  )
}
