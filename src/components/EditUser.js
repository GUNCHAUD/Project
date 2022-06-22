import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updateUser } from '../store/actions/UserActions';


function EditUser() {
    const user = useSelector(state => state.userReducer.user);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [userId, setUserId] = useState(user.userId)
    const [name, setName] = useState(user.name);
    const [username, setUserName] = useState(user.username);
    const [password, setPassword] = useState(user.password);
    const [userCity, setUserCity] = useState(user.city);
    const [userGender, setUserGender] = useState(user.gender);
    const [userMobile, setUserMobile] = useState(user.mobile);
    const [userEmail, setUserEmail] = useState(user.email);

    const handleSubmit = () => {
        const payload = {
            userId: userId,
            name: name,
            username:username,
            password:password,
            city: userCity,
            gender: userGender,
            mobile: userMobile,
            email: userEmail
        }
        dispatch(updateUser(payload));
        alert("user Updated.")
        navigate(-1);
    }

    return (
        <div>
            <div className="container">
                <h2 style={{ backgroundColor: "lightblue" }}>User Form</h2>

                <div className="form-group">
                    <label htmlFor='userId'>UserId :</label>

                    <input type="text" className="form-control" name="userId" value={userId} disabled />

                </div>
                <div className="form-group">
                    <label htmlFor='userName'>Name :</label>

                    <input type="text" className="form-control" name="Name" value={name} onChange={e => setName(e.target.value)} />

                </div>
                <div className="form-group">
                    <label htmlFor='userName'>UserName :</label>

                    <input type="text" className="form-control" name="UserName" value={username} onChange={e => setUserName(e.target.value)} />

                </div>
                <div className="form-group">
                    <label htmlFor='userName'>Password :</label>

                    <input type="text" className="form-control" name="Password" value={password} onChange={e => setPassword(e.target.value)} />

                </div>

                <div className="form-group">
                    <label htmlFor='userCity'>City:</label>

                    <input type="text" className="form-control" name="userCity" value={userCity} onChange={e => setUserCity(e.target.value)} />

                </div>

                <div className="form-group">
                    <label htmlFor='userGender'> Gender:</label>

                    <input type="text" className="form-control" name="userGender" value={userGender} onChange={e => setUserGender(e.target.value)} />

                </div>

                <div className="form-group">
                    <label htmlFor='userMobile'>UserMobile:</label>

                    <input type="text" className="form-control" name="userMobile" value={userMobile} onChange={e => setUserMobile(e.target.value)} />

                </div>

                <div className="form-group">
                    <label htmlFor="userEmail">UserEmail:</label>
                    <input type="text" className="form-control" name="userEmail" value={userEmail} onChange={e => setUserEmail(e.target.value)} />

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


export default EditUser;
