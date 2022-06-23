import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,

} from 'react-router-dom';
import Counter from './components/Counter';
import FetchAllUser from './components/FetchAllUser';
import FetchUser from './components/FetchUser';
import NavBar from './components/NavBar';
import SaveUser from './components/SaveUser';
import EditUser from './components/EditUser';
import FetchAllEnquiry from './components/FetchAllEnquiry';
import FetchEnquiry from './components/FetchEnquiry';
import FetchAllVehicleCategory from './components/FetchAllVehicleCategory';
import FetchVehicleCategory from './components/FetchVehicleCategory';
import SaveVehicleCategory from './components/SaveVehicleCategory';
import EditVehicleCategory from './components/EditVehicleCategory';
import SaveEnquiry from './components/SaveEnquiry';
import Home from './components/Home';
import FetchAllServices from './components/FetchAllServices';
import FetchServices from './components/FetchServices';
import EditServices from './components/EditServices';
import Login from './components/Login';
import UserDashboard from './components/UserDashboard';
import Logout from './components/Logout';




function App() {
  return (
    <div className="App">
      <Router>
      {/* <NavBar/> */}
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/counter" element={<Counter />} />
          <Route path="/user/all" element={<FetchAllUser/>}/>
          <Route path="/user/get/:id" element={<FetchUser/>}/>
          <Route path="/user/save/" element={<SaveUser/>}/>
          <Route path="/user/update/:id" element={<EditUser/>}/>
          <Route path="/enquiry/all" element={<FetchAllEnquiry/>}/>
          <Route path="/enquiry/get/:email" element={<FetchEnquiry/>}/>
          <Route path="/vehicleCategory/all" element={<FetchAllVehicleCategory/>}/>
          <Route path="/vehicleCategory/get/:id" element={<FetchVehicleCategory/>}/>
          <Route path="/vehicleCategory/save/" element={<SaveVehicleCategory/>}/>
          <Route path="/vehicleCategory/update/:id" element={<EditVehicleCategory/>}/>
          <Route path="/enquiry/save/" element={<SaveEnquiry/>}/>
          <Route path="/services/all" element={<FetchAllServices/>}/>
          <Route path="/services/get/:id" element={<FetchServices/>}/>
          <Route path="/services/update/:id" element={<EditServices/>}/>
          <Route path="/user/login" element={<Login/>}/>
          <Route path="/user/dashboard" element={<UserDashboard/>}/>
          <Route path="/user/logout" element={<Logout/>}/>
         
         
          
          
         
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;