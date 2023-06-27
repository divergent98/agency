import React from "react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Modal, Button, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { Form } from "react-bootstrap";
import axios from "axios";

import { Navigation } from "./Navigation";
import { Footer } from "./Footer";
import moment from "moment";
import check from "./img/check-mark.png";
import calendar from "./img/calendar.png";
import cancel from "./img/cancel.png";
import ticket from "./img/tickets.png";
const SingleProduct = () => {
  const [reservation, setReservation] = useState({
    name: "",
    lastname: "",
    phone: "",
    email: "",
    destination: "",
    cardno: "",
    carddate: "",
    cvc: "",
  });
  const handleClick = (event) => {
    event.preventDefault();

    axios
      .post("/createReservation", reservation)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    const cardno_1 = document.querySelector("#cardno-1");
    console.log("this is the value " + cardno_1.value);
    toggleRegistration();
  };
  const handleNavigation = (event) => {
    event.preventDefault();
    document.querySelector("#part-1").classList.toggle("hidden-modal");
    document.querySelector("#part-2").classList.toggle("hidden-modal");
    document.querySelector("#part-1-image").classList.toggle("hidden-modal");
    document.querySelector("#part-2-image").classList.toggle("hidden-modal");
  };
  const handleChange = (event) => {
    console.log(event.target);
    const { name, value } = event.target;
    setReservation((prev) => {
      return {
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
  let items = string.split(", ");
  const formattedDate = moment(product.date).format("DD-MM-YYYY");

  reservation.destination = product.name;

  return (
    <section>
      <div className="col-4 px-5" onClick={toggleRegistration}></div>
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
            <div className="col-4">
              <div className="ticket-image-div " id="part-1-image">
                <img src={ticket} className="ticket-image"></img>
              </div>
              <div className="ticket-image-div hidden-modal" id="part-2-image">
                <div class="creditcard">
                  <div class="front">
                    <div id="ccsingle"></div>
                    <svg
                      version="1.1"
                      id="cardfront"
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      viewBox="0 0 750 471"
                    >
                      <g id="Front">
                        <g id="CardBackground">
                          <g id="Page-1_1_">
                            <g id="amex_1_">
                              <path
                                id="Rectangle-1_1_"
                                class="lightcolor grey"
                                d="M40,0h670c22.1,0,40,17.9,40,40v391c0,22.1-17.9,40-40,40H40c-22.1,0-40-17.9-40-40V40
                            C0,17.9,17.9,0,40,0z"
                              />
                            </g>
                          </g>
                          <path
                            class="darkcolor greydark"
                            d="M750,431V193.2c-217.6-57.5-556.4-13.5-750,24.9V431c0,22.1,17.9,40,40,40h670C732.1,471,750,453.1,750,431z"
                          />
                        </g>
                        <text
                          transform="matrix(1 0 0 1 60.106 295.0121)"
                          id="svgnumber"
                          class="st2 st3 st4"
                        >
                          0123 4567 8910 1112
                        </text>
                        <text
                          transform="matrix(1 0 0 1 54.1064 428.1723)"
                          id="svgname"
                          class="st2 st5 st6"
                        >
                          JOHN DOE
                        </text>
                        <text
                          transform="matrix(1 0 0 1 54.1074 389.8793)"
                          class="st7 st5 st8"
                        >
                          cardholder name
                        </text>
                        <text
                          transform="matrix(1 0 0 1 479.7754 388.8793)"
                          class="st7 st5 st8"
                        >
                          expiration
                        </text>
                        <text
                          transform="matrix(1 0 0 1 65.1054 241.5)"
                          class="st7 st5 st8"
                        >
                          card number
                        </text>
                        <g>
                          <text
                            transform="matrix(1 0 0 1 574.4219 433.8095)"
                            id="svgexpire"
                            class="st2 st5 st9"
                          >
                            01/23
                          </text>
                          <text
                            transform="matrix(1 0 0 1 479.3848 417.0097)"
                            class="st2 st10 st11"
                          >
                            VALID
                          </text>
                          <text
                            transform="matrix(1 0 0 1 479.3848 435.6762)"
                            class="st2 st10 st11"
                          >
                            THRU
                          </text>
                          <polygon
                            class="st2"
                            points="554.5,421 540.4,414.2 540.4,427.9 		"
                          />
                        </g>
                        <g id="cchip">
                          <g>
                            <path
                              class="st2"
                              d="M168.1,143.6H82.9c-10.2,0-18.5-8.3-18.5-18.5V74.9c0-10.2,8.3-18.5,18.5-18.5h85.3
                        c10.2,0,18.5,8.3,18.5,18.5v50.2C186.6,135.3,178.3,143.6,168.1,143.6z"
                            />
                          </g>
                          <g>
                            <g>
                              <rect
                                x="82"
                                y="70"
                                class="st12"
                                width="1.5"
                                height="60"
                              />
                            </g>
                            <g>
                              <rect
                                x="167.4"
                                y="70"
                                class="st12"
                                width="1.5"
                                height="60"
                              />
                            </g>
                            <g>
                              <path
                                class="st12"
                                d="M125.5,130.8c-10.2,0-18.5-8.3-18.5-18.5c0-4.6,1.7-8.9,4.7-12.3c-3-3.4-4.7-7.7-4.7-12.3
                            c0-10.2,8.3-18.5,18.5-18.5s18.5,8.3,18.5,18.5c0,4.6-1.7,8.9-4.7,12.3c3,3.4,4.7,7.7,4.7,12.3
                            C143.9,122.5,135.7,130.8,125.5,130.8z M125.5,70.8c-9.3,0-16.9,7.6-16.9,16.9c0,4.4,1.7,8.6,4.8,11.8l0.5,0.5l-0.5,0.5
                            c-3.1,3.2-4.8,7.4-4.8,11.8c0,9.3,7.6,16.9,16.9,16.9s16.9-7.6,16.9-16.9c0-4.4-1.7-8.6-4.8-11.8l-0.5-0.5l0.5-0.5
                            c3.1-3.2,4.8-7.4,4.8-11.8C142.4,78.4,134.8,70.8,125.5,70.8z"
                              />
                            </g>
                            <g>
                              <rect
                                x="82.8"
                                y="82.1"
                                class="st12"
                                width="25.8"
                                height="1.5"
                              />
                            </g>
                            <g>
                              <rect
                                x="82.8"
                                y="117.9"
                                class="st12"
                                width="26.1"
                                height="1.5"
                              />
                            </g>
                            <g>
                              <rect
                                x="142.4"
                                y="82.1"
                                class="st12"
                                width="25.8"
                                height="1.5"
                              />
                            </g>
                            <g>
                              <rect
                                x="142"
                                y="117.9"
                                class="st12"
                                width="26.2"
                                height="1.5"
                              />
                            </g>
                          </g>
                        </g>
                      </g>
                      <g id="Back"></g>
                    </svg>
                  </div>
                  <div class="back">
                    <svg
                      version="1.1"
                      id="cardback"
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      viewBox="0 0 750 471"
                    >
                      <g id="Front">
                        <line
                          class="st0"
                          x1="35.3"
                          y1="10.4"
                          x2="36.7"
                          y2="11"
                        />
                      </g>
                      <g id="Back">
                        <g id="Page-1_2_">
                          <g id="amex_2_">
                            <path
                              id="Rectangle-1_2_"
                              class="darkcolor greydark"
                              d="M40,0h670c22.1,0,40,17.9,40,40v391c0,22.1-17.9,40-40,40H40c-22.1,0-40-17.9-40-40V40
                        C0,17.9,17.9,0,40,0z"
                            />
                          </g>
                        </g>
                        <rect y="61.6" class="st2" width="750" height="78" />
                        <g>
                          <path
                            class="st3"
                            d="M701.1,249.1H48.9c-3.3,0-6-2.7-6-6v-52.5c0-3.3,2.7-6,6-6h652.1c3.3,0,6,2.7,6,6v52.5
                    C707.1,246.4,704.4,249.1,701.1,249.1z"
                          />
                          <rect
                            x="42.9"
                            y="198.6"
                            class="st4"
                            width="664.1"
                            height="10.5"
                          />
                          <rect
                            x="42.9"
                            y="224.5"
                            class="st4"
                            width="664.1"
                            height="10.5"
                          />
                          <path
                            class="st5"
                            d="M701.1,184.6H618h-8h-10v64.5h10h8h83.1c3.3,0,6-2.7,6-6v-52.5C707.1,187.3,704.4,184.6,701.1,184.6z"
                          />
                        </g>
                        <text
                          transform="matrix(1 0 0 1 621.999 227.2734)"
                          id="svgsecurity"
                          class="st6 st7"
                        >
                          985
                        </text>
                        <g class="st8">
                          <text
                            transform="matrix(1 0 0 1 518.083 280.0879)"
                            class="st9 st6 st10"
                          >
                            security code
                          </text>
                        </g>
                        <rect
                          x="58.1"
                          y="378.6"
                          class="st11"
                          width="375.5"
                          height="13.5"
                        />
                        <rect
                          x="58.1"
                          y="405.6"
                          class="st11"
                          width="421.7"
                          height="13.5"
                        />
                        <text
                          transform="matrix(1 0 0 1 59.5073 228.6099)"
                          id="svgnameback"
                          class="st12 st13"
                        >
                          John Doe
                        </text>
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-8">
              <Form>
                <div id="part-1">
                  <div className="row">
                    <div className="col-6">
                      <Form.Label>Name</Form.Label>
                      <Form.Control
                        name="name"
                        value={reservation.name}
                        placeholder="name"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-6">
                      <Form.Label>Last name</Form.Label>
                      <Form.Control
                        name="lastname"
                        value={reservation.lastname}
                        placeholder="lastname"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-6">
                      <Form.Label>Phone</Form.Label>
                      <Form.Control
                        name="phone"
                        value={reservation.phone}
                        placeholder="phone"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-6">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        name="email"
                        value={reservation.email}
                        placeholder="email"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <Button
                    variant="secondary"
                    className="mt-5"
                    onClick={handleNavigation}
                  >
                    Next
                  </Button>
                </div>
                <div id="part-2" className="hidden-modal">
                  <div className="row">
                    <div className="col-12">
                      <Form.Label>Card name</Form.Label>
                      <Form.Control
                        name="cardname"
                        placeholder="cardname"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-12">
                      <Form.Label>Card number</Form.Label>
                      <div className="row">
                  

                          <div className="col-3" >
                            <input type="text" id="cardno-1" className="w-100" maxlength="4" />
                          </div>
                          <div className="col-3" >
                            <input type="text" id="cardno-2" className="w-100"  maxlength="4" />
                          </div>
                          <div className="col-3" >
                            <input type="text" id="cardno-3" className="w-100"  maxlength="4" />
                          </div>
                          <div className="col-3" >
                            <input type="text" id="cardno-4" className="w-100"  maxlength="4" />
                          </div>
                       
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-6">
                      {" "}
                      <Form.Label>Expiration date</Form.Label>
                      <Form.Control
                        name="carddate"
                        value={reservation.carddate}
                        placeholder="carddate"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-6">
                      <Form.Label>CVC</Form.Label>
                      <Form.Control
                        name="cvc"
                        value={reservation.cvc}
                        placeholder="cvc"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <Button
                    variant="secondary"
                    className="mt-5"
                    onClick={handleNavigation}
                  >
                    Back
                  </Button>
                  <Button
                    variant="secondary"
                    className="mt-5"
                    onClick={handleClick}
                  >
                    Add Product
                  </Button>
                </div>
              </Form>
            </div>
          </div>
        </ModalBody>
      </Modal>
      <div className="container product-view">
        <div className="row justify-content-center gx-5">
          <div
            className="col-5 me-5 product-image"
            style={{ backgroundImage: `url(${product.image})` }}
          ></div>
          <div className="col-6">
            <h2 className="product-title">{product.name}</h2>
            <h2 className="product-price">$ {product.price}</h2>
            <hr></hr>
            <div className="product-body">
              <div className="my-3 border border-1 w-50 p-2">
                <img className="calendar" src={calendar} />
                <span className="product-item">{formattedDate}</span>
              </div>
              <ul>
                {items.map((item) => (
                  <li className="ps-2">
                    <img src={check} />
                    <span className="product-item ">{item}</span>
                  </li>
                ))}
              </ul>
              <div>
                <Link
                  class="btn custom-button save-changes-button big-btn text-light border-0 rounded-0 pt-3 pb-5 mt-5"
                  onClick={toggleRegistration}
                >
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
