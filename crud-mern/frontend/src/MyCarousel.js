import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ListGroup, ListGroupItem, Button } from "reactstrap";
export const MyCarousel = () => {
  const [products, setProducts] = React.useState(null);

  React.useEffect(() => {
    axios.get("/products").then((response) => {
      setProducts(response.data);
    });
  }, []);

  if (!products) return null;

  return (
    <div
      id="carouselExampleFade"
      class="carousel slide carousel-fade"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner">
        <ListGroup className="container-fluid ">
          {products.length > 0 ? (
            <>
              <div className="row">
                {products.map((product) => {
                  if (product.category === "carousel") {
                    return (
                      <div class="carousel-item active background-dark-gray">
                        <div className="container">
                          <div class="row ">
                            <div class="col-6 align-middle custom-headline">
                              <div class="text-space">
                              <h1>{product.name}</h1>
                              <h3>{product.description2}</h3></div>
                              <div className="row ">
                                <Link
                                  class="btn big-btn text-light border-0 rounded-0 my-5 ms-3 py-3"
                                  to={`/SingleProduct/${product._id}/`}
                                >
                                  See more...
                                </Link>
                              </div>
                            </div>
                            <div class="col-6">
                              <div
                                className="carousel-photo"
                                style={{
                                  backgroundImage: `url(${product.image})`,
                                }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  } else {
                    <h4 className="text-center">no products </h4>;
                  }
                })}{" "}
              </div>
            </>
          ) : (
            <h4 className="text-center">no products </h4>
          )}
        </ListGroup>
      </div>
      <button
        class="carousel-control-prev mt-5 pt-5"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next mt-5 pt-5"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
};
