import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";

import { getAllVehicleCategory } from "../store/actions/VehicleCategoryActions";

function FetchAllVehicleCategory() {
    const vehicleCategories = useSelector(state => state.vehicleCategoryReducer.vehicleCategories)
    const dispatch = useDispatch();

    const fetchAllVehicleCategory = async () => {
        dispatch(getAllVehicleCategory())
    };

    useEffect(() => {
        fetchAllVehicleCategory();

    }, []);


    return (
        <div className="container">
            <h2>All VehicleCategories</h2>

            <table className="table table-hover">
                <thead>
                <tr>
                    <th>vehicleTypeId</th>
                    <th>vehicleType</th>
                    <th>view</th>

                </tr>
                </thead>
                <tbody>
                {
                    vehicleCategories.map((v, index) =>
                        <tr key={index}>
                            <td>{v.vehicleTypeId}</td>
                            <td>{v.vehicleType}</td>
                            <td> <Link to={`/vehicleCategory/get/${v.vehicleTypeId}`}>View</Link></td> 

                        </tr>

                    )
                }
                </tbody>

            </table>

            <div>
                <Link to="/vehicleCategory/save" className="btn btn-primary">Add VehicleCategory</Link>
            </div>

            <br></br>

            

            <div>
                <Link to="/" className="btn btn-secondary">BackToHome</Link>
            </div>
        </div>

    )
    
}
export default FetchAllVehicleCategory;