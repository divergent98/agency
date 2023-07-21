import { useEffect, useState } from "react";
import axios from "axios";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Modal } from "react-bootstrap";
import { Heading } from "./Heading";

function Products() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  const [updatedProduct, setUpdatedProduct] = useState({
    name: "",
    description: "",
    description2: "",
    date: "",
    image: "",
    price: 0,
    category: "",
    isFeatured: ""
  });
  const [show, setShow] = useState(false);

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

  return (
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
            placeholder="description2"
            name="description2"
            onChange={handleChange}
            style={{ marginBottom: "1rem" }}
            value={updatedProduct.description2 ? updatedProduct.description2 : ""}
          />
          <Form.Label>Image</Form.Label>
          <Form.Control
            placeholder="image"
            name="image"
            value={updatedProduct.image ? updatedProduct.image : ""}
            onChange={handleChange}
            style={{ marginBottom: "1rem" }}
          />
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
            placeholder="category"
            name="category"
            onChange={handleChange}
            value={updatedProduct.category ? updatedProduct.category : ""}
            style={{ marginBottom: "1rem" }}
          />
 <Form.Label>Featured</Form.Label>
          <Form.Control
            placeholder="isFeatured"
            name="isFeatured"
            onChange={handleChange}
            value={updatedProduct.isFeatured ? updatedProduct.isFeatured : ""}
            style={{ marginBottom: "1rem" }}
          />
        </Modal.Body>
        <Modal.Footer>
      
          <Button className="edit-button save-changes-button btn text-light border-0 rounded-0 m-2" onClick={saveUpdatedProduct}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      {products ? (
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
            {products.map((product) => {
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
        ""
      )}
    </div>
  );
}

export default Products;
