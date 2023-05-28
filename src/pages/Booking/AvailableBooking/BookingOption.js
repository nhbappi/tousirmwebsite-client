import React from 'react';

const BookingOption = ({bookingOptions, setBooks}) => {
    const {name,availableSit, slots, Cost, description, image} = bookingOptions;
    return (
        <div className="card  shadow-xl">
        <figure><img src={image} alt="" /></figure>
        <div className="card-body">
          <h2 className="card-title">
            {name}
            <div className="badge badge-secondary">{slots.length > 0 ? slots[0] : 'Try Another Day'}</div>
          </h2>
          <div>
            <p className='text-primary'>{availableSit} Sit Available</p>
          </div>

          <p>{description}</p>
          <div className="card-actions">
            <div className="text-3xl text-bold">${Cost}</div>
            
          </div>
          <div>
            <label 
            htmlFor="booking-modal" 
            className="btn btn-primary"
            onClick={() => setBooks(bookingOptions)}
            >Book Now</label>
          </div>
        </div>
      </div>
    );
};

export default BookingOption;