import React from 'react';

function UserDashboard() {

    const myUser = localStorage.getItem("myUser");
    console.log(myUser);

    return (
        <div>
            {myUser !== null ?
                <div>
                    <h4>Welcome {JSON.parse(myUser).userName}</h4>
                    <h2>User  DashBoard</h2>       


                </div>
                : <h2>Please Login</h2>
            }

        </div>
    )

}

export default UserDashboard;