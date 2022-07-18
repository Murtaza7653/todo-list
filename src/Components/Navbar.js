import React from 'react';
import logo from './images/logo.jpg';
import { Link } from "react-router-dom";


export default function Navbar() {

    return (

        <nav className="navbar navbar-dark navbar-expand-lg " style={{ backgroundColor: "#071e22" }}>
            <div className="container-fluid">
                <img className=' mx-2' src={logo} alt="logo" />
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{ fontSize: "20px" }}>
                        <li className="nav-item mx-2 my-3">
                            <Link className="nav-link active" aria-current="page" to="/">TODO List</Link>
                        </li>
                        <td className='my-4' style={{ borderLeft: "2px solid white", padding: "2px" }}></td>
                        <li className="nav-item mx-2 my-3">
                            <Link className="nav-link active" to="/about">About Us</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )

}
