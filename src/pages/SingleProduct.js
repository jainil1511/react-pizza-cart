import {Link,useParams} from 'react-router-dom';
import {React,useState,useEffect} from 'react'

const SingleProduct = () => {
const [product,setProduct] = useState({});
const params = useParams();
useEffect(() => {
    
    fetch(`https://ecom-rest-apis.herokuapp.com/api/products/${params._id}`)
    .then(res => res.json())
    .then(product => {
        console.log(product);
    })
}, []);


  return (
    <div className='container mx-auto mt-12'>
        <Link to="/">
        <button className='mb-12 font-bold'>Back</button>
        <div className='flex'>
        <img src="/images/peproni.png" alt="pizza" />
        <div className='ml-16'>
            <h1 className='text-xl font-bold'>Hawana Specil</h1>
            <div className='text-md'>Small</div>
            <div className='font-bold mt-2'>₹ 400</div>
            <button className='bg-yellow-500 py-1 px-8 rounded-full font-bold mt-4'>Add to Cart</button>
        </div>
        </div>
        
        </Link>
    </div>
  )
}

export default SingleProduct