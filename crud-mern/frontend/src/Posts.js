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
    image: "",
  });
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const updatePost = (id, title, description, image) => {
    setUpdatedPost((prev) => {
      return {
        ...prev,
        id: id,
        title: title,
        description: description,
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
      <div className="row mt-5">
        <div className="col-10 ps-5">
          <h1 className="ps-2">Posts page</h1>
        </div>
        <div className="col-2">
          <Button variant="secondary" onClick={() => navigate("/create")}>
            New Post
          </Button>
        </div>
      </div>
      
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update a post</Modal.Title>
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
            value={updatedPost.description ? updatedPost.description : ""}
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
          <Button variant="Link" onClick={handleClose}>
            Close
          </Button>
          <Button variant="secondary" onClick={saveUpdatedPost}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      {posts ? (
        <>
          <div class="row">
            {posts.map((post) => {
              return (
                <div class="col-4">
                  {" "}
                  <div className="border m-4 p-4" key={post._id}>
                    <h4>{post.title}</h4>
                    <p>{post.description}</p>
                    <img src={post.image} className="postsImageAdmin"></img>
                    <div className="mt-5">
                      <Button className="me-5"
                      variant="secondary"
                        onClick={() =>
                          updatePost(
                            post._id,
                            post.title,
                            post.description,
                            post.image
                          )
                        }
                      >
                        Edit
                      </Button>

                      <Button onClick={() => deletePost(post._id)} variant="secondary">
                        Delete
                      </Button>
                    </div>
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

export default Posts;
