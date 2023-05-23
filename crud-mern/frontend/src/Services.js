import React from 'react';

import service from './img/service.png';
import world from './img/world.png';
import payment from './img/payment.png';
export const Services  = () => {
        return (
        <div className='container'>
          <div className='row pt-5'>
            <div className='col-4 px-5'>
              <div class="card text-center service-card pt-5" >
                <img class="card-img-top " src={payment} height="auto"alt=""/>
                <div class="card-body">
                  <h4 class="card-title">Title</h4>
                  <p class="card-text">Body</p>
                </div>
              </div>
            </div>
            <div className='col-4 px-5'>
               <div class="card text-center service-card pt-5">
                <img class="card-img-top" src={service} alt=""/>
                <div class="card-body">
                  <h4 class="card-">Title</h4>
                  <p class="card-text">Body</p>
                </div>
              </div>
            </div>
            <div className='col-4 px-5'>
               <div class="card text-center service-card pt-5">
                <img class="card-img-top" src={world} alt=""/>
                <div class="card-body">
                  <h4 class="card-title">Title</h4>
                  <p class="card-text">Body</p>
                </div>
              </div>
            </div>
          </div>
        </div>
           
        );
    
};


