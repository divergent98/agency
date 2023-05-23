import React, { Component } from 'react';
import axios from "axios";
import { ListGroup, ListGroupItem, Button } from "reactstrap";

export const FeaturedProducts  = () => {
    const [products, setProducts] = React.useState(null);

    React.useEffect(() => {
        axios.get("/products").then((response) => {
          
          setProducts(response.data);
        });
      }, []);
    
      if (!products) return null;
      
        return (
          <div class="row justify-content-center">
            <div class="col-10">
               <ListGroup className="container my-5 ">
            {products.length > 0 ? (
              <><div className="row">
                {products.map((product) => {
                  if(product.isFeatured === "true"){
                    return(
                    <div className="col-lg-4 col-md-12 col-sm-12" key={product._id}>
                      <div className="card-hover">
                        <div className="card-hover__content">
                          <h3 className="card-hover__title">
                          <div className="m-1">{product.name}</div>
                          </h3>
                          <p class="card-hover__text">
                          {product.description}
                          </p>
                          <a href="#" class="card-hover__link">
                            <span>See more...</span>
                            <svg
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                              />
                            </svg>
                          </a>
                        </div>
                        <div className="card-hover__extra">
                          <h4>
                          {product.image}
                          </h4>
                        </div>
                        <img
                          src={product.image}
                          alt=""
                        ></img>
                      </div>
                      </div>
                   )
                  }else{
                    <h4 className="text-center">no products </h4>
                  }
                })} </div>
              </>
            ) : (
              <h4 className="text-center">no products </h4>
            )}
          </ListGroup>
            </div>
          </div>
           
        );
    
};


