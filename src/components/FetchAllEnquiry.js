import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import img1 from '../Image/enquiry.jpg';
import { getTotalEnquiry } from "../store/actions/EnquiryActions";

function FetchAllEnquiry(){
    const enquiries = useSelector(state => state.enquiryReducer.enquiries)
    const dispatch = useDispatch();

    const fetchAllEnquiry = async () => {
        dispatch(getTotalEnquiry())
    };

    useEffect(() => {
        fetchAllEnquiry();

    }, []);

    return (
        <div className="container">
            <h2>All Enquiries</h2>

            <table className="table table-hover">
                <thead>
                <tr>
                    <th>enquiryId</th>
                    <th>query</th>
                    <th>view</th>

                </tr>
                </thead>
                <tbody>
                {
                    enquiries.map((e, index) =>
                        <tr key={index}>
                            <td>{e.enquiryId}</td>
                            <td>{e.query}</td>
                            <td> <Link to={`/enquiry/get/${e.email}`}>View</Link></td>

                        </tr>

                    )
                }
                </tbody>

            </table>

            <div>
                <Link to="/enquiry/save" className="btn btn-primary">Add Enquiry</Link>
            </div>

            <br></br>

            <div>
                <Link to="/" className="btn btn-secondary">BackToHome</Link>
            </div>
        </div>


    )
}
export default FetchAllEnquiry;


