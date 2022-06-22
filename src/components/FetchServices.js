import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import img from '../Image/theme2.jpg';
import { getServicesDetails } from '../store/actions/ServicesActions';


function FetchServices() {


    const service = useSelector(state => state.servicesReducer.service)

    const { id } = useParams();

    const dispatch = useDispatch();

    const fetchServicesById = () => {
        dispatch(getServicesDetails(id));
    }

    useEffect(fetchServicesById, [id]);

    return (
        <div className="bg_image"
            style={{

                backgroundImage: `url(${img})`,

                backgroundSize: "cover",

                height: "90vh"

            }}>

            {<div className='contrainer-fluid'>
                {
                    service !== null &&
                    <div className="row">
                       
                        <div className="col">
                            <h2>Services Details</h2>

                            <p>ServicesId : {service.serviceId}</p>
                            <p>Name : {service.serviceName}</p>
                            <p>Cost : {service.cost}</p>

                            <Link to={`/services/update/${service.serviceId}`} className="btn btn-secondary">Edit</Link> &nbsp;&nbsp;
                            {/* <Link to={`/services/delete/${service.serviceId}`} className="btn btn-secondary">Delete</Link><br></br><br></br> */}
                        </div>

                    </div>
                
                }
                <div>
                    <Link to="/services/all" className="btn btn-secondary">Back</Link>
                </div>
            </div>}
        
        </div>
            
    )

            
}


export default FetchServices;