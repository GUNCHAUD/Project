import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import img from '../Image/theme2.jpg';

import { getAllUsers } from "../store/actions/UserActions";

function FetchAllUser() {
    const users = useSelector(state => state.userReducer.users)
    const dispatch = useDispatch();

    const fetchAllUser = async () => {
        dispatch(getAllUsers())
    };

    useEffect(() => {
        fetchAllUser();

    }, []);


    return (
        <div div className="bg_image"

        style={{

            backgroundImage:`url(${img})`,

            backgroundSize: "cover",

            height: "90vh"

           

            }}>
        <div className="container">
            <h2  className="bg-info text-white">All Users</h2>

            <table className="table table-hover">
                <thead>
                <tr>
                    <th>userId</th>
                    <th>name</th>
                    <th>view</th>

                </tr>
                </thead>
                <tbody>
                {
                    users.map((u, index) =>
                        <tr key={index}>
                            <td>{u.userId}</td>
                            <td>{u.name}</td>
                            <td> <Link to={`/user/get/${u.userId}`}>View</Link></td>

                        </tr>

                    )
                }
                </tbody>

            
            </table>
            <div>
                <Link to="/user/save" className="btn btn-primary">Add User</Link>
            </div>
            <br></br>

            <div>
                <Link to="/" className="btn btn-secondary">BackToHome</Link>
            </div>
        </div>
        </div>

    )
    
}
export default FetchAllUser;