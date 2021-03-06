import {Link} from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../CartContext';
const Navigation = () =>{

    const {cart} = useContext(CartContext);
    const cartstyle = {
        background:'#F59E0D',
        display:'flex',
        padding:'6px 12px',
        borderRadius:'50px'
        
    }
    return(
        <>
         <nav className="container mx-auto flex item-center justify-between py-4">
            
            <Link to='/'>
            <img src='/images/logo.png' alt="logo" style={{height:45}}></img>
            </Link>
            <ul className='flex items-center'>
                <li ><Link to="/">Home</Link></li>
                <li className="ml-6" ><Link to="/products">Products</Link></li>
                <li className="ml-6">
                    <Link to="/cart">
                        <div style={cartstyle}>
                            
                            <span>{cart.totalItems ? cart.totalItems : 0}</span>
                            <img className='ml-2' src="/images/cart.png" alt="cart-icon"/>
                        </div>
                    </Link>
                </li>
            </ul>
         </nav>
        </>

    )
}
export default Navigation;