import React from "react";
import { Link } from "react-router-dom";
import luxpool from "./img/lux-pool.jpg";
import yellowbus from "./img/yellow-bus.jpg";
import axios from "axios";
export const Promotion = () => {
  const [posts, setPosts] = React.useState(null);
  React.useEffect(() => {
    axios.get("/posts").then((response) => {
      setPosts(response.data);
    });
  }, []);
  const getPromotedPosts = () => {
    if (!posts) return [];
    return posts.filter((post) => post.category === "promotion");
  };
  console.log("these are posts")
  console.log(posts);
  const promotedBlogs = getPromotedPosts();
  console.log(promotedBlogs)
  if (!posts) return null;
  return (
    <div className="container-fluid">
      <div className="row mx-y">
        <div
          className="col-lg-6 col-md-12 col-sm-12 promotion-image"
          style={{ backgroundImage: `url(${promotedBlogs[0].image})` }}
        ></div>
        <div className="col-lg-6 col-md-12 col-sm-12 p-5 background-green align-middle">
          <h3 className="gradient-headline">
           {promotedBlogs[0].title}
          </h3>
          <p className="pt-3 custom-paragraph">
          {promotedBlogs[0].description}
          </p>
          <Link className="blinker capitalize decoration-none space-between font-18"   to={`/SinglePost/${promotedBlogs[0]._id}/`}>
            Read more...
          </Link>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6 col-md-12 col-sm-12 background-blue p-5 align-middle">
          <h3 className="gradient-headline">
          {promotedBlogs[1].title}
          </h3>
          <p className="pt-3 custom-paragraph">
          {promotedBlogs[1].description}
          </p>
          <Link
            className="blinker capitalize decoration-none space-between font-18"
            to={`/SinglePost/${promotedBlogs[1]._id}/`}
          >
            Read more...
          </Link>
        </div>

        <div
          className="col-lg-6 col-md-12 col-sm-12 promotion-image"
          style={{ backgroundImage: `url(${promotedBlogs[1].image})` }}
        ></div>
      </div>
    </div>
  );
};
