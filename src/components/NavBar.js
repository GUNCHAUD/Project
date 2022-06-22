import React from 'react';
import { Link } from 'react-router-dom';





function NavBar() {

    return (
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark sticky-top">
            <Link className="navbar-brand" to="#">Home</Link>
            <ul className="navbar-nav">

                <div class="dropdown">
                    <button type="button" class="btn btn-dark dropdown-toggle" data-toggle="dropdown">
                        Admin Services
                    </button>
                   
                    <div class="dropdown-menu">
                        <a class="dropdown-item" href="/user/all">AllUsers</a>
                        <a class="dropdown-item" href="/services/all">AllServices</a>
                        <a class="dropdown-item" href="/enquiry/all">AllEnquiries</a>
                        <a class="dropdown-item" href="/vehicleCategory/all">AllVehicleCategory</a>
                    </div>
                </div>



                <li class="nav-item">
                    <Link className="nav-link" to="#">AboutUs</Link>
                </li>
                <li class="nav-item">
                    <Link className="nav-link" to="/user/login">SignIn</Link>
                </li>
                
            </ul>
        </nav>
    )
}

export default NavBar;