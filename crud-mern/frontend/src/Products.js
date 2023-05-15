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
    image: "",
    price: 0,
    category: "",
    isFeatured: false,
  });
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const updateProduct = (
    id,
    name,
    description,
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
        image: image,
        price: price,
        category: category,
        isFeatured: isFeatured,
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
      <div className="row mt-5">
        <div className="col-10 ps-5">
          <h1 className="ps-2">Products page</h1>
        </div>
        <div className="col-2">
          <Button variant="secondary" onClick={() => navigate("/createProduct")}>
            New Product
          </Button>
        </div>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update a product</Modal.Title>
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
            value={updatedProduct.description ? updatedProduct.description : ""}
          />
          <Form.Label>Image</Form.Label>
          <Form.Control
            placeholder="image"
            name="image"
            value={updatedProduct.image ? updatedProduct.image : ""}
            style={{ marginBottom: "1rem" }}
            onChange={handleChange}
          />
          <Form.Label>Price</Form.Label>
          <Form.Control
            placeholder="price"
            name="price"
            onChange={handleChange}
            value={updatedProduct.price ? updatedProduct.price : ""}
          />
          <Form.Label>Category</Form.Label>
          <Form.Control
            placeholder="category"
            name="category"
            onChange={handleChange}
            value={updatedProduct.category ? updatedProduct.category : ""}
          />
          <Form.Label>Is featured</Form.Label>
          <Form.Control
            placeholder="Is Featured"
            name="isFeatured"
            onChange={handleChange}
            value={updatedProduct.isFeatured ? updatedProduct.isFeatured : ""}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="link" onClick={handleClose}>
            Close
          </Button>
          <Button variant="secondary" onClick={saveUpdatedProduct}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      {products ? (
        <>
          <div className="mt-5">
            <div className="row  border mx-5 py-3">
              <div className="col-2">Product</div>
              <div className="col-5">Description</div>
              <div className="col-1">Price</div>
              <div className="col-1">Category</div>
              <div className="col-1">Is Featured</div>
            </div>
            {products.map((product) => {
              return (
                <div className="row border mx-5" key={product._id}>
                  <div className="col-2">
                    <h4>{product.name}</h4>
                  </div>
                  <div className="col-5">
                    <p>{product.description}</p>
                  </div>
                  <div className="col-1">
                    <p>{product.price}</p>
                  </div>
                  <div className="col-1">
                    <p>{product.category}</p>
                  </div>
                  <div className="col-1">
                    <p>{product.isFeatured}</p>
                  </div>
                  <div className="col-2">
                    <Button
                    variant="secondary"
                      className="m-2"
                      onClick={() =>
                        updateProduct(
                          product._id,
                          product.name,
                          product.description,
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
                      className="m-2"
                      onClick={() => deleteProduct(product._id)}
                    >
                      Delete
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      ) : (
        ""
      )}
    </div>
  );
}

export default Products;
