import React from 'react';
import clock from '../../../media/clock.png';
import location from '../../../media/maps-and-flags.png';
import phone from '../../../media/telephone-auricular-with-cable.png';
import Information from './Information';

const Informations = () => {
    const cardData = [
        {
               id: 1,
               name: 'Opening Hours',
               description: 'Open 9.00 to 5.00pm everyday',
               icon: clock,
               bgClass: 'bg-indigo-400'
        },
        {
               id: 2,
               name: 'Our Locations',
               description: 'Open 9.00 to 5.00pm everyday',
               icon: location,
               bgClass: 'bg-accent'
        },
        {
               id: 3,
               name: 'Contact Us',
               description: 'Open 9.00 to 5.00pm everyday',
               icon: phone,
               bgClass: 'bg-indigo-400'
        },
    ]
    return (
        <div className='mt-8 gap-6 grid grid-cols-1 md:grid-cols-2 grid lg:grid-cols-3'>
            {
                cardData.map(card=><Information
                key={card.id}
                card={card}
                ></Information>)
            }
        </div>
    );
};

export default Informations;