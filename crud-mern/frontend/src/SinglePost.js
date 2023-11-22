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
  console.log(posts);
  console.log(postId);
  const post = posts.find((post) => post._id === postId);
  	const htmlString = post.content;
  return (
    <section>
      <Navigation />
     
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-9">  
          <h2 className="blog-title mb-5">{post.title}</h2>
            <div
              style={{ backgroundImage: `url(${post.image})` }}
              className="single-blog-cover news-post-image"
            ></div>
            <div className="row">
              
                <p className="blog-author mt-5">Autor: Admin</p>
                <hr></hr>
                <div className="blog-body mb-5" dangerouslySetInnerHTML={{__html: htmlString}} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};
export default SinglePost;
