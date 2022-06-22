import React, { useState } from "react";
import Axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { CreateEnquiry } from "../store/actions/EnquiryActions";
import { useDispatch, useSelector } from 'react-redux';

function SaveEnquiry() {
    const [userId, setUserId] = useState("");
    const [query, setQuery] = useState("");

    const newEnquiry = useSelector(state => state.enquiryReducer.newEnquiry)

    const dispatch = useDispatch();

    const navigate=useNavigate();

    const handleSubmit = () => {
        const payload = {
            userId:userId,
            query:query

        }
        dispatch(CreateEnquiry(payload));
        alert("Enquiry saved");

}
return (
    <div className="container">
        <h2 style={{ backgroundColor: "lightblue" }}>Enquiry Form</h2>
        <div className="form-group">
            <label htmlFor='userId'>UserId :</label>

            <input type="text" className="form-control" name="userId" value={userId} onChange={e => setUserId(e.target.value)} />

        </div>

        <div className="form-group">
            <label htmlFor='userCity'>query:</label>

            <input type="text" className="form-control" name="query" value={query} onChange={e => setQuery(e.target.value)} />

        </div>

        <div>
                <button onClick={handleSubmit} className="btn btn-primary">Submit</button>
            </div>

            <div style={{ float: "right" }}>
                 <Link to="/"><button type="button" className="btn btn-secondary">BackToHome</button></Link> 
                <button onClick={()=>navigate(-1)} className="btn btn-secondary">Go Back Home</button>
            </div>

        </div>
    )

}
export default SaveEnquiry;