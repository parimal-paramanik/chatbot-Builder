import React,{useState} from 'react';
import { Route,Routes } from 'react-router-dom';
import Signuppage from './pages/Signuppage';
import Loginpage from './pages/Loginpage';
import Dashboardpage from './pages/Dashboardpage';

function App() {

  const [isAuth,setIsAuth]=useState(false)
  return (
   <div >
     <Routes>
          <Route path="/" element= {<Signuppage auth={isAuth}  change= {setIsAuth} />}  />
          <Route path="/login" element= {<Loginpage  auth={isAuth}  change= {setIsAuth} />} />
          <Route path="/Dashboard" element= {<Dashboardpage  auth={isAuth}  change= {setIsAuth} />} />
     </Routes>
   
   </div>
  );
}

export default App;
