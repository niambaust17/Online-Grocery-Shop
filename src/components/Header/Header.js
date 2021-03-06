import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const Header = () =>
{
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <>
            <nav className="navbar navbar-expand-md sticky-top navbar-light" style={{ backgroundColor: '#e2f2fd1a' }}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">ONLINE GROCERY SHOP</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/orders">Orders</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/admin">Admin</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/deals">Deals</Link>
                            </li>
                            {
                                loggedInUser?.isSignedIn &&
                                <>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/">{loggedInUser.displayName}</Link>
                                    </li>
                                </>
                            }
                            <li className="nav-item">
                                {loggedInUser.isSignedIn ? <Link className="nav-link btn btn-outline-warning" to="/" onClick={() => setLoggedInUser({})}>Logout</Link> : <Link className="nav-link btn btn-outline-success" to="/login">Login</Link>}
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="container my-5">
                <div className="input-group">
                    <input type="text" className="form-control" placeholder="Search product" />
                    <button className="btn btn-outline-success" type="button">Search</button>
                </div>
            </div>
        </>
    );
};

export default Header;