import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

import service from "./img/service.png";
import world from "./img/world.png";
import payment from "./img/payment.png";
import cancel from "./img/cancel.png";
export const Services = () => {
  const [modalPayment, setModalPayment] = useState(false);
  const [modalService, setModalService] = useState(false);
  const [modalWorld, setModalWorld] = useState(false);
  const togglePayment = () => setModalPayment(!modalPayment);
  const toggleService = () => setModalService(!modalService);
  const toggleWorld = () => setModalWorld(!modalWorld);
  return (
    <div className="background-gray py-5">
      <div className="container  ">
        <div className="row text-center">
          <h1 className="gradient-headline big-headline pb-5 pt-5">
            Our services
          </h1>
          <p className="pt-3 roboto font-18 font-light text-gray">
            Welcome to our tourist agency's website! We are delighted to present
            you with our exceptional services that cater to your travel needs.
            With a strong focus on customer satisfaction, we offer a wide range
            of features to make your travel experiences memorable and
            hassle-free. <br />
            <br />
            Here's what you can expect from our agency:
          </p>
        </div>
        <div className="row py-5">
          <div className="col-lg-4 col-md-4 col-sm-12 px-5 mt-5" onClick={togglePayment}>
            <div class="card text-center service-card pt-5 rounded-0">
              <img class="card-img-top " src={payment} height="auto" alt="" />
              <div class="card-body">
                <h4 class="card-title blinker font-24 gradient-headline">
                  Easy Payment Options
                </h4>
                <p class="card-text roboto font-16 text-gray mt-3">
                  We offer convenient and flexible payment methods for your
                  dream vacation.{" "}
                </p>
                <p class="card-text roboto font-16 text-gray mt-3 read-more-service">
                  Read more...
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 px-5 mt-5" onClick={toggleService}>
            <div class="card text-center service-card pt-5 rounded-0">
              <img class="card-img-top" src={service} alt="" />
              <div class="card-body">
                <h4 class="card-title  blinker font-24 gradient-headline">
                  24/7 Call Center
                </h4>
                <p class="card-text roboto font-16 text-gray mt-3">
                  Our travel agency provides round-the-clock support through our
                  dedicated 24/7 call center.
                </p>
                <p class="card-text roboto font-16 text-gray mt-3 read-more-service">
                  Read more...
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 px-5 mt-5" onClick={toggleWorld}>
            <div class="card text-center service-card pt-5 rounded-0">
              <img class="card-img-top" src={world} alt="" />
              <div class="card-body">
                <h4 class="card-title  blinker font-24 gradient-headline">
                  Trips Around the World
                </h4>
                <p class="card-text roboto font-16 text-gray mt-3">
                  Embark on unforgettable journeys to destinations across the
                  globe with our travel agency.
                </p>
                <p class="card-text roboto font-16 text-gray mt-3 read-more-service">
                  Read more...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal
        className="mt-5 modal-lg modal-dialog modal-dialog-centered custom-modal-mobile"
        isOpen={modalPayment}
        toggle={togglePayment}
      >
        <ModalBody toggle={togglePayment} className="">

            <div className="button-end">
              <Button color="transparent " onClick={togglePayment}>
                <img src={cancel}></img>
              </Button>
      
          </div>

          <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-12">
              <div className="modal-image-div ">
                <img src={payment} className="modal-image "></img>
              </div>
            </div>
            <div className="col-lg-9 col-md-9 col-sm-12">
              <h4 class="card-title blinker font-24 gradient-headline ms-3 mt-3">
                  Easy Payment Options
              </h4>
              <p className="custom-paragraph m-3 pb-4">
                At our travel agency, we understand the importance of
                convenience and flexibility when it comes to making payments for
                your dream vacation. That's why we offer a range of easy payment
                options to suit your needs. Whether you prefer to pay upfront or
                in installments, we've got you covered. Our user-friendly online
                platform allows you to effortlessly make payments using various
                methods, ensuring a hassle-free booking experience. We believe
                that planning your trip should be stress-free from start to
                finish, and our easy payment options reflect that commitment.
              </p>
            </div>
          </div>
        </ModalBody>
      </Modal>
      <Modal 
        className="mt-5 modal-lg modal-dialog modal-dialog-centered custom-modal-mobile"
        isOpen={modalService}
        toggle={toggleService}
      >
        <ModalBody toggle={toggleService} className="">
          <div className="button-end">
     
              <Button color="transparent " onClick={toggleService}>
                <img src={cancel}></img>
              </Button>
   
          </div>

          <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-12">
              <div className="modal-image-div ">
                <img src={service} className="modal-image "></img>
              </div>
            </div>
            <div className="col-lg-9 col-md-9 col-sm-12">
            <h4 class="card-title blinker font-24 gradient-headline ms-3 mt-3">
            24/7 Call Center
                </h4>
              <p className="custom-paragraph m-3 pb-4">
                We know that travel plans can sometimes change or unexpected
                situations can arise, which is why our travel agency provides
                round-the-clock support through our dedicated 24/7 call center.
                Our friendly and knowledgeable customer service representatives
                are always ready to assist you, no matter the time zone or the
                nature of your query. Whether you need to modify your itinerary,
                inquire about travel insurance, or seek guidance during your
                trip, our team is just a phone call away. With our reliable 24/7
                call center, you can travel with confidence, knowing that
                assistance is always within reach.
              </p>
            </div>
          </div>
        </ModalBody>
      </Modal>
      <Modal
        className="mt-5 modal-lg modal-dialog modal-dialog-centered custom-modal-mobile"
        isOpen={modalWorld}
        toggle={toggleWorld}
      >
        <ModalBody toggle={toggleWorld} className="">
          <div className="button-end">

              <Button color="transparent " onClick={toggleWorld}>
                <img src={cancel}></img>
              </Button>

          </div>

          <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-12">
              <div className="modal-image-div ">
                <img src={world} className="modal-image "></img>
              </div>
            </div>
            <div className="col-lg-9 col-md-9 col-sm-12">
            <h4 class="card-title blinker font-24 gradient-headline ms-3 mt-3">
            Trips Around the World
                </h4>
              <p className="custom-paragraph m-3 pb-4">
                Embark on unforgettable journeys to destinations across the
                globe with our travel agency. We specialize in creating
                immersive travel experiences that cater to all types of
                adventurers. Whether you crave the vibrant streets of bustling
                cities, the serenity of pristine beaches, the awe-inspiring
                wonders of nature, or the rich cultural heritage of historical
                sites, we have the perfect trip for you. Our expert travel
                consultants meticulously curate itineraries that showcase the
                best each destination has to offer, ensuring that every moment
                of your trip is filled with joy, discovery, and cherished
                memories.
              </p>
            </div>
          </div>
        </ModalBody>
      </Modal>
    </div>
  );
};
