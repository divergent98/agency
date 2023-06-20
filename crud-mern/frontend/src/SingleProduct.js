import React from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";
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
  	const htmlString = product.description;


  return (
    <section>
      <Navigation />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-9">
            <div
              style={{ backgroundImage: `url(${product.image})` }}
              className="single-blog-cover news-product-image"
            ></div>
            <div className="row">
                <h2 className="product-title">{product.title}</h2>
                <h2 className="product-title">{product.price}</h2>
                <hr></hr>
                <div className="product-body" dangerouslySetInnerHTML={{__html: htmlString}} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};
export default SingleProduct;
