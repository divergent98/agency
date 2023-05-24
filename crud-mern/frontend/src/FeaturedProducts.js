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
                     <a href="#" >
                      <div className="card-hover">
                        <div className="card-hover__content">
                          <h3 className="card-hover__title">
                          <div className="m-1">{product.name}</div>
                          </h3>
                          <p class="card-hover__text">
                          {product.description}
                          </p>
                   
                            <span>See more...</span>
                      
                       
                        </div>
                 
                        <img
                          src={product.image}
                          alt=""
                        ></img>
                      </div> 
                      </a>
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


