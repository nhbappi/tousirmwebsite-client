import React, { useEffect, useState } from 'react';

const ManageTour = () => {
    const [tours, setTours] = useState([]);
    useEffect(() => {
        fetch("https://tourism-website-server.vercel.app/tour")
            .then((res) => res.json())
            .then((data) => setTours(data));
    }, []);





    
    return (
        <div className="manage_products_container container w-100%">
            <h1 className="text-center text-danger m-3 me-5">Manage Tour</h1>

        {tours.map((tour) => (

<div className="card  shadow-xl mt-5">
<figure className=''><img className='w-64 ' src={tour.image} alt="" /></figure>
<div className="card-body">
  <h2 className="card-title">
    {tour.name}
    <div className="badge badge-secondary">{tour.slots}</div>
  </h2>
  <div>
    <p>{tour.availableSit}Sit Available</p>
  </div>

  <p>{tour.description}</p>
  <div className="card-actions">
    <div className="badge badge-outline">{tour.cost}</div>
    
  </div>
  <div>
  <button className='btn btn-primary'>Book Now</button>
  </div>          
 </div>
</div>


  ))}
</div>


        
    );
};

export default ManageTour;