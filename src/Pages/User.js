import React from "react";
//import "./User.css";
import { Link } from "react-router-dom";
const Users = ({ User }) => {
  return (
    <div>
      <div className="card-container">
        <div className="card u-clearfix">
          <div className="card-body">
            <span className="card-number card-circle subtle">
              {User.id} 
            </span> 
            <span className="card-author subtle">{User.company}</span>
            <h2 className="card-title">{User.name}</h2>
            <span className="card-description subtle">
              {User.strInstructions}
            </span>

            <Link
              className="btn btn-primary btn-details"
              to={`/Home/User/${User.id}`}
            >
              Details
            </Link>
            <span className="card-tag card-circle subtle">
            
            </span>
          </div>
          
        </div>
        <div className="card-shadow"></div>
      </div>
    </div>
  );
};

export default Users;