import React from "react";
import "./style/forms.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Waiting = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const userId = user._id;
  const roomId = user.roomId;

  // useEffect(() => {
  //   localStorage.removeItem("bugSec");
  //   localStorage.removeItem("bugTimer");
  // }, []);

  const handleClick = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get(
        "https://bb-backend-m1xa.onrender.com/bugs/get",
        {
          params: {
            roomId: roomId,
            submittedBy: userId,
          },
        }
      );
      console.log(response.data);
      navigate("/solution");
    } catch (error) {
      alert("Wait");
      console.log(error);
    }
  };
  return (
    <div className="container">
      <div>
        <button className="btn" onClick={handleClick}>
          NEXT
        </button>
      </div>
    </div>
  );
};

export default Waiting;
