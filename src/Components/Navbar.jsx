import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Navbar = () => {
    const items = useSelector((state) => state.cart);// subscribe krna hota hai taki agr state update ho toh wo reflect ho . jaise hmm ne cart ko select kiya hai
    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span className='logo'>STORE</span>
            <div>
                <Link className='navLink' to='/'>Home</Link>
                <Link className='navLink' to={'/cart'}>Cart</Link>
                <span className='cartCount'>
                    cart Item : {items.length}
                </span>
            </div>
        </div>
    )
}

export default Navbar
