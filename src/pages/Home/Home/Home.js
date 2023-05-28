import React from 'react';
import Banner from './Banner/Banner';
import Informations from '../Information/Informations';
import Services from '../Services/Services';
import Testimononial from '../Testimonial/Testimononial';
import './Home.css';
import Contact from '../../Contact/Contact';



const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <Informations></Informations>
            <Services></Services>
           
            <Contact></Contact>
<div>
    <h2 className='text-center text-4xl text-primary font-bold my-10'>Blogs</h2>
</div>
            <div className='gap-6 grid grid-cols-1 md:grid-cols-2 grid lg:grid-cols-3 mt-6'>
            <div className="card  shadow-xl">
        <figure><img src="https://images.hindustantimes.com/img/2021/09/03/550x309/3b83168a-0cd3-11ec-9f5a-6ec3df6f49ec_1630686800937.jpg" alt="" /></figure>
        <div className="card-body">
          <h2 className="card-title">
            "Sea Travel"
          </h2>
          <h2 className="">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</h2>
          <div>
            <label 
            htmlFor="booking-modal" 
            className="btn btn-primary"
            >Read More</label>
          </div>
        </div>
      </div>
            <div className="card  shadow-xl">
        <figure><img src="https://images.hindustantimes.com/img/2021/09/03/550x309/3b83168a-0cd3-11ec-9f5a-6ec3df6f49ec_1630686800937.jpg" alt="" /></figure>
        <div className="card-body">
          <h2 className="card-title">
            "Sea Travel"
          </h2>
          <h2 className="">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</h2>
          <div>
            <label 
            htmlFor="booking-modal" 
            className="btn btn-primary"
            >Read More</label>
          </div>
        </div>
      </div>
            <div className="card  shadow-xl">
        <figure><img src="https://images.hindustantimes.com/img/2021/09/03/550x309/3b83168a-0cd3-11ec-9f5a-6ec3df6f49ec_1630686800937.jpg" alt="" /></figure>
        <div className="card-body">
          <h2 className="card-title">
            "Sea Travel"
          </h2>
          <h2 className="">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</h2>
          <div>
            <label 
            htmlFor="booking-modal" 
            className="btn btn-primary"
            >Read More</label>
          </div>
        </div>
      </div>



             </div>


            
            
            
             <Testimononial></Testimononial>
           
        </div>






    );
};

export default Home;