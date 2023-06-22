import React from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";
import moment from "moment";
import check from "./img/check-mark.png";
import calendar from "./img/calendar.png";
const SingleProduct = () => {
  const { productId } = useParams();
  const [products, setProducts] = React.useState(null);

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
    let items= string.split(',');
    const formattedDate = moment(product.date).format('DD-MM-YYYY')
  return (
    <section>
      <Navigation />
      <div className="banner"></div>
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
             <Link class="btn custom-button save-changes-button big-btn text-light border-0 rounded-0 my-5 py-3 ">
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
