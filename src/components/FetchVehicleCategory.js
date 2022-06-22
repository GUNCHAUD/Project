import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import img1 from '../Image/enquiry.jpg';
import { useDispatch, useSelector } from "react-redux";
import {getVehicleCategoryById} from '../store/actions/VehicleCategoryActions';

function FetchVehicleCategory() {
   const vehicleCategory=useSelector(state=>state.vehicleCategoryReducer.vehicleCategory);
   

    const { id } = useParams();
    const dispatch=useDispatch();

    const fetchVehicleCategory=async()=>{
        dispatch(getVehicleCategoryById(id));
    };
   
    useEffect(() => {
        fetchVehicleCategory(id);

    }, []);
   
   

    return (
        <div>
            <h2>vehicleType Details</h2>
            {
                vehicleCategory !== null &&
                

                <div className="row">
                    <div className="col">
                    <img  src={img1} alt="Card image" />
                       


                    </div>
                    <div className="col">

                        <p>UserId :{vehicleCategory.vehicleTypeId}</p>
                        <p>Name:{vehicleCategory.vehicleType}</p>
                        
                        

                        <Link to={`/vehicleCategory/update/${vehicleCategory.vehicleTypeId}`} className="btn btn-secondary">Edit</Link> &nbsp;&nbsp; 
                        
                    </div>
                </div>

            }
            <div>
                <Link to="/vehicleCategory/all" className="btn btn-secondary">Back</Link>
            </div>
        </div>
    )
}
export default  FetchVehicleCategory;
    