import React, { Component } from "react";
import { useEffect, useState, useRef } from "react";
import axios from "axios";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import { Heading } from "./Heading";
import delete_icon from "./img/trash-bin.png";
import edit_icon from "./img/pen.png";
function Posts() {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [searchPost, setSearchPost] = React.useState(null);
  const [updatedPost, setUpdatedPost] = useState({
    id: "",
    title: "",
    description: "",
    content: "",
    category: "",
    image: "",
  });
  const [show, setShow] = useState(false);
  const [path, setPath] = useState(""); // Initialize path as an empty string
  const pathArray = []; // If you want to store multiple paths as an array
  const [pathArrayState, setPathArrayState] = useState([]);
  const cloudinaryRef = useRef();
  const widgetRef = useRef();
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

  const filteredPosts = posts.filter((post) => {
    const postMatch = searchPost 
    ? post.title.toLowerCase().includes(searchPost.toLowerCase())
    : true;
    return postMatch;
  });



  const deletePost = (id) => {
    console.log(id);
    axios
      .delete(`/delete/${id}`)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));

    // document.location.reload(true);
  };
  updatedPost.image=pathArrayState[0];
  return (
    <div>

      <Heading />
      <div className="container">
      <div className="row mt-5 ">
        <div className="col-6">
          <h1 className="gradient-headline">Posts page</h1>
        </div>
        <div className="col-lg-4">
         
          <input
            className="form-control"
            placeholder="Search Posts"
            value={searchPost}
            onChange={(e) => setSearchPost(e.target.value)}
          />
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
          <div className="row g-0">
            <div className="col-2">
              <button className="w-100 btn btn-success custom-border-right" onClick={() => widgetRef.current.open()}>Upload</button></div>
            <div className="col-10"> <Form.Control
            className="custom-border-left" 
            placeholder="image"
            name="image"
            onChange={handleChange}
            value={updatedPost.image ? updatedPost.image : ""}
          /></div>
          </div>
         
             
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
            {filteredPosts.map((post) => {
              
              return (
                <div class="col-4">
                  {" "}
                  <div className="border my-4 p-4" key={post._id}>
                    <h4 className="blinker">{post.title}</h4>
                    <p className="roboto font-18">Category: {post.category}</p>
                    <p className="roboto font-18">{post.description}</p>

                    <img src={post.image} className="postsImageAdmin"></img>
                    <div className="mt-5">
                      <Button                 className="btn border-0 bg-transparent"
                      
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
                                      <img src={edit_icon} />
                      </Button>

                      <Button onClick={() => deletePost(post._id)}                 className="btn border-0 bg-transparent">
                      <img src={delete_icon} />
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div></div>
        </>
      ) : (
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
                      <Button                  className="btn border-0 bg-transparent"
                      
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
                           <img src={edit_icon} />
                      </Button>

                      <Button onClick={() => deletePost(post._id)}                 className="btn border-0 bg-transparent">
                      <img src={delete_icon} />
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div></div>
        </>
      )}
    </div>
  );
}

export default Posts;
