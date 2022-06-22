import React, {  useState } from "react";
import Axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { CreateVehicleCategory } from "../store/actions/VehicleCategoryActions";
import {useDispatch,useSelector} from 'react-redux';


function SaveVehicleCategory() {
    
    const [vehicleType, setVehicleType] = useState("");
   
    const newVehicleCategory = useSelector(state => state.vehicleCategoryReducer.newVehicleCategory)

    const dispatch = useDispatch();

    const navigate=useNavigate();



    const handleSubmit = () => {
        const payload = {
            
            vehicleType: vehicleType,
           
        }
        dispatch(CreateVehicleCategory(payload));
        alert("VehicleCategory saved");

    }

    return (
        <div className="container">
            <h2 style={{ backgroundColor: "lightblue" }}>VehicleCategory Form</h2>
            <div className="form-group">
                <label htmlFor='vehicleType'>VehicleType :</label>

                <input type="text" className="form-control" name="userNvehicleTypeame" value={vehicleType} onChange={v => setVehicleType(v.target.value)} />

            </div>

            <div>
                <button onClick={handleSubmit} className="btn btn-primary">Submit</button><br></br><br></br>
                <button onClick={()=>navigate(-1)} className="btn btn-secondary">Go Back Home</button>
            </div>






        </div>
    )

}
export default SaveVehicleCategory;