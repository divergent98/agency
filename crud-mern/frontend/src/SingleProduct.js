import React from "react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Modal, Button,  ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import {Form } from "react-bootstrap";
import axios from "axios";
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";
import moment from "moment";
import check from "./img/check-mark.png";
import calendar from "./img/calendar.png";
import cancel from "./img/cancel.png";
const SingleProduct = () => {
  const [reservation, setReservation] = useState({
    name: "",
    lastname: "",
    phone: "",
    email: "",
    destination: "",
    cardno: "",
    carddate: "",
    cvc: ""
  });
  const handleClick = (event) => {
    event.preventDefault();

    axios.post("/createReservation", reservation)
    .then((res) =>console.log(res))
    .catch((err) =>console.log(err));
   
    toggleRegistration()

  }
  const handleChange = (event) => {
    console.log(event.target);
    const {name, value} = event.target;
    setReservation(prev =>{
        return{
            ...prev,
            [name]: value,
        };
    });
  };

  
  
  const { productId } = useParams();
  const [products, setProducts] = React.useState(null);
  const [modalRegistration, setModalRegistration] = useState(false);
  const toggleRegistration = () => setModalRegistration(!modalRegistration);
  React.useEffect(() => {
    axios.get("/products").then((response) => {
      setProducts(response.data);
    });
  }, []);
  if (!products) return null;
  console.log(products);
  console.log(productId);
  const product = products.find((product) => product._id === productId);
  	const string = product.description;
    let items= string.split(', ');
    const formattedDate = moment(product.date).format('DD-MM-YYYY')

    reservation.destination = product.name;





  return (
    <section>
              <div className="col-4 px-5" onClick={toggleRegistration}>
          
          </div>
      <Navigation />
      <div className="banner"></div>
      <Modal
        className="mt-5 modal-lg modal-dialog modal-dialog-centered"
        isOpen={modalRegistration}
        toggle={toggleRegistration}
      >
        <ModalBody toggle={toggleRegistration} className="">
          <div className="row justify-content-end">
            <div className="col-1">
              <Button color="transparent" onClick={toggleRegistration}>
                <img src={cancel}></img>
              </Button>
            </div>
          </div>

          <div className="row">
            <div className="col-3">
              <div className="modal-image-div ">
                <img className="modal-image "></img>
              </div>
            </div>
            <div className="col-9">
              <h4 class="card-title blinker font-24 gradient-headline ms-3">
                  Easy Payment Options
              </h4>
              <Form>
        <Form.Label>Name</Form.Label>
      <Form.Group> 
        <Form.Control
        name="name"
        value={reservation.name}
        placeholder="name"
        onChange={handleChange}
      />
       <Form.Label>Last name</Form.Label>   
       <Form.Control
          name="lastname"
          value={reservation.lastname}
          placeholder="lastname"
          onChange={handleChange}
        />
          <Form.Label>Phone</Form.Label>   
       <Form.Control
          name="phone"
          value={reservation.phone}
          placeholder="phone"
          onChange={handleChange}
        />
               <Form.Label>Email</Form.Label>   
           <Form.Control
          name="email"
          value={reservation.email}
          placeholder="email"
          onChange={handleChange}
        />
                 <Form.Label>Card number</Form.Label>   
           <Form.Control
          name="cardno"
          value={reservation.cardno}
          placeholder="cardnumber"
          onChange={handleChange}
        />
                 <Form.Label>Expiration date</Form.Label>   
           <Form.Control
          name="carddate"
          value={reservation.carddate}
          placeholder="carddate"
          onChange={handleChange}
        />
                    <Form.Label>CVC</Form.Label>   
           <Form.Control
          name="cvc"
          value={reservation.cvc}
          placeholder="cvc"
          onChange={handleChange}
        />
      </Form.Group>
      <Button  variant="secondary" className="mt-5" onClick={handleClick}>Add Product</Button>
    </Form>
            </div>
          </div>
        </ModalBody>
      </Modal>
      <div className="container product-view">
        <div className="row justify-content-center gx-5">
          <div className="col-5 me-5 product-image"    style={{ backgroundImage: `url(${product.image})` }}
            >
          
          
            </div>
            <div className="col-6">
                <h2 className="product-title">{product.name}</h2>
                <h2 className="product-price">$ {product.price}</h2>
                <hr></hr>
                <div className="product-body">
                  <div className="my-3 border border-1 w-50 p-2">
                <img className="calendar" src={calendar}/><span className="product-item">{formattedDate}</span>
                </div>
                  <ul>
                  {items.map( item =>(
                        <li className="ps-2"><img src={check}/><span className="product-item ">{item}</span></li>
                        )
                    )}
                  </ul>
                  <div>
             <Link class="btn custom-button save-changes-button big-btn text-light border-0 rounded-0 pt-3 pb-5 mt-5" onClick={toggleRegistration}>
            Book now
          </Link>
                  
                  </div>
                </div>
            </div>
          
        </div>
      </div>
      <Footer />
    </section>
  );
};
export default SingleProduct;
