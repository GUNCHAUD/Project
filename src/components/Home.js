import React from "react";
import { Link } from "react-router-dom";
import img from '../Image/car4.jpg';
import NavBar from "./NavBar";



function Home(){
    return(
        <div div className="bg_image"

        style={{

            backgroundImage:`url(${img})`,

            backgroundSize: "cover",

            height: "90vh"

           

            }}>
               <NavBar/>
     
        <br></br><br></br><br></br><br></br><br></br>
            <h1 className="text-dark">Welcome to Evehicle Showroom</h1><br></br>

              
             {/* <FetchAllUserTwo/> */}
            {/* <Link to="/user/save">Add user</Link> */}
        </div>
    )
}
export default Home;