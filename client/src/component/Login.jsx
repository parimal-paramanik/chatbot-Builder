import React ,{useState}from "react";
import {useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';


const Login = ({isAuth,change}) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
   const  navigate= useNavigate()

   function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  function loginFetch() {
    const payload = {
      email,
      password,
    };

    fetch("http://localhost:8080/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        
      },
      body: JSON.stringify(payload),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if(data.msg === "Login success"){
          // document.cookie = data.accessToken
          localStorage.setItem("authorization", data.accessToken)
          alert("login successfull")

          change(true);
          navigate("../Dashboard")
          
        }
        else{
          alert(data.msg)
        }
        
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function handleSubmit(e) {
    e.preventDefault();
    loginFetch();
  }
    return (
        <section className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
          <div className="md:w-1/3 max-w-sm">
            <img
              src="https://app.chat360.io/static/media/AccountCreate.0dae923e.svg"
              alt="imagelink" />
          </div>
          <form className="md:w-1/3 max-w-sm" onSubmit={handleSubmit}>

            <input className="text-sm w-full px-4 py-2 border border-solid border-gray-400 rounded" type="text" placeholder="Email Address"  value={email}
            onChange={handleEmailChange} />
            <input className="text-sm w-full px-4 py-2 border border-solid border-gray-400 rounded mt-4" type="password" placeholder="Password"  value={password}
            onChange={handlePasswordChange} />
            
            <div className="text-center md:text-left">
              <button className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider" type="submit">Login</button>
            </div>
            <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
              Don't have an account? <Link to="/" className="text-red-600 hover:underline hover:underline-offset-4" >Register</Link>
            </div>
          </form>
        </section>
      );
}

export default Login
