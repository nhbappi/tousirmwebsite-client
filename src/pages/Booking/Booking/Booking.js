import React, { useState } from 'react';
import BookingBanner from '../BookingBanner/BookingBanner';
import AvailableBooking from '../AvailableBooking/AvailableBooking';

const Booking = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    return (
        <div>
            <BookingBanner 
            selectedDate={selectedDate}
            setSelectedDate= {setSelectedDate}
            ></BookingBanner>
            <AvailableBooking
            selectedDate={selectedDate}
           
            ></AvailableBooking>
        </div>
    );
};

export default Booking;