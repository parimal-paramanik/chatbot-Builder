import React from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const Signup = () => {
const URL= "http://localhost:8080"
const [name, setName] = React.useState("");
const [email, setEmail] = React.useState("");
const [password, setPassword] = React.useState("");
const navigate = useNavigate();

const nameChange = (e) => {
    setName(e.target.value);
  };
  const emailChange = (e) => {
    setEmail(e.target.value);
  };
  const passwordChange = (e) => {
    setPassword(e.target.value);
  };
  const signupFetch = () => {
    let payload = {
      name,
      email,
      password,
    };
    fetch(`${URL}/user/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((response) => response.json())
      .then((res) => {
        if (res.msg === "Registration successful") {
          alert(res.msg);
          navigate("../Login");
        } else {
          alert(res.msg);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signupFetch();
  };


    return (
        <section className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0  ">
            
          <div className="md:w-1/3 max-w-sm">
            <img
              src="https://app.chat360.io/static/media/Login.6edea181.svg"
              alt="imagelink" />
          </div>

          <form  className="md:w-1/3 max-w-sm " onSubmit={handleSubmit}>
            <input className="text-sm w-full px-4 mb-5 py-2 border border-solid border-gray-400 rounded" type="text" placeholder="Enter Full Name"   value={name}
          onChange={nameChange}/>

            <input className="text-sm w-full px-4 py-2 border border-solid border-gray-400 rounded " type="text" placeholder="Email Address"   value={email}
          onChange={emailChange} />

            <input className="text-sm w-full px-4 py-2 border border-solid border-gray-400 rounded mt-4" type="password" placeholder="Password"  value={password}
          onChange={passwordChange} />

            <div className="mt-4 flex justify-between font-semibold text-sm">
              <label className="flex text-slate-500 hover:text-slate-600 cursor-pointer">
                <input className="mr-1" type="checkbox" />
                <span>Remember Me</span>
              </label>
            </div>

            <div className="text-center md:text-left">
              <button className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider" type="submit"  value="Signup">Signup</button>

              <a href='http://localhost:8080/user/auth/google'><button className="mt-4 bg-red-600 hover:bg-red-700 px-4 py-2 ml-4 text-white uppercase rounded text-xs tracking-wider " type="button">Google </button></a>
            </div>

            <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
              Already Registered? <Link to ="/login" className="text-red-600 hover:underline hover:underline-offset-4" >Login</Link>
            </div>
          </form >
        </section>
      );
  
}

export default Signup
