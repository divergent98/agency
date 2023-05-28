import React from 'react';

import service from './img/service.png';
import world from './img/world.png';
import payment from './img/payment.png';
export const Services  = () => {
        return (
        <div className='container'>
          <div className='row text-center'>
            <h1 className='gradient-headline big-headline pb-5 pt-5'>Our services</h1>
            <p className='pt-3 roboto font-18 font-light text-gray'>
            Welcome to our tourist agency's website! We are delighted to present you with our exceptional services that cater to your travel needs. With a strong focus on customer satisfaction, we offer a wide range of features to make your travel experiences memorable and hassle-free. <br/><br/>
            Here's what you can expect from our agency:
            </p>
          </div>
          <div className='row py-5'>
            <div className='col-4 px-5'>
              <div class="card text-center service-card pt-5 rounded-0" >
                <img class="card-img-top " src={payment} height="auto"alt=""/>
                <div class="card-body">
                  <h4 class="card-title blinker font-24 gradient-headline">Easy Payment Options</h4>
                  <p class="card-text roboto font-16 text-gray ">Read more...</p>
                </div>
              </div>
            </div>
            <div className='col-4 px-5'>
               <div class="card text-center service-card pt-5 rounded-0">
                <img class="card-img-top" src={service} alt=""/>
                <div class="card-body">
                  <h4 class="card-title  blinker font-24 gradient-headline">24/7 Call Center</h4>
                  <p class="card-text roboto font-16 text-gray">Read more...</p>
                </div>
              </div>
            </div>
            <div className='col-4 px-5'>
               <div class="card text-center service-card pt-5 rounded-0">
                <img class="card-img-top" src={world} alt=""/>
                <div class="card-body">
                  <h4 class="card-title  blinker font-24 gradient-headline">Trips Around the World</h4>
                  <p class="card-text roboto font-16 text-gray">Read more...</p>
                </div>
              </div>
            </div>
          </div>
        </div>
           
        );
    
};


