import React from 'react';

import service from './img/service.png';
import world from './img/world.png';
import payment from './img/payment.png';
export const Services  = () => {
        return (
        <div>
          <div className='row'>
            <div className='col-4'>
              <div class="card text-left">
                <img class="card-img-top" src={payment} width="100%" height="auto"alt=""/>
                <div class="card-body">
                  <h4 class="card-title">Title</h4>
                  <p class="card-text">Body</p>
                </div>
              </div>
            </div>
            <div className='col-4'>
               <div class="card text-left">
                <img class="card-img-top" src={service} alt=""/>
                <div class="card-body">
                  <h4 class="card-title">Title</h4>
                  <p class="card-text">Body</p>
                </div>
              </div>
            </div>
            <div className='col-4'>
               <div class="card text-left">
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


