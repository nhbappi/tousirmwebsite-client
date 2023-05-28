import { format } from 'date-fns';
import React, {  useState } from 'react';
import BookingOption from './BookingOption';
import BookingDetails from '../BookingDetails/BookingDetails';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../Shared/Loading/Loading';

const AvailableBooking = ({selectedDate}) => {
  
    const [books, setBooks] = useState(null);
    const date = format(selectedDate, 'PP');
    const {data:bookingOptions = [], refetch, isLoading} = useQuery({
        queryKey: ['bookingOption', date],
        queryFn: () =>  fetch (`https://tourism-website-server.vercel.app/bookingOption?date=${date}`)
        .then(res => res.json())
    });
    if(isLoading){
        return<Loading></Loading>
    }


   
    return (
        <section className='my-16'>
            <p className='text-center text-primary font-bold'>Available Tour on {format(selectedDate, 'PP')}</p>
            <div className='gap-6 grid grid-cols-1 md:grid-cols-2 grid lg:grid-cols-3 mt-6'>
                {
                    bookingOptions.map(option => <BookingOption
                    key={option.id}
                    bookingOptions = {option}
                    setBooks={setBooks}
                    
                    >

                    </BookingOption>)
                }

            </div>
           { 
           books &&
           <BookingDetails
           selectedDate = {selectedDate}
            books = {books}
            refetch ={refetch}
            setBooks = {setBooks}
            ></BookingDetails>
            }
        </section>
    );
};

export default AvailableBooking;