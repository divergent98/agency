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
          <div class="row justify-content-center background-green">
            <div class="col-10">
               <ListGroup className="container my-5 ">
            {products.length > 0 ? (
              <><div className="row ">
                {products.map((product) => {
                  if(product.isFeatured === "false"){
                    return(
                        
                    <div className="col-3 " >
                        <figure class="snip1418" key={product._id}>
                        <img
                          src={product.image}
                          alt="sample85"
                        
                        />  

                        <figcaption className='text-center'>
                          <h3>{product.name}</h3>
                          <p>{product.price}</p>
                          <p>
                              {product.description}
                          </p>
                          <Button className="mt-5 rounded-0 text-light border-0 custom-button">
                          See offer
                        </Button>
                        </figcaption>
                        <a href="#"></a>
                      </figure>
                   
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


