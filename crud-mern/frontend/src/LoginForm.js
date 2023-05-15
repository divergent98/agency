import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

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
    <div className="row pt-5 justify-content-center ">
      <div className="spacer"></div>
      <div className="col-4 mt-5 p-4 background-color">
        <h1 className="text-center my-5">Login</h1>

        <Form>
          <Form.Group>
            <Form.Label>Username</Form.Label>
            <Form.Control
              name="username"
              value={input.username}
              placeholder="Username"
              onChange={handleChange}
            />
            <Form.Label>Password</Form.Label>
            <Form.Control
              name="password"
              value={input.password}
              placeholder="password"
              onChange={handleChange}
            />
          </Form.Group>
          <div class="row justify-content-center">
            <div class="col-4">
              <button
                onClick={handleClick}
                className="mt-5 btn custom-btn btn-8"
              >
                Login
              </button>
            </div>
          </div>
        </Form>
        <div class="row justify-content-center">
          <div class="col-6 text-center">
            <button onClick={() => navigate(-1)} className="mt-5 btn link">
              <p>Back</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
