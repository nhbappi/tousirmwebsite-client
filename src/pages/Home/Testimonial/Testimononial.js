import React from 'react';

import people1 from '../../../media/p1.jpeg'
import people2 from '../../../media/p2.jpg'
import people3 from '../../../media/p3.jpg'
import Review from './Review';

const Testimononial = () => {

    const reviews = [
        {
            _id: 1,
            name: 'adam jampa',
            img: people1,
            review: "tour to St.Martin was our second tour with Bangla.net Travels. we found the tour as pleasant as the previous one",
            location: 'St.Martin',
    },
        {
            _id: 2,
            name: 'Istiak Ahmed Saikot',
            img: people2,
            review: "Sajek tour with Bangla.net Travels was my first tour with a group of unknown person. But team Bangla.net Travels was amazing",
            location: 'Sajek',
    },
        {
            _id: 3,
            name: 'Sakhawat Mohammad',
            img: people3,
            review: "Bangla.net Travels is passionately dedicated to its clients. I have had happy experience with them in the recent past and thus I intend to have even more happy experience",
            location: 'Cox Bazar',
    }


    ]
    return (
        <section className='my-16'>
            <div className='text-center '>
                <div className=''>
                    <h4 className='text-3xl text-primary font-bold '>Testimonial</h4>
                    <h2 className='text-2xl'> What Our Client Says</h2>
                </div>
             

            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    reviews.map(review => <Review
                    key={review._id}
                    review={review}
                    ></Review>)
                }

            </div>
        </section>
    );
};

export default Testimononial;