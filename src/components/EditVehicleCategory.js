import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updateVehicleCategory } from '../store/actions/VehicleCategoryActions';

function EditVehicleCategory() {
    const vehicleCategory = useSelector(state => state.vehicleCategoryReducer.vehicleCategory);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [vehicleTypeId, setVehicleTypeId] = useState(vehicleCategory.vehicleTypeId)
    const [vehicleType, setVehicleType] = useState(vehicleCategory.vehicleType);
    
    

    const handleSubmit = () => {
        const payload = {
            vehicleTypeId: vehicleTypeId,
            vehicleType: vehicleType,
            
        }
        dispatch(updateVehicleCategory(payload));
        alert("vehicleCategory Updated.")
        navigate(-1);
    }
    return (
        <div>
            <div className="container">
                <h2 style={{ backgroundColor: "lightblue" }}>User Form</h2>

                <div className="form-group">
                    <label htmlFor='vehicleTypeId'>vehicleTypeId :</label>

                    <input type="text" className="form-control" name="vehicleTypeId" value={vehicleTypeId} disabled />

                </div>
                <div className="form-group">
                    <label htmlFor='vehicleType'>vehicleType :</label>

                    <input type="text" className="form-control" name="vehicleType" value={vehicleType} onChange={v => setVehicleType(v.target.value)} />

                </div>
                <div>
                    <button onClick={handleSubmit} className="btn btn-primary">Update</button>
                </div>

                <div style={{ float: "right" }}>
                    {/* <Link to="/"><button type="button" className="btn btn-secondary">BackToHome</button></Link>  */}
                    <button onClick={() => navigate(-1)} className="btn btn-secondary">Go Back Home</button>
                </div>




            </div>


        </div>
    )
}


export default EditVehicleCategory;