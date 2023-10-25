import React, { Component } from "react";
import axios from "axios";
import { ListGroup, ListGroupItem, Button } from "reactstrap";
import { Link } from "react-router-dom";

export const SpecialOfferProducts = () => {
  const [products, setProducts] = React.useState(null);
  const [searchDate, setSearchDate] = React.useState(null);
  const [searchLocation, setSearchLocation] = React.useState(null);
  const [searchBudget, setSearchBudget] = React.useState(null);

  React.useEffect(() => {
    axios.get("/products").then((response) => {
      setProducts(response.data);
    });
  }, []);

  if (!products) return null;
  const specialProducts = new Array;
  products.forEach((product) =>{
    if (product.category === "special") {
      specialProducts.push(product);
    }
  }) 
  const filteredProducts = specialProducts.filter((product) => {
    const dateMatch = searchDate 
    ? product.date.toString().includes(searchDate.toLowerCase())
    : true;
    console.log(searchDate);
    console.log(product.date)
    const locationMatch = searchLocation
    ? product.name.toLowerCase().includes(searchLocation.toLowerCase())
    : true;
    
    const budgetMatch = searchBudget 
    ? product.price < searchBudget 
    : true;
    return dateMatch && locationMatch && budgetMatch;
  });

  return (
    <div className="container py-5">
      <div className="row p-5 m-5 justify-content-center search-bar"> 
        <div className="col-lg-4">
          <label className="form-label custom-search-label">Search by Date: </label>
          <input
            className="form-control"
            type="date"
            value={searchDate}
            onChange={(e) => setSearchDate(e.target.value)}
          />
        </div>
        <div className="col-lg-4">
          <label className="form-label custom-search-label">Search by Location: </label>
          <input
            className="form-control"
            type="text"
            value={searchLocation}
            onChange={(e) => setSearchLocation(e.target.value)}
          />
        </div>
        <div className="col-lg-4">
          <label className="form-label custom-search-label">Search by Budget: </label>
          <input
            className="form-control"
            type="text"
            value={searchBudget}
            onChange={(e) => setSearchBudget(e.target.value)}
          />
        </div>
      </div>
      <ListGroup>
        {filteredProducts.length > 0 ? (
          <div className="row ">
            {filteredProducts.map((product) => {
            
                return (
         
                  <div className="col-lg-3 col-md-3 col-sm-6">
                    <Link className="decoration-none" to={`/SingleProduct/${product._id}/`}>
                    <figure class="snip regular-product" key={product._id}>
                      <img src={product.image} alt="sample85" />
                      <svg
                        width="100%"
                        height="100%"
                        id="svg"
                        viewBox="0 0 1440 390"
                        xmlns="http://www.w3.org/2000/svg"
                        class="transition duration-300 ease-in-out delay-150 shape-divider"
                      >
                        <path
                          d="M 0,400 C 0,400 0,200 0,200 C 66.2870813397129,184.2775119617225 132.5741626794258,168.55502392344496 240,164 C 347.4258373205742,159.44497607655504 495.9904306220095,166.05741626794259 608,177 C 720.0095693779905,187.94258373205741 795.464114832536,203.2153110047847 876,192 C 956.535885167464,180.7846889952153 1042.153110047847,143.08133971291866 1137,140 C 1231.846889952153,136.91866028708134 1335.9234449760766,168.45933014354068 1440,200 C 1440,200 1440,400 1440,400 Z"
                          stroke="none"
                          stroke-width="0"
                          fill="#F8F8F8"
                          fill-opacity="1"
                          class="transition-all duration-300 ease-in-out delay-150 path-0"
                        ></path>
                      </svg>
                      <figcaption className="text-center roboto font-light">
                        <h3>{product.name}</h3>
                        <p>{product.price}$</p>
                        <p>{product.description}</p>
                        <p className="mb-5 decoration-none font-18 gradient-headline">See offer</p>
                      </figcaption>
                     
                    </figure>
                    </Link>
                  </div>
                );
         
            })}{" "}
          </div>
        ) : (
          <h4 className="text-center">no results... </h4>
        )}
      </ListGroup>
      <div className="row justify-content-center">



      </div>
    </div>
  );
};
