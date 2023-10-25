import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import airplane_wing from "./img/airplane-wing.jpg"
function LoginForm() {
  const user = {
    username: "admin",
    password: "admin123",
    key: 1,
  };

  const navigate = useNavigate();
  const [input, setInput] = useState({});
  const handleChange = (event) => {
    console.log(event.target);
    const { name, value } = event.target;
    setInput((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const handleClick = (event) => {
    event.preventDefault();
    if (user.password === input.password && user.password === input.password) {
      navigate("/create/product");
    } else {
      console.log(input.username + " " + input.username);
    }
  };
  return (
    <div className="row">
      <div
        className="col-7 background"
        style={{
          backgroundImage: `url(${airplane_wing})`,
        }}
      >
        <div className="login-slogan">
          <h1>Explore More,</h1>
        <h1>Worry Less.</h1>
        </div>
     
      </div>
      <div className="col-5  background">
        <div>
        <h1 className="text-center text-secondary blinker">Login</h1>

        <Form className="roboto">
          <Form.Group>
     
            <Form.Control
              name="username"
              className="mb-3"
              value={input.username}
              placeholder="Username"
              onChange={handleChange}
            />

            <Form.Control
              name="password"
              value={input.password}
              placeholder="password"
              onChange={handleChange}
            />
         
  
          </Form.Group>
     <button
                onClick={handleClick}
                className="mt-5 btn btn-secondary w-100"
              >
                Login
              </button>
        
        </Form>


            <button onClick={() => navigate(-1)} className="mt-5 btn link w-100">
              Back to website
            </button>

        </div>
      </div>
    </div>
  );
}

export default LoginForm;
