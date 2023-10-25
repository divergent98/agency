import React, { Component } from "react";
import { useEffect, useState, useRef } from "react";
import axios from "axios";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Modal } from "react-bootstrap";
import { Heading } from "./Heading";


function Products() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [searchDate, setSearchDate] = React.useState(null);
  const [searchLocation, setSearchLocation] = React.useState(null);
  const [searchBudget, setSearchBudget] = React.useState(null);
  const [updatedProduct, setUpdatedProduct] = useState({
    name: "",
    description: "",
    description2: "",
    date: "",
    image: "",
    price: 0,
    category: "",
    isFeatured: false
  });
  const [show, setShow] = useState(false);
  const [path, setPath] = useState(""); // Initialize path as an empty string
  const pathArray = []; // If you want to store multiple paths as an array
  const [pathArrayState, setPathArrayState] = useState([]);
  const cloudinaryRef = useRef();
  const widgetRef = useRef();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const updateProduct = (
    id,
    name,
    description,
    description2,
    date,
    image,
    price,
    category,
    isFeatured
    
  ) => {
    setUpdatedProduct((prev) => {
      return {
        ...prev,
        id: id,
        name: name,
        description: description,
        description2: description2,
        date: date,
        image: image,
        price: price,
        category: category,
        isFeatured: isFeatured
      };
    });
    handleShow();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedProduct((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
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
  const saveUpdatedProduct = () => {
    console.log(updatedProduct);

    axios
      .put(`/updateProduct/${updatedProduct.id}`, updatedProduct)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    handleClose();
    //window.location.reload();
  };
  useEffect(() => {
    axios
      .get("/products")
      .then((res) => {
        console.log(res.data);
        setProducts(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  const deleteProduct = (id) => {
    console.log(id);
    axios
      .delete(`/deleteProduct/${id}`)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));

    // document.location.reload(true);
  };
  const filteredProducts = products.filter((product) => {
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
  updatedProduct.image=pathArrayState[0];
  return (
    <>
    <div>
      <Heading />
      <div className="container">
      <div className="row mt-5">
        <div className="col-10">
          <h1 className="gradient-headline ">Products page</h1>
        </div>
        <div className="col-2 align-right">
          <Button className="custom-button rounded-0 roboto" onClick={() => navigate("/createProduct")}>
           New Product
          </Button>
        </div>
      </div>
</div>
      <Modal className="roboto" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title  className="blinker"> Update a product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Label>Name</Form.Label>
          <Form.Control
            placeholder="name"
            name="name"
            value={updatedProduct.name ? updatedProduct.name : ""}
            style={{ marginBottom: "1rem" }}
            onChange={handleChange}
          />
          <Form.Label>Description</Form.Label>
          <Form.Control
            placeholder="description"
            name="description"
            onChange={handleChange}
            style={{ marginBottom: "1rem" }}
            value={updatedProduct.description ? updatedProduct.description : ""}
          />
          <Form.Label>Description 2</Form.Label>
          <Form.Control
            placeholder="description2"
            name="description2"
            onChange={handleChange}
            style={{ marginBottom: "1rem" }}
            value={updatedProduct.description2 ? updatedProduct.description2 : ""}
          />
             <Form.Label>Date</Form.Label>
             <Form.Control
            placeholder="date"
            name="date"
            onChange={handleChange}
            style={{ marginBottom: "1rem" }}
            value={updatedProduct.date ? updatedProduct.date : ""}
          />
    
    <Form.Label>Image</Form.Label>
          <div className="row g-0">
            <div className="col-2">
              <button className="w-100 btn btn-success custom-border-right" onClick={() => widgetRef.current.open()}>Upload</button></div>
            <div className="col-10"> <Form.Control
            className="custom-border-left" 
            placeholder="image"
            name="image"
            onChange={handleChange}
            value={updatedProduct.image ? updatedProduct.image : ""}
          /></div>
          </div>
          <Form.Label>Price</Form.Label>
          <Form.Control
            placeholder="price"
            name="price"
            onChange={handleChange}
            value={updatedProduct.price ? updatedProduct.price : ""}
            style={{ marginBottom: "1rem" }}
          />
          <Form.Label>Category</Form.Label>
          <Form.Control
              as="select"
              name="category"
              value={updatedProduct.category ? updatedProduct.category : ""}
              onChange={handleChange}
              style={{ marginBottom: "1rem" }}
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
              value={true}
              checked={updatedProduct.isFeatured === true}
              onChange={handleChange}
            />
            <Form.Check
              type="radio"
              label="No"
              name="isFeatured"
              value={false}
              checked={updatedProduct.isFeatured === false}
              onChange={handleChange}
            />
        </Modal.Body>
        <Modal.Footer>
      
          <Button className="edit-button save-changes-button btn text-light border-0 rounded-0 m-2" onClick={saveUpdatedProduct}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

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
      {filteredProducts.length > 0 ? (
        <>
            <div className="container">
            <div className="row mt-5 ms-1 me-5">
      <table className="table table-striped table-hover table-bordered">
        <thead>
          <tr className="blinker font-18">
            <th>Product</th>
            <th>Description</th>
            <th>Description2</th>
            <th>Date</th>
            <th>Price</th>
            <th>Category</th>
            <th>Featured</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
            {filteredProducts.map((product) => {
              return (
                <tr className="roboto font-18" key={product.id}>
                <td>{product.name}</td>
                <td>{product.description}</td>
                <td>{product.description2}</td>
                <td>{product.date}</td>
                <td>{product.price}</td>
                <td>{product.category}</td>
                <td>{product.isFeatured}</td>
                <td>
                <Button
                    
                      className="edit-button custom-button btn text-light border-0 rounded-0 m-2"
                      onClick={() =>
                        updateProduct(
                          product._id,
                          product.name,
                          product.description,
                          product.description2,
                          product.date,
                          product.image,
                          product.price,
                          product.category,
                          product.isFeatured
                        )
                      }
                    >
                      Edit
                    </Button>
                    <Button
                    variant="secondary"
                    className="delete-button custom-button btn text-light border-0 rounded-0 m-2"
                      onClick={() => deleteProduct(product._id)}
                    >
                      Delete
                    </Button>
                </td>
              </tr>
           
              );
            })}
          </tbody>
      </table>
            </div>
            </div>
        </>
      ) : (
        <>
        <div className="container">
        <div className="row mt-5 ms-1 me-5">
  <table className="table table-striped table-hover table-bordered">
    <thead>
      <tr className="blinker font-18">
        <th>Product</th>
        <th>Description</th>
        <th>Description2</th>
        <th>Date</th>
        <th>Price</th>
        <th>Category</th>
        <th>Featured</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
        {filteredProducts.map((product) => {
          return (
            <tr className="roboto font-18" key={product.id}>
            <td>{product.name}</td>
            <td>{product.description}</td>
            <td>{product.description2}</td>
            <td>{product.date}</td>
            <td>{product.price}</td>
            <td>{product.category}</td>
            <td>{product.isFeatured}</td>
            <td>
            <Button
                
                  className="edit-button custom-button btn text-light border-0 rounded-0 m-2"
                  onClick={() =>
                    updateProduct(
                      product._id,
                      product.name,
                      product.description,
                      product.description2,
                      product.date,
                      product.image,
                      product.price,
                      product.category,
                      product.isFeatured
                    )
                  }
                >
                  Edit
                </Button>
                <Button
                variant="secondary"
                className="delete-button custom-button btn text-light border-0 rounded-0 m-2"
                  onClick={() => deleteProduct(product._id)}
                >
                  Delete
                </Button>
            </td>
          </tr>
       
          );
        })}
      </tbody>
  </table>
        </div>
        </div>
    </>
      )}
    </div>

    
    </>
  );
}

export default Products;
