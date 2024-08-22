import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
export default function Login() {
  const [credential, setcredential] = useState({
    email: "",
    password: "",
  });
  let navigate = useNavigate();

  function onchange(event) {
    setcredential((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("https://gofood-backend-gx42.onrender.com/api/loginuser", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        email: credential.email,
        password: credential.password
      }),
    });
    const json = await response.json();
    // console.log(json);
    if (!json.success) {
      alert("Enter valid credentials");
    }
    if(json.success)
    {
      localStorage.setItem("userEmail",credential.email);
      localStorage.setItem("authToken",json.authToken);
      // console.log(localStorage.getItem("authToken"));
      navigate('/');
    }
  };

  return (
    <div
      style={{
        backgroundImage:
          'url("https://images.pexels.com/photos/1565982/pexels-photo-1565982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
        backgroundSize: "cover",
        height: "100vh",
      }}
    >
      <div>
        <Navbar />
      </div>

      <div className="container">
        <form
          className="w-50 m-auto mt-5 border bg-dark border-success rounded"
          onSubmit={handleSubmit}
        >
          <div className="m-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              name="email"
              placeholder="Enter your email"
              value={credential.email}
              onChange={onchange}
              aria-describedby="emailHelp"
            />
            
          </div>
          <div className="m-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter your password"
              value={credential.password}
              onChange={onchange}
              name="password"
            />
          </div>
          <button type="submit" className="m-3 btn btn-success">
            Login
          </button>
          <Link to="/createuser" className="m-3 mx-1 btn btn-danger">
            New User
          </Link>
        </form>
      </div>
    </div>
  );
}
