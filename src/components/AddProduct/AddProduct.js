import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';

const AddProduct = () =>
{
    const { register, handleSubmit, errors } = useForm();
    const [imageURL, setImageURL] = useState(null);

    const onSubmit = data =>
    {
        const productInfo = {
            name: data.name,
            price: data.price,
            quantity: data.quantity,
            weight: data.weight,
            imageURL: imageURL
        }

        const url = `https://secret-spire-36842.herokuapp.com/addProduct`;

        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(productInfo)
        })
            .then(res => console.log('server side', res));
    };
    const handleImageUpload = event =>
    {
        const imageData = new FormData();
        imageData.set('key', '6f945276fc99b3c8bd42c807bdf9df6d');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload',
            imageData)
            .then(response =>
            {
                setImageURL(response.data.data.display_url);
            })
            .catch(error =>
            {
                console.log(error);
            });
    }

    return (
        <div className="text-center">
            <div className="text-center mb-5">
                <button className="btn btn-outline-success btn-sm mx-3"><Link style={{ color: 'orange' }} className="nav-link" to="/manageProduct">Manage Product</Link></button>
            </div>
            <h3>Add Product</h3>
            <div className="d-flex justify-content-center">
                <form onSubmit={handleSubmit(onSubmit)} style={{ maxWidth: '350px' }}>
                    <input className="form-control" type="file" onChange={handleImageUpload} />
                    <br /><br />
                    <input className="form-control" name="name" placeholder="Product name" ref={register({ required: true })} />
                    <br />
                    {errors.name && <span style={{ color: 'red' }}>This field is required</span>}
                    <br />
                    <input className="form-control" name="price" placeholder="Product price" ref={register({ required: true })} />
                    <br />
                    {errors.price && <span style={{ color: 'red' }}>This field is required</span>}
                    <br />
                    <input className="form-control" name="quantity" placeholder="Product quantity" ref={register({ required: true })} />
                    <br />
                    {errors.quantity && <span style={{ color: 'red' }}>This field is required</span>}
                    <br />
                    <input className="form-control" name="weight" placeholder="Product weight" ref={register({ required: true })} />
                    <br />
                    {errors.weight && <span style={{ color: 'red' }}>This field is required</span>}
                    <br />
                    <input className="btn btn-outline-success mb-5" type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddProduct;