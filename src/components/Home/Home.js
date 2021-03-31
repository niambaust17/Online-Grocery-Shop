import React, { useEffect, useState } from 'react';
import Products from '../Products/Products';

const Home = () =>
{
    const [products, setProducts] = useState([])

    useEffect(() =>
    {
        fetch(`http://localhost:5050/products`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [products])

    return (
        <div className="container my-5">
            <div className="row row-cols-1 row-cols-lg-4 row-cols-md-3 row-cols-sm-2  g-4">
                {
                    products.map(product => <Products key={product._id} product={product} />)
                }
            </div>
        </div>
    );
};

export default Home;