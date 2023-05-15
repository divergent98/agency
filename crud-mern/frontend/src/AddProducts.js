import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import  axios from "axios";
import { Heading } from "./Heading";
function CreateProduct() {
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    name:"",
    description:"",
    image:"",
    price:0,
    category:"",
    isFeatred: "",
  });
  const handleChange = (event) => {
    console.log(event.target);
    const {name, value} = event.target;
    setProduct(prev =>{
        return{
            ...prev,
            [name]: value,
        };
    });
  };

  const handleClick = (event) => {
    event.preventDefault();

    axios.post("/createProduct", product)
    .then((res) =>console.log(res))
    .catch((err) =>console.log(err));
   
    navigate("../create/product")
  }

  return (

    <div className="row justify-content-center">    
    <Heading/>
    <div className="col-6">
 
      <h1 className="text-center my-5">Create a Product</h1>


        <Form>
        <Form.Label>Name</Form.Label>
      <Form.Group> 
        <Form.Control
        name="name"
        value={product.name}
        placeholder="name"
        onChange={handleChange}
      />
       <Form.Label>Description</Form.Label>   
       <Form.Control
          name="description"
          value={product.description}
          placeholder="description"
          onChange={handleChange}
        />
        <Form.Label>Image</Form.Label>
        <Form.Control
          name="image"
          value={product.image}
          placeholder="image url"
          onChange={handleChange}
        />
        <Form.Label>Price</Form.Label>
           <Form.Control
        name="price"
        value={product.price}
        placeholder="price"
        onChange={handleChange}
      />
    <Form.Label>Category</Form.Label>
      <Form.Control
          name="category"
          value={product.category}
          placeholder="category"
          onChange={handleChange}
        />
        <Form.Label>Is featured</Form.Label>
       <Form.Control
          name="isFeatured"
          value={product.isFeatred}
          placeholder="isFeatured"
          onChange={handleChange}
        />
      </Form.Group>
      <Button onClick={handleClick} variant="secondary" className="mt-5">Add Product</Button>
    </Form>
    <Button className="mt-5" variant="link" onClick={() => navigate(-1)}>Back</Button>
    </div>
    </div>
);
}


export default CreateProduct;