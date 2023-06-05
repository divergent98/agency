import React, { Component } from "react";
import axios from "axios";
import { ListGroup, ListGroupItem, Button } from "reactstrap";
import { Link } from "react-router-dom";

export const RegularProducts = () => {
  const [products, setProducts] = React.useState(null);

  React.useEffect(() => {
    axios.get("/products").then((response) => {
      setProducts(response.data);
    });
  }, []);

  if (!products) return null;

  return (
    <div className="container">
      <div className="row">
        <h1 className="text-center mt-5 pb-5 gradient-headline big-headline">
          Check out our offer
        </h1>
      </div>
      <ListGroup>
        {products.length > 0 ? (
          <div className="row ">
            {products.map((product) => {
              if (product.isFeatured === "false") {
                return (
                  <div className="col-3 ">
                    <figure class="snip1418" key={product._id}>
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
                          fill="#fff"
                          fill-opacity="1"
                          class="transition-all duration-300 ease-in-out delay-150 path-0"
                        ></path>
                      </svg>
                      <figcaption className="text-center">
                        <h3>{product.name}</h3>
                        <p>{product.price}$</p>
                        <p>{product.description}</p>
                        <p className="mt-3">See offer</p>
                      </figcaption>
                      <a href="#"></a>
                    </figure>
                  </div>
                );
              } else {
                <h4 className="text-center">no products </h4>;
              }
            })}{" "}
          </div>
        ) : (
          <h4 className="text-center">no products </h4>
        )}
      </ListGroup>
      <div className="row justify-content-center">
        <div className="col-3">
          <Link class="btn big-btn text-light border-0 rounded-0 my-5 py-3">
            See more...
          </Link>
        </div>
      </div>
    </div>
  );
};
