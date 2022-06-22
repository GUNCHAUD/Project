import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import img1 from '../Image/enquiry.jpg';
import { useDispatch, useSelector } from "react-redux";
import {fetchEnquiryByEmail} from '../store/actions/EnquiryActions';

function FetchEnquiry() {
   const enquiryList=useSelector(state=>state.enquiryReducer.enquiryList);
   

    const { email } = useParams();
    const dispatch=useDispatch();

    const fetchEnquiry=async()=>{
        dispatch(fetchEnquiryByEmail(email));
    };
   
    useEffect(() => {
        fetchEnquiry(email);

    }, []);
   
   

    return (
        <div className="container">
            <h2>All Enquiries</h2>

            <table className="table table-hover">
                <thead>
                <tr>
                    <th>enquiryId</th>
                    <th>query</th>
                    

                </tr>
                </thead>
                <tbody>
                {
                    enquiryList.map((e, index) =>
                        <tr key={index}>
                            <td>{e.enquiryId}</td>
                            <td>{e.query}</td>
                            

                        </tr>

                    )
                }
                </tbody>

            </table>
            
            
            <div>
                <Link to="/enquiry/all" className="btn btn-secondary">Back</Link>
            </div>
        </div>
    )
}
export default FetchEnquiry;