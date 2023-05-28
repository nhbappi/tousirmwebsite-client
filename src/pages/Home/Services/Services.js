import React from 'react';
import coxBazar from '../../../media/cox.jpg';
import shundarban from '../../../media/shundarban.jpg';
import shajek from '../../../media/sajek.jpg';
import Service from './Service';


const Services = () => {
    const servicesData = [
        {
        id: 1,
            "name": "সিকিম ভ্রমণ",
            "Cost": 250,
            "slots": [
                "25-28 MAY 2023 "
            ],
            "availableSit": [
                15
            ],
            "description": "সিকিমের সৌন্দর্য্য নিয়ে বেশি কিছু বলার দরকার নেই। পাহাড়ি রুপ-মাধুর্য্যে মন হারিয়ে যাবার মতো সৌন্দর্য্যে ভরপুর এই সিকিম। সিকিম ভারতের উত্তর-পূর্বাঞ্চলের একটি রাজ্য এবং উল্লেখযোগ্য পর্যটন কেন্দ্র; এর উত্তর ও উত্তর-পূর্বাঞ্চলে চীনের স্বায়ত্তশাসিত অঞ্চল তিব্বত,পশ্চিমে নেপাল এবং দক্ষিণে ভারতের অপর একটি রাজ্য পশ্চিমবঙ্গ।",
         "image": "https://media.graphassets.com/resize=width:400/YABkFNDS2sfkwbpXfkEA"
        },
        
        {
            id: 2,
            "name": "সাজেক ভ্রমন",
            "Cost": 280,
            "slots": [
                "02-05 JUNE 2023 "
            ],
            "availableSit": [
                15
            ],
            "description": "সাজেকে পাহাড়ের গায়ে হেলান দিয়ে মেঘ ঘুমায়, পাহাড়ের বন্ধনহীন মিলন দেখা যায়। কোথাও কোথাও তুলার মতো দলছুট মেঘের স্তুপ ভেসে বেড়ায় পাহাড়ের চূড়ায় – এ যেন এক স্বপ্নরাজ্য! বলছি সাজেক এর কথা।",
            "image": "https://media.graphassets.com/resize=width:600/WHpZonoTEujpPxQdQwfL"
        },
        
        {
            id: 3,
            "name": "মেঘালয় ভ্রমণ",
            "Cost": 250,
            "availableSit": [
                15
            ],
            "slots": [
                "08-12 MAY 2023 "
            ],
             "description": "মেঘালয় (ইংরেজী Meghalaya) উত্তর-পূর্ব ভারতের ছবির মত সুন্দর একটি রাজ্য যার রাজধানী শিলং। মেঘের জন্য যেখানে চারপাশে দেখা যায় না কিছু। এর মধ্যেও যা দেখবেন পাহাড়ের উপর থেকে মাথা ঘুরিয়ে দেয়ার জন্য যাথেষ্ট।",
            "image": "https://media.graphassets.com/resize=width:600/Pb3vLNiQ7SBrEKAgFsHQ"
            
        }
     ]
    return (
        <div className='mt-16'>
            <div className='text-center'>
                <h3 className='font-bold text-xl text-primary uppercase'>Available Tours</h3>
                <h2 className='text-3xl '>Best Tour Package</h2>


            </div>
            <div className='gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                servicesData.map(service => <Service
                key={service.id}
                service={service}
                ></Service>)
                }

            </div>
        </div>
    );
};

export default Services;