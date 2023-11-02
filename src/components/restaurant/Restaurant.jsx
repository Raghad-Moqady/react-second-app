import React ,{useState,useEffect}from 'react'
 import './restaurant.css'

export default function Restaurant() {
  let [pizza ,setpizza]=useState([]);
  let [salad,setSalad]=useState([]);
  let [onion,setOnion]=useState([]);


  const getPizza=async()=>{
   let pizzaResponse= await fetch("https://forkify-api.herokuapp.com/api/search?q=pizza");
   let pizzaData= await pizzaResponse.json();
   setpizza(pizzaData.recipes);
  }
  const getSalad=async()=>{
  let saladResponse=await fetch("https://forkify-api.herokuapp.com/api/search?q=salad");
  let saladData = await saladResponse.json();
  setSalad(saladData.recipes);
  }
  const getOnion=async()=>{
   let onionResponse= await fetch("https://forkify-api.herokuapp.com/api/search?q=onion");
   let onionData= await onionResponse.json();
   setOnion(onionData.recipes);
  }



useEffect(()=>{
  getPizza();
  getSalad();
  getOnion();
},[])


  return (
 <>
  <section className='pizza m-5'>
    <h2 className='text-center m-5'>Pizza Section</h2>
   <div className="row row-gap-5">
     {pizza.map((ele)=>{
      return(
        <div className="col-md-3" key={ele.recipe_id}>
        <h3>{ele.title}</h3>
       <div className='img-parent'>
       <img src={ele.image_url} alt="image" />
       </div>
      </div>
      )
     })}
   </div>
  </section>
 

 <section className='salad m-5'>
 <h2 className='text-center m-5'>Salad Section</h2>
 <div className="row row-gap-5">
   {salad.map((ele)=>{
    return(
      <div className="col-md-3" key={ele.recipe_id}>
        <h3>{ele.title}</h3>
        <div className='img-parent'>
        <img src={ele.image_url} alt="image" />
        </div>
      </div>
    )
   })}
 </div>
 </section>
  
  <section className='onion m-5'>
    <h2 className='text-center m-5'>Onion Section</h2>
    <div className="row row-gap-5">
       {onion.map((ele)=>{
        return(
          <div className="col-md-3" key={ele.recipe_id}>
            <h3>{ele.title}</h3>
          <div className="img-parent">
          <img src={ele.image_url} alt="image"/>
          </div>
          </div>
        )
       })}
    </div>
  </section>
 </>
  )
}
