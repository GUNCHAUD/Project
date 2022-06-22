import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updateServices } from '../store/actions/ServicesActions';

function EditServices() {
    const service = useSelector(state => state.servicesReducer.service);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [serviceId, setServiceId] = useState(service.serviceId);
    const [serviceName, setServiceName] = useState(service.serviceName);
    const [serviceCost, setServiceCost] = useState(service.cost);
    
    
    

    const handleSubmit = () => {
        const payload = {
            serviceId: serviceId,
            serviceName: serviceName,
            cost:serviceCost
            
        }
        dispatch(updateServices(payload));
        alert("Service Updated.")
        navigate(-1);
    }
    return (
        <div>
            <div className="container">
                <h2 style={{ backgroundColor: "lightblue" }}>Service Form</h2>

                <div className="form-group">
                    <label htmlFor='ServiceId'>ServiceId :</label>

                    <input type="text" className="form-control" name="serviceId" value={serviceId} disabled />

                </div>
                <div className="form-group">
                    <label htmlFor='serviceName'>serviceName :</label>

                    <input type="text" className="form-control" name="serviceName" value={serviceName} onChange={v => setServiceName(v.target.value)} />

                </div>
                <div className="form-group">
                    <label htmlFor='Cost'>Cost :</label>

                    <input type="text" className="form-control" name="cost" value={serviceCost} onChange={v => setServiceCost(v.target.value)} />

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


export default EditServices;