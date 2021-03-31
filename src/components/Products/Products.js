import React from 'react';

const Products = (props) =>
{
    const { product } = props;
    return (
        <div className="col">
            <div style={{ border: '1px solid orange', borderRadius: '10px', backgroundColor: '#d8e8e6' }}>
                <img src={product.imageURL} alt="" className="card-img-top p-2" />
                <p className="px-3"><strong>{product.name}</strong></p>
                <h5 className="d-flex justify-content-between px-3"><span className="text-success">${product.price}</span><button className="btn btn-outline-success btn-sm">Buy Now</button> </h5>
            </div>
        </div>
    );
};

export default Products;