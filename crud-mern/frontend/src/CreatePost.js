import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Heading } from "./Heading";

function CreatePost() {
  const navigate = useNavigate();
  const [post, setPost] = useState({
    title: "",
    description: "",
    content: "",
    category: "highlight", // Default category
    image: "",
  });
  const [path, setPath] = useState(""); // Initialize path as an empty string
  const pathArray = []; // If you want to store multiple paths as an array
  const [pathArrayState, setPathArrayState] = useState([]);
  const cloudinaryRef = useRef();
  const widgetRef = useRef();
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
  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    widgetRef.current = cloudinaryRef.current.createUploadWidget(
      {
        cloudName: "dhawwwo4n",
        uploadPreset: "kpkdwfiu",
      },
      function (error, data) {
        console.log("Received data:", data.info.files);
        if (data && data.info && data.info.files) {
          const uploadInfo = data.info.files;
          uploadInfo.forEach((item, index) => {
            console.log(`Element ${index}:`, item.uploadInfo);
            pathArray.push(item.uploadInfo.url);
          });

          setPathArrayState(pathArray);

          // Set post.image to the first URL in pathArrayState
          if (pathArrayState[0]) {
            setPost((prevPost) => ({
              ...prevPost,
              image: pathArrayState[0],
            }));
          }

          // Push path to the array if you want to store multiple paths
          console.log(pathArray);
        } else {
          console.error("The expected data structure is not present.");
        }
      }
    );
  }, []);

  // ...
  post.image = pathArrayState[0];

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
              <option value="promotion">Promotion</option>
            </Form.Control>
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
              value={post.image}
              placeholder="image"
              onChange={handleChange}
            />
          </div>
        </div>

        <p>{path}</p>
        <p>{pathArrayState.join(", ")}</p>
        <Button variant="secondary" onClick={handleClick} className="mt-5">
          Create Post
        </Button>
        <Button variant="link" onClick={() => navigate(-1)} className="mt-5">
          Back
        </Button>
      </div>
    </div>
  );
}

export default CreatePost;
