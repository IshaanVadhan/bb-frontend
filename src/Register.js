import React, { useState } from "react";
import "./style/forms.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    leaderName: "",
    leaderEmail: "",
    leaderContact: 0,
    member1Name: "",
    member2Name: "",
    member3Name: "",
    password: "",
    roomId: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://bb-backend-m1xa.onrender.com/users/register",
        formData
      );
      console.log(response.data);
      alert("User created");
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <div className="container">
      <div className="form1">
        <h1 className="formTitle">Registration</h1>
        <form onSubmit={handleSubmit}>
          <div className="field">
            <div>
              <label className="label">Leader Name</label>
              <input
                type="text"
                name="leaderName"
                placeholder="Enter leader's Name"
                value={formData.leaderName}
                onChange={handleChange}
              ></input>
            </div>

            <div>
              <label className="label">Leader Email</label>
              <input
                type="email"
                name="leaderEmail"
                placeholder="Enter leader's Email"
                value={formData.leaderEmail}
                onChange={handleChange}
              ></input>
            </div>
            <div>
              <label className="label">Leader Contact</label>
              <input
                type="number"
                name="leaderContact"
                placeholder="Enter leader's Contact no"
                value={formData.leaderContact}
                onChange={handleChange}
              ></input>
            </div>
            <div>
              <label className="label">Member1 Name</label>
              <input
                type="text"
                name="member1Name"
                placeholder="Enter Member1 Name"
                value={formData.member1Name}
                onChange={handleChange}
              ></input>
            </div>
            <div>
              <label className="label">Member2 Name</label>
              <input
                type="text"
                name="member2Name"
                placeholder="Enter Member2 Name"
                value={formData.member2Name}
                onChange={handleChange}
              ></input>
            </div>
            <div>
              <label className="label">Member3 Name</label>
              <input
                type="text"
                name="member3Name"
                placeholder="Enter Member3 Name"
                value={formData.member3Name}
                onChange={handleChange}
              ></input>
            </div>
            <div>
              <label className="label">Room ID</label>
              <input
                type="text"
                name="roomId"
                placeholder="Enter Room ID"
                value={formData.roomId}
                onChange={handleChange}
              ></input>
            </div>
            <div>
              <label className="label">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Enter Password"
                value={formData.password}
                onChange={handleChange}
              ></input>
            </div>
            {/* <input type="hidden" name="qID" value={formData.roomId}></input> */}
            <button type="submit" className="btn">
              REGISTER
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
