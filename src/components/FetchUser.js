import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import img1 from '../Image/user.jpg';
import { useDispatch, useSelector } from "react-redux";
import {FetchUserById} from '../store/actions/UserActions'

function FetchUser() {
   const user=useSelector(state=>state.userReducer.user);
   

    const { id } = useParams();
    const dispatch=useDispatch();

    const fetchUserById=async()=>{
        dispatch(FetchUserById(id));
    };
   
    useEffect(() => {
        fetchUserById(id);

    }, []);
   
   

    return (
        <div>
            <h2 className="bg-info text-white">User Details</h2>
            {
                user !== null &&
                

                <div className="row">
                    <div className="col">
                        <img  src={img1} alt="Card image" />


                    </div>
                    <div className="col">

                        <p>UserId :{user.userId}</p>
                        <p>Name:{user.name}</p>
                        <p>UserName:{user.username}</p>
                        <p>Password:{user.password}</p>
                        <p>City:{user.city}</p>
                        <p>Gender:{user.gender}</p>
                        <p>UserMobile:{user.mobile}</p>
                        <p>UserEmail:{user.email}</p>

                        <Link to={`/user/update/${user.userId}`} className="btn btn-primary">Edit</Link> &nbsp;&nbsp;
                        
                    </div>
                </div>

            }
            <div>
                <Link to="/user/all" className="btn btn-secondary">Back</Link>
            </div>
        </div>
    )
}
export default FetchUser;