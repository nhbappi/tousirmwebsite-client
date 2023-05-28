import React from "react";

const Service = ({service}) => {
    const {name,availableSit, slots, Cost, description, image} = service;
  return (
    <div className="card  shadow-xl">
        <figure><img src={image} alt="" /></figure>
        <div className="card-body">
          <h2 className="card-title">
            {name}
            <div className="badge badge-secondary">{slots}</div>
          </h2>
          <div>
            <p className="text-primary">{availableSit} Sit Available</p>
          </div>

          <p>{description}</p>
          <div className="card-actions">
            <div className="text-3xl text-bold">${Cost}</div>
            
          </div>
          <div>
            <button className="btn btn-secondary">Book Now</button>
          </div>
        </div>
      </div>
  );
};

export default Service;
