

import React from 'react';
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <React.Fragment>
        <nav className="navbar navbar-expand-lg py-lg-3 navbar-dark">
            <div className="container">
                <a href="#home" className="navbar-brand me-lg-5">
                    <img src="assets/images/bitbo-white.png" alt="" className="logo-dark" height="40" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="mdi mdi-menu"></i>
                </button>
                {/* Ibabalik to kapag nailagay na ang iba */}
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav me-auto align-items-center">
                        <li className="nav-item mx-lg-1">
                            <a className="nav-link active" href="#home">Home</a>
                        </li>
                        <li className="nav-item mx-lg-1">
                            <a className="nav-link" href="#services">Services</a>
                        </li>
                        <li className="nav-item mx-lg-1">
                            <a className="nav-link" href="#about">About</a>
                        </li>
                        <li className="nav-item mx-lg-1">
                            <a className="nav-link" href="#faq">FAQs</a>
                        </li>
                        <li className="nav-item mx-lg-1">
                            <a className="nav-link" href="#contact">Contact</a>
                        </li>
                    </ul>

                    <ul className="navbar-nav ms-auto align-items-center">
                        <li className="nav-item me-0">
                            <div className="btn-group">
                                <button type="button" className="btn btn-light dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="mdi mdi-login me-2"></i> Login <span className="caret"></span> </button>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item" href="login-resident.html">Resident</a>
                                    <a className="dropdown-item" href="login-purokleader.html">Purok Leader</a>
                                    <a className="dropdown-item" href="login-staff.html">Staff</a>
                                    <a className="dropdown-item" href="login-brgyofficial.html">Brgy. Official</a>
                                    <a className="dropdown-item" href="loginAdmin">Admin</a>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </React.Fragment>
  )
}
