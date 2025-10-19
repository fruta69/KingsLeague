import { Link } from 'react-router-dom';
import React from "react";
import logo from '../assets/logo.svg';

const Nav = () => (
    <div className="container">
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <div className="container-fluid d-flex justify-content-between align-items-center">
                <div className="col">
                <Link to="/" className="navbar-brand d-flex align-items-center">
                    <img
                        src={logo}
                        alt="Logo"
                        width="50"
                        className="img-fluid"
                    />
                </Link>
</div>
<div className="col">
                <div className="text-center">
                    <h2 className="text-warning m-0">Kings League</h2>
                </div>
                </div>
                <div className="col align-items-center justify-content-end d-flex">
                    <a href="#" className="btn btn-outline-warning">
                        Entrar
                    </a>
                </div>
            </div>
        </nav>
    </div>
);

export default Nav;
