import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "../../Home/Home";
import "./Details.css";
const Details = () => {
  const [userDetails, setuserDetails] = useState([]);
  const { id } = useParams();
  console.log(id);
  const newapi = `https://jsonplaceholder.typicode.com/users/${id}`;
  useEffect(() => {
    fetch(newapi)
      .then((res) => res.json())
      .then((data) => setuserDetails(data))
      .catch("Error in Connecting to database");
  }, [id]);

  return (
    <Home>
      <div className="top">
        <div className="name">{userDetails.name}</div>
        <div className="email">{userDetails.email}</div>
      </div>
      <div className="down">
        <div className="address">{userDetails?.address?.street}</div>
        <div className="phone">{userDetails.phone}</div>
      </div>
    </Home>
  );
};

export default Details;
