import React, {  useState } from "react";
import Axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { CreateUser } from "../store/actions/UserActions";
import {useDispatch,useSelector} from 'react-redux';
import img from '../Image/theme2.jpg';


function SaveUser() {
    const [name, setName] = useState("");
    const [userName, setUserName] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [userCity, setUserCity] = useState("");
    const [userGender, setUserGender] = useState("");
    const [userMobile, setUserMobile] = useState("");
    const [userEmail, setUserEmail] = useState("");

    const [formErrors, setFormErrors] = useState({});


    const newUser = useSelector(state => state.userReducer.newUser)

    const dispatch = useDispatch();

    const navigate=useNavigate();



    const handleSubmit = () => {

        //validate form data
        let errors = {};

        if(!name) {
            errors['nameError'] = " Name is required";
        }
        if(!userName) {
            errors['userNameError'] = "UserName is required";
           
        }
         if(!userPassword) {
            errors['userPasswordError'] = "password is required";
        }
        if(!userCity) {
            errors['userCityError'] = " City is required";
        }
        if(!userGender) {
            errors['userGenderError'] = " Gender is required";
        }
        if(!userMobile) {
            errors['userMobileError'] = " Mobile is required";
        }
        if(!userEmail) {
            errors['userEmailError'] = " Email is required";
        }
        setFormErrors(errors);

        const noErrors = Object.keys(errors).length === 0;
        if(noErrors) {
            console.log("Valid form data");
        const payload = {
            name: name,
            username:userName,
            password:userPassword,
            city: userCity,
            gender: userGender,
            mobile: userMobile,
            email: userEmail

        }
        dispatch(CreateUser(payload));
        alert("User saved");

    }
}

    return (
        <div div className="bg_image"

        style={{

            backgroundImage:`url(${img})`,

            backgroundSize: "cover",

            height: "90vh"

           

            }}>

            
        <div className="container">
            <h2 style={{ backgroundColor: "lightblue" }}>User Form</h2>
            <div className="form-group">
                <label htmlFor='Name'>Name :</label>

                <input type="text" className="form-control" name="Name" value={name} onChange={e => setName(e.target.value)} />
                {
                   formErrors.nameError &&
                   <div style={{color:'red'}}>{formErrors.nameError}</div> 
                }

            </div>
            <div className="form-group">
                <label htmlFor='userName'>UserName :</label>

                <input type="text" className="form-control" name="UserName" value={userName} onChange={e => setUserName(e.target.value)} />
                {
                   formErrors.userNameError &&
                   <div style={{color:'red'}}>{formErrors.userNameError}</div> 
                }

            </div>
            <div className="form-group">
                <label htmlFor='userPassword'>password:</label>

                <input type="text" className="form-control" name="password" value={userPassword} onChange={e => setUserPassword(e.target.value)} />
                {
                   formErrors.userPasswordError &&
                   <div style={{color:'red'}}>{formErrors.userPasswordError}</div> 
                }

            </div>

            <div className="form-group">
                <label htmlFor='userCity'>City:</label>

                <input type="text" className="form-control" name="userCity" value={userCity} onChange={e => setUserCity(e.target.value)} />
                {
                   formErrors.userCityError &&
                   <div style={{color:'red'}}>{formErrors.userCityError}</div> 
                }

            </div>

            <div className="form-group">
                <label htmlFor='userCity'> Gender:</label>

                <input type="text" className="form-control" name="userGender" value={userGender} onChange={e => setUserGender(e.target.value)} />
                {
                   formErrors.userGenderError &&
                   <div style={{color:'red'}}>{formErrors.userGenderError}</div> 
                }

            </div>

            <div className="form-group">
                <label htmlFor='userMobile'>UserMobile:</label>

                <input type="text" className="form-control" name="userMobile" value={userMobile} onChange={e => setUserMobile(e.target.value)} />
                {
                   formErrors.userMobileError &&
                   <div style={{color:'red'}}>{formErrors.userMobileError}</div> 
                }

            </div>

            <div className="form-group">
                <label htmlFor="userEmail">UserEmail:</label>
                <input type="text" className="form-control" name="userEmail" value={userEmail} onChange={e => setUserEmail(e.target.value)} />
                {
                   formErrors.userEmailError &&
                   <div style={{color:'red'}}>{formErrors.userEmailError}</div> 
                }


            </div>
            </div>

            <div>
                <button onClick={handleSubmit} className="btn btn-primary">Submit</button>
            </div>

            <div style={{ float: "right" }}>
                 <Link to="/"><button type="button" className="btn btn-secondary">BackToHome</button></Link> 
               
            </div>







        </div>
        
    )

}
export default SaveUser;