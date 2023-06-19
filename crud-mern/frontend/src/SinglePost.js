import React from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";
const SinglePost = () => {
  const { postId } = useParams();
  const [posts, setPosts] = React.useState(null);

  React.useEffect(() => {
    axios.get("/posts").then((response) => {
      setPosts(response.data);
    });
  }, []);
  if (!posts) return null;
  console.log("test");
  const post = posts.find((post) => post.id === postId);
  	const htmlString = post.content;
    console.log(htmlString)

    console.log(typeof(htmlString));

  

  return (
    <section>
      <Navigation />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-9">
            <div
              style={{ backgroundImage: `url(${post.image})` }}
              className="single-blog-cover news-post-image"
            ></div>
            <div className="row">
                <h2>{post.title}</h2>
                <p>Autor: Admin</p>
                <div className="blog-body" dangerouslySetInnerHTML={{__html: htmlString}} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};
export default SinglePost;
