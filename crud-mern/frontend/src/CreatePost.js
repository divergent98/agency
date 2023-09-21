import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import  axios from "axios";
import { Heading } from "./Heading";
function CreatePost() {
  const navigate = useNavigate();
  const [post, setPost] = useState({
    title: "",
    description: "",
    content: "",
    category: "highlight", // Default category
    image: ""
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPost((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleClick = (event) => {
    event.preventDefault();

    axios
      .post("/create", post)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    navigate("posts");
  };

  return (
    <div className="row justify-content-center">
      <Heading />
      <div className="col-6">
        <h1 className="text-center my-5">Create a Post</h1>
        <Form>
          <Form.Group>
            <Form.Label>Title</Form.Label>
            <Form.Control
              name="title"
              value={post.title}
              placeholder="title"
              onChange={handleChange}
            />
            <Form.Label>Description</Form.Label>
            <Form.Control
              name="description"
              value={post.description}
              placeholder="description"
              onChange={handleChange}
            />
            <Form.Label>Content</Form.Label>
            <Form.Control
              name="content"
              value={post.content}
              placeholder="content"
              as="textarea"
              rows={10}
              onChange={handleChange}
            />
            <Form.Label>Category</Form.Label>
            <Form.Control
              as="select" // Use a select field
              name="category"
              value={post.category}
              onChange={handleChange}
            >
              <option value="highlight">Highlight</option>
              <option value="news">News</option>
              <option value="adventure">Adventure</option>
              <option value="FeaturedBlog">Featured Blog</option>
              <option value="advice">Advice</option>
            </Form.Control>
            <Form.Label>Image</Form.Label>
            <Form.Control
              name="image"
              value={post.image}
              placeholder="image"
              onChange={handleChange}
            />
          </Form.Group>
          <Button variant="secondary" onClick={handleClick} className="mt-5">
            Create Post
          </Button>
        </Form>
        <Button variant="link" onClick={() => navigate(-1)} className="mt-5">
          Back
        </Button>
      </div>
    </div>
  );
}

export default CreatePost;
