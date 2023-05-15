import React, { Component } from 'react';
import axios from "axios";
import { ListGroup, ListGroupItem, Button } from "reactstrap";

export const RegularProducts  = () => {
    const [products, setProducts] = React.useState(null);

    React.useEffect(() => {
        axios.get("/products").then((response) => {
          
          setProducts(response.data);
        });
      }, []);
    
      if (!products) return null;
      
        return (
          <div class="row justify-content-center background-regular">
            <div class="col-10">
               <ListGroup className="container my-5 ">
            {products.length > 0 ? (
              <><div className="row ">
                {products.map((product) => {
                  if(product.isFeatured === "false"){
                    return(
                        
                    <div className="col-3 " >
                        <figure class="snip1418 background-color" key={product._id}>
                        <img
                          src={product.image}
                          alt="sample85"
                        
                        />  

                        <figcaption>
                          <h3>{product.name}</h3>
                          <p>{product.price}</p>
                          <p>
                              {product.description}
                          </p>
                          <Button className="mt-5">
                          See offer
                        </Button>
                        </figcaption>
                        <a href="#"></a>
                      </figure>
                    {/*   <div className="card-hover">
                        <div className="card-hover__content">
                          <h3 className="card-hover__title">
                          <div className="col-9 m-1">{product.name}</div>
                          </h3>
                          <p class="card-hover__text">
                          {product.description}
                          </p>
                          <a href="#" class="card-hover__link">
                            <span>Learn How</span>
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
                      </div> */}
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


