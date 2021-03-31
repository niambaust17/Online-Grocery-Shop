import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ManageProduct = () =>
{
    const [products, setProducts] = useState([])

    const fetchProducts = () =>
    {
        fetch(`https://secret-spire-36842.herokuapp.com/products`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }
    useEffect(() =>
    {
        fetchProducts();
    }, [])

    const deleteProduct = id =>
    {
        fetch(`https://secret-spire-36842.herokuapp.com/product/${ id }`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => fetchProducts())
            .then(error => console.log(error))
    }

    return (
        <div className="container">
            <div className="text-center mb-5">
                <button className="btn btn-outline-success btn-sm mx-3"><Link style={{ color: 'orange' }} className="nav-link active" aria-current="page" to="/addProduct">Add Product</Link></button>
            </div>
            <div className="table-responsive{-sm|-md|-lg|-xl|-xxl}">
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Product Name</th>
                            <th scope="col">Quantity(Pkt)</th>
                            <th scope="col">Weight(gm)</th>
                            <th scope="col">Price($)</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map(product =>
                                <tr>
                                    <th scope="row">{product.name}</th>
                                    <td>{product.quantity}</td>
                                    <td>{product.weight}</td>
                                    <td>{product.price}</td>
                                    <td><button className="btn btn-outline-warning me-2">Edit</button><button onClick={() => deleteProduct(product._id)} className="btn btn-outline-danger">Delete</button></td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageProduct;