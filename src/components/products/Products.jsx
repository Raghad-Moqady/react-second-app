import React,{useEffect,useState} from 'react'
import './products.css'





export default function Products() {
let [products ,setProducts] =useState([]);


const getProducts=async()=>{
let response = await fetch("https://fakestoreapi.com/products");
let data     = await response.json();
setProducts(data);
}

useEffect(()=>{
  getProducts();
},[])


  return (
 <>
 <div className='row products row-gap-5 mt-5 p-5'>
  {products.map((ele)=>{
     return (
     <div className='col-md-3 product ' key={ele.id}>
      <h2>{ele.title}</h2>
      <p>{ele.price}$</p>
      <div className='product-img'>
         <img src={ele.image} alt="product-img}"/>
      </div>
     </div>
     )
  })}
 </div>
 </>
  )
}
