import React, { useContext } from 'react';
import { AuthContext } from '../../../../contexts/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const MyBooking = () => {
    const { user } = useContext(AuthContext);

    const url = `https://tourism-website-server.vercel.app/booking?email=${user?.email}`;

    const { data: booking = [] } = useQuery({
        queryKey: ['booking', user?.email],
        queryFn: async () => {
            const res = await fetch(url)
;            const data = await res.json();
            return data;
        }
    })
    
    return (
        <div>
            <h3 className='text-3xl'>My Booking</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Tour</th>
                            <th>Date</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            booking.map((booking, i) => <tr key={booking._id}>
                                <th>{i+1}</th>
                                <td>{booking.client}</td>
                                <td>{booking.booking}</td>
                                <td>{booking.slot}</td>
                                <td>{booking.email}</td>
                               
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyBooking;