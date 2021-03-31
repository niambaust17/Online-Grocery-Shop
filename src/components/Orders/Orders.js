import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';

const Orders = () =>
{
    const [orders, setOrders] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    useEffect(() =>
    {
        fetch(`https://secret-spire-36842.herokuapp.com/orders`)
            .then(res => res.json())
            .then(data => filterData(data))
    }, [])

    const filterData = (orders) =>
    {
        const filterOrder = orders.filter(order => order.email === loggedInUser.email)
        setOrders(filterOrder);
    }

    return (
        <div className="container">
            <div className="table-responsive{-sm|-md|-lg|-xl|-xxl}">
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Email</th>
                            <th scope="col">Product</th>
                            <th scope="col">Price</th>
                            <th scope="col">Order Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map(order =>
                                <tr>
                                    <th scope="row">{order.email}</th>
                                    <td>{order.name}</td>
                                    <td>{order.price}</td>
                                    <td>{order.orderTime}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Orders;