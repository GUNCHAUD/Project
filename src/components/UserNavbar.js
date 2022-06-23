import React, { useEffect, useState } from 'react';
import {Link,useNavigate} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

function UserNavar() {

    
    const navigate = useNavigate();
    const doLogout = () => {
        const myUser = localStorage.getItem("myUser");
        if(myUser!==null) {
            localStorage.removeItem("myUser");
            
            alert("You have logged out succssfully!");
            navigate('/')
        }
    }

    return (
        
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark sticky-top">
            <Link className="navbar-brand" to="#">Logo</Link>
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
                <li className="nav-item">
                    <Link className="nav-link" to="#">AboutUs</Link>
                </li>
                {
                   
                        <li className="nav-item">
                            {/* <Link className="nav-link" to="/customer/logout">Logout</Link> */}
                            <button onClick={doLogout}>Logout</button>
                        </li>

               
                }
                
            </ul>
        </nav>
    )
}

export default UserNavar;