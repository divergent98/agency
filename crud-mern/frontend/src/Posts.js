import { useEffect, useState } from "react";
import axios from "axios";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import { Heading } from "./Heading";
function Posts() {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);

  const [updatedPost, setUpdatedPost] = useState({
    id: "",
    title: "",
    description: "",
    content: "",
    category: "",
    image: "",
  });
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const updatePost = (id, title, description, content, category, image) => {
    setUpdatedPost((prev) => {
      return {
        ...prev,
        id: id,
        title: title,
        description: description,
        content: content,
        category: category,
        image: image,
      };
    });
    handleShow();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedPost((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const saveUpdatedPost = () => {
    console.log(updatedPost);

    axios
      .put(`/update/${updatedPost.id}`, updatedPost)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    handleClose();
    //window.location.reload();
  };
  useEffect(() => {
    axios
      .get("/posts")
      .then((res) => {
        console.log(res.data);
        setPosts(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  const deletePost = (id) => {
    console.log(id);
    axios
      .delete(`/delete/${id}`)
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
          <h1 className="gradient-headline">Posts page</h1>
        </div>
        <div className="col-2 ps-5">
          <Button className="custom-button rounded-0" onClick={() => navigate("/create")}>
            New Post
          </Button>
        </div>
      </div>
      </div>
      <Modal className="roboto font-18" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="blinker">Update a post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Label>Title</Form.Label>
          <Form.Control
            placeholder="title"
            name="title"
            value={updatedPost.title ? updatedPost.title : ""}
            style={{ marginBottom: "1rem" }}
            onChange={handleChange}
          />
          <Form.Label>Description</Form.Label>
          <Form.Control
            placeholder="description"
            name="description"
            onChange={handleChange}
            style={{ marginBottom: "1rem" }}
            value={updatedPost.description ? updatedPost.description : ""}
          />
                <Form.Label>Content</Form.Label>
          <Form.Control
            placeholder="content"
            name="content"
            as="textarea" rows={10} 
            onChange={handleChange}
            style={{ marginBottom: "1rem" }}
            value={updatedPost.content ? updatedPost.content : ""}
          />
                <Form.Label>Category</Form.Label>
          <Form.Control
            placeholder="category"
            name="category"
            onChange={handleChange}
            style={{ marginBottom: "1rem" }}
            value={updatedPost.category ? updatedPost.category : ""}
          />
          <Form.Label>Image</Form.Label>
          <Form.Control
            placeholder="image"
            name="image"
            onChange={handleChange}
            value={updatedPost.image ? updatedPost.image : ""}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button className="edit-button save-changes-button btn text-light border-0 rounded-0 m-2" onClick={saveUpdatedPost}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      {posts ? (
        <>
        <div className="container">
          <div class="row">
            {posts.map((post) => {
              
              return (
                <div class="col-4">
                  {" "}
                  <div className="border my-4 p-4" key={post._id}>
                    <h4 className="blinker">{post.title}</h4>
                    <p className="roboto font-18">Category: {post.category}</p>
                    <p className="roboto font-18">{post.description}</p>

                    <img src={post.image} className="postsImageAdmin"></img>
                    <div className="mt-5">
                      <Button  className="edit-button roboto custom-button btn text-light border-0 rounded-0 m-2"
                      
                        onClick={() =>
                          updatePost(
                            post._id,
                            post.title,
                            post.description,
                            post.content,
                            post.category,
                            post.image
                          )
                        }
                      >
                        Edit
                      </Button>

                      <Button onClick={() => deletePost(post._id)} className="delete-button roboto custom-button btn text-light border-0 rounded-0 m-2">
                        Delete
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div></div>
        </>
      ) : (
        ""
      )}
    </div>
  );
}

export default Posts;
