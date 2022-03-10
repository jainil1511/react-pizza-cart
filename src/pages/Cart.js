import {useContext,useEffect,useState} from 'react';
import { CartContext } from '../CartContext';
const Cart = () => {
  const [products,setProducts]= useState([])
  const {cart} = useContext(CartContext);
 useEffect(() => {
  if(!cart.items){
    return;
  }else{
   // console.log(Object.keys(cart.items));
    fetch('https://ecom-rest-apis.herokuapp.com/api/products/cart-items',{
      method:'POST',
      headers:{
        'Content-type':'application/json'
      },
      body:JSON.stringify({ids:Object.keys(cart.items)})
    }).then(res=>res.json())
    .then(products => {
      setProducts(products);
    })
   }
 }, []);
  return (
   <div className="container mx-auto lg:w-1/2 w-full pb-24">
     <h1 className='my-12 font-bold'>iididw</h1>
     <ul>
       <li className='mb-12'>
         <div className='flex items-center justify-between'>
           <div className='flex items-center'>
             <img className='h-16' src="/images/peproni.png" alt="image"/>
             <span className='font-bold ml-4 w-48'>Double peproni</span>
           </div>
           <div>
             <button className='bg-yellow-500 px-4 py-2 rounded-full leading-none'><b>-</b></button>
            <b className='px-4'>1</b>
             <button className='bg-yellow-500 px-4 py-2 rounded-full leading-none'><b>+</b></button>
           </div>
            <span>₹ 500</span>
            <button className='bg-red-500 px-4 py-2 rounded-full leaading-none text-white'>Delete</button>
         </div>
       </li>
     </ul>
     <hr className='my-6'/>
     <div className='text-right'>
       <b>Grand Total :</b> ₹ 500
     </div>
    <div  className='text-right'>
      <button className='bg-yellow-500 px-4 py-2 rounded-full leading-none mt-7'>Order Now</button>
    </div>
   </div>
  )
}

export default Cart