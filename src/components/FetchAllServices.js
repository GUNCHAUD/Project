import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";

import {getAllServices } from "../store/actions/ServicesActions";

function FetchAllServices() {
    const services = useSelector(state => state.servicesReducer.services)
    const dispatch = useDispatch();

    const fetchAllServices = async () => {
        dispatch(getAllServices())
    };

    useEffect(() => {
        fetchAllServices();

    }, []);


    return (
        <div className="container">
            <h2>All Services</h2>

            <table className="table table-hover">
                <thead>
                <tr>
                    <th>serviceId</th>
                    <th>serviceName</th>
                    <th>view</th>

                </tr>
                </thead>
                <tbody>
                {
                    services.map((s, index) =>
                        <tr key={index}>
                            <td>{s.serviceId}</td>
                            <td>{s.serviceName}</td>
                            <td><Link to={`/services/get/${s.serviceId}`}>View</Link></td>

                        </tr>

                    )
                }
                </tbody>

            </table>

            <div>
                <Link to="/services/save" className="btn btn-primary">Add Services</Link>
            </div>

            <br></br>

            

            <div>
                <Link to="/" className="btn btn-secondary">BackToHome</Link>
            </div>
        </div>

    )
    
}
export default FetchAllServices;