import React, { Component } from 'react';
import axios from "axios";
import { ListGroup, ListGroupItem, Button } from "reactstrap";
import { Link } from "react-router-dom";

export const FeaturedProducts  = () => {
    const [products, setProducts] = React.useState(null);

    React.useEffect(() => {
        axios.get("/products").then((response) => {
          
          setProducts(response.data);
        });
      }, []);
    
      if (!products) return null;
      
        return (
          <div class="row justify-content-center py-lg-5 mb-5">
            <div class="col-12 mt-5">
              <h1 className='text-center mt-lg-5 pb-lg-5 gradient-headline big-headline'>
                Most popular destinations
              </h1>
            </div>
            <div class="col-12">
               <ListGroup className="container my-lg-5 ">
            {products.length > 0 ? (
              <>
              <div className="row">
                {products.map((product) => {
                  if(product.isFeatured === "true" && product.category === 'hot'){
                    return(       
             
                    <div className="col-lg-4 col-md-12  col-sm-12" key={product._id}>      
                     <a href="#" className='card-link'>
                    
                        <div class="content ">
                          <Link to={`/SingleProduct/${product._id}/`}>
                            <div key={product._id}>
                            <div class="content-overlay"></div>
                            <img class="content-image" src={product.image} alt=""/>
                            <div class="content-details fadeIn-top">
                              <h3 className='blinker'>{product.name}</h3>
                              <p className='roboto font-16'>{product.description}</p>
                              <p className='roboto font-18'>See offer</p>
                            </div>  
                            </div>
                          </Link>  
                      
                       <div className='visible-content'>
                            <h3 className='blinker'>{product.name}</h3>
                              <p className='roboto font-16'>{product.description}</p>
                            </div>
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


