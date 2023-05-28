import React from 'react';
import luxpool from "./img/lux-pool.jpg";
import yellowbus from "./img/yellow-bus.jpg";

export const Promotion  = () => {
        return (
        <div className='container-fluid'>
          <div className="row mx-y">
            <div className='col-6 promotion-image' style={{ backgroundImage: `url(${yellowbus})` }}></div>
            <div className='col-6 p-5 background-green align-middle'>
            <h3 className='gradient-headline'>
            Experience the Magic of a Yellow Road Trip Bus Adventure!
            </h3>
            <p className='pt-3 custom-paragraph'>
            Discover the thrill of hitting the open road and embark on a journey unlike any other. Our Yellow Road Trip Bus vacations are the perfect way to explore the world with a sense of freedom and nostalgia.   
            
            </p>
            <p className='custom-paragraph'>
            Hop aboard our iconic and charming yellow buses, reminiscent of a bygone era, and get ready for an unforgettable adventure. 
            </p>
            </div>
          </div>
          <div className="row">
            <div className='col-6 background-blue p-5 align-middle'>
            <h3 className='gradient-headline'>
            Indulge in the Ultimate Luxury Getaway at our Philippines Resort

            </h3>
            <p className='pt-3 custom-paragraph'>
        
            Escape to a world of opulence and tranquility at our luxurious resort in the Philippines. Nestled amidst pristine landscapes, our property offers a serene sanctuary where you can unwind and rejuvenate.
            </p>
            <p className='custom-paragraph'>
    Book your dream vacation today and let us pamper you in a world of elegance and serenity. Discover the perfect blend of relaxation, adventure, and indulgence as you create memories to last a lifetime.
            </p>
            </div>
            <div className='col-6 promotion-image' style={{ backgroundImage: `url(${luxpool})` }}></div>
          </div>
        </div>
           
        );
    
};


