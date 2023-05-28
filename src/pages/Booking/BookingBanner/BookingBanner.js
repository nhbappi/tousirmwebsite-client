import React from "react";
import cover from '../../../media/tours_travels_noida.jpg'
import { DayPicker } from 'react-day-picker';


const BookingBanner = ({selectedDate, setSelectedDate}) => {
   
  return (
    <header className="my-6">
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={cover}
            className="max-w-sm  rounded-lg shadow-2xl" alt=""
          />
          <div className="mr-6">
            <DayPicker
            mode="single"
            selected={selectedDate}
            onSelect={setSelectedDate}
            ></DayPicker>
           
          </div>
        </div>
      </div>
    </header>
  );
};

export default BookingBanner;
