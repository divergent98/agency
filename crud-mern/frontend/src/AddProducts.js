import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import  axios from "axios";
import { Heading } from "./Heading";
import moment from "moment";

function CreateProduct() {
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    name:"",
    description:"",
    description2:"",
    date: moment().format('DD-MM-YYYY'),
    image:"",
    price:0,
    category:"",
    isFeatured: false,
  });
  const [path, setPath] = useState(""); // Initialize path as an empty string
  const pathArray = []; // If you want to store multiple paths as an array
  const [pathArrayState, setPathArrayState] = useState([]);
  const cloudinaryRef = useRef();
  const widgetRef = useRef();
  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    if (type === "radio") {
      // Handle radio button change
      setProduct((prev) => ({
        ...prev,
        isFeatured: value === "true",
      }));
    } else if (type === "select-one") {
      // Handle select dropdown change
      setProduct((prev) => ({
        ...prev,
        category: value,
      }));
    } else {
      // Handle other input field changes
      setProduct((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleClick = (event) => {
    event.preventDefault();

    axios.post("/createProduct", product)
    .then((res) =>console.log(res))
    .catch((err) =>console.log(err));
   
    navigate("../create/product")
  }
  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    widgetRef.current = cloudinaryRef.current.createUploadWidget({
      cloudName: 'dhawwwo4n',
      uploadPreset: 'kpkdwfiu',
    }, function (error, data) {
      console.log("Received data:", data.info.files);
      if (data && data.info && data.info.files) {
        const uploadInfo = data.info.files;
        uploadInfo.forEach((item, index) => {
          console.log(`Element ${index}:`, item.uploadInfo);
          pathArray.push(item.uploadInfo.url);
        });
        
        setPathArrayState(pathArray);
  
        // Set post.image to the first URL in pathArrayState

        // Push path to the array if you want to store multiple paths
        console.log(pathArray);
      } else {
        console.error("The expected data structure is not present.");
      }
    });
  }, []);
  product.image=pathArrayState[0];
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
          <Form.Label>Description 2</Form.Label>   
       <Form.Control
          name="description2"
          value={product.description2}
          placeholder="description 2"
          onChange={handleChange}
        />
                <Form.Label>Date</Form.Label>   
       <Form.Control
          name="date"
          value={product.date}
          placeholder="date"
          type="date"
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
            as="select"
            name="category"
            value={product.category}
            onChange={handleChange}
          >
            <option value="">Select Category</option>
            <option value="hot">Hot</option>
            <option value="special">Special</option>
          </Form.Control>
  
 <Form.Label>Featured</Form.Label>
          <Form.Check
            type="radio"
            label="Yes"
            name="isFeatured"
            value="true"
            checked={product.isFeatured === true}
            onChange={handleChange}
          />
          <Form.Check
            type="radio"
            label="No"
            name="isFeatured"
            value="false"
            checked={product.isFeatured === false}
            onChange={handleChange}
          />
      </Form.Group>
 
    </Form>
    <Form.Label>Image</Form.Label>
        <div className="row g-0">
          <div className="col-2">
            <button
              className="w-100 btn btn-success custom-border-right"
              onClick={() => widgetRef.current.open()}
            >
              Upload
            </button>
          </div>
          <div className="col-10">
            <Form.Control
              name="image"
              className="custom-border-left"
              value={product.image}
              placeholder="image"
              onChange={handleChange}
            />
          </div>
        </div>
      <Button onClick={handleClick} variant="secondary" className="mt-5">Add Product</Button>
    <Button className="mt-5" variant="link" onClick={() => navigate(-1)}>Back</Button>
    </div>
    </div>
);
}


export default CreateProduct;