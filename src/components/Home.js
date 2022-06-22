import React from "react";
import { Link } from "react-router-dom";
import img from '../Image/car3.jpg';



function Home(){
    return(
        <div div className="bg_image"

        style={{

            backgroundImage:`url(${img})`,

            backgroundSize: "cover",

            height: "90vh"

           

            }}>
        
        
        <br></br><br></br><br></br><br></br><br></br>
            <h1 className="text-info">Welcome to Evehicle Showroom</h1><br></br>

              
             {/* <FetchAllUserTwo/> */}
            {/* <Link to="/user/save">Add user</Link> */}
        </div>
    )
}
export default Home;