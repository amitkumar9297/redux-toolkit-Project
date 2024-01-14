import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../store/cartSlice'

import { fetchProducts } from '../store/productSlice';

const Products = () => {
    const dispatch = useDispatch();
    const { data: products, status } = useSelector((state) => state.product)
    // const [products, setProducts] = useState([]);

    useEffect(() => {
        dispatch(fetchProducts())
        // const fetchProducts = async () => {
        //     const res = await fetch('https://fakestoreapi.com/products');
        //     const data = await res.json();
        //     // console.log(data)
        //     setProducts(data);
        // }

        // fetchProducts()
    }, []);

    const handleAdd = (product) => {
        // yeha se product ko redux store mein store krna hai
        // uske liye application mein se action dispatch krte hai

        dispatch(add(product))
    }
    return (
        <div className='productsWrapper'>
            {
                products.map(product => (
                    <div className='card' key={product.id}>
                        <img src={product.image} alt='img' />
                        <h4>{product.title}</h4>
                        <h5>{product.price}</h5>
                        <button onClick={() => handleAdd(product)} className='btn'>Add to Cart</button>
                    </div>
                ))
            }
        </div>
    )
}

export default Products
