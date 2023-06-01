import React,  { useState }  from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,

} from 'reactstrap';



import service from './img/service.png';
import world from './img/world.png';
import payment from './img/payment.png';
export const Services  = () => {

  const [modal, setModal] = useState(false);
  const [backdrop, setBackdrop] = useState(true);
  const [keyboard, setKeyboard] = useState(true);

  const toggle = () => setModal(!modal);

  const changeBackdrop = (e) => {
    let { value } = e.target;
    if (value !== 'static') {
      value = JSON.parse(value);
    }
    setBackdrop(value);
  };

  
        return (
         < div className='background-gray'>
        <div className='container  '>
          <div className='row text-center'>
            <h1 className='gradient-headline big-headline pb-5 pt-5'>Our services</h1>
            <p className='pt-3 roboto font-18 font-light text-gray'>
            Welcome to our tourist agency's website! We are delighted to present you with our exceptional services that cater to your travel needs. With a strong focus on customer satisfaction, we offer a wide range of features to make your travel experiences memorable and hassle-free. <br/><br/>
            Here's what you can expect from our agency:
            </p>
          </div>
          <div className='row py-5'>
            <div className='col-4 px-5' onClick={toggle}>
              <div class="card text-center service-card pt-5 rounded-0" >
                <img class="card-img-top " src={payment} height="auto"alt=""/>
                <div class="card-body">
                  <h4 class="card-title blinker font-24 gradient-headline">Easy Payment Options</h4>
                  <p class="card-text roboto font-16 text-gray mt-3">We offer convenient and flexible payment methods for your dream vacation. </p>
                  <p class="card-text roboto font-16 text-gray mt-3">Read more...</p>
                </div>
              </div>
            </div>
            <div className='col-4 px-5'>
               <div class="card text-center service-card pt-5 rounded-0">
                <img class="card-img-top" src={service} alt=""/>
                <div class="card-body">
                  <h4 class="card-title  blinker font-24 gradient-headline">24/7 Call Center</h4>
                  <p class="card-text roboto font-16 text-gray mt-3">Our travel agency provides round-the-clock support through our dedicated 24/7 call center.</p>
                  <p class="card-text roboto font-16 text-gray mt-3">Read more...</p>
                </div>
              </div>
            </div>
            <div className='col-4 px-5'>
               <div class="card text-center service-card pt-5 rounded-0">
                <img class="card-img-top" src={world} alt=""/>
                <div class="card-body">
                  <h4 class="card-title  blinker font-24 gradient-headline">Trips Around the World</h4>
                  <p class="card-text roboto font-16 text-gray mt-3">Embark on unforgettable journeys to destinations across the globe with our travel agency. </p>
                  <p class="card-text roboto font-16 text-gray mt-3 ">Read more...</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Modal
        isOpen={modal}
        toggle={toggle}

        backdrop={backdrop}

      >

        <ModalBody toggle={toggle}>
        <Button color="transparent align-right" onClick={toggle}>
            Do Something
          </Button>
          <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </ModalBody>
      
      </Modal>
    </div>


        );
    
};


