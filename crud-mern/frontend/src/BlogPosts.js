import React, { Component } from "react";
import axios from "axios";
import { Navigation } from "./Navigation";
import {
  ListGroup,
  ListGroupItem,
  Button,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
} from "reactstrap";
import { Footer } from "./Footer";

export const BlogPosts = () => {
  const [posts, setPosts] = React.useState(null);

  React.useEffect(() => {
    axios.get("/posts").then((response) => {
      setPosts(response.data);
    });
  }, []);
  if (!posts) return null;
  return (
    <>
      <Navigation />

      <div
        className="blog-banner"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1482059470115-0aadd6bf6834?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=80")`,
        }}
      >
        <h1 className="text-center align-middle pt-5">Blog</h1>
      </div>
      {posts ? (
        <div className="row justify-content-center mt-5">
          <div className="col-5 my-5">
            {
              <div className="">
                {posts.map((post) => {
                  return (
               
 
                      <figure class="snip1418 background-color" key={post._id}>
                        <img
                          src={post.image}
                          alt="sample85"
                        />

                        <figcaption>
                          <h3>{post.title}</h3>
                          <p>Author: Admin</p>
                          <p>
                              {post.description}
                          </p>
                          <Button className="mt-5">
                          Read More...
                        </Button>
                        </figcaption>
                        <a href="#"></a>
                      </figure>
              
                  );
                })}
              </div>
            }
          </div>
          <div className="col-2 ms-5 mt-5">
     
            <h3 class="head1 ms-4">CATEGORIES</h3>
					<ul class="list">
						<li><a href="#">Suspendisse massa mi </a></li>
						<li><a href="#">Porttitor at velit id </a></li>
						<li><a href="#">Congue adipiscing </a></li>
						<li><a href="#">Vestibulum vitae porta </a></li>
						<li><a href="#">Vivamus ac sodales </a></li>
						<li><a href="#">Massa quis adipiscing </a></li>
						<li><a href="#">Phasellus hendrerit </a></li>
						<li><a href="#">Libero in sapien </a></li>
						<li><a href="#">Dignissim vel imperdiet </a></li>
					</ul>
					<h3 class="head1 ms-4">ARCHIVES</h3> 
					<ul class="list">
						<li><a href="#">November 2022</a></li>
						<li><a href="#">October 2022</a></li>
						<li><a href="#">September 2022</a></li>
						<li><a href="#">August 2022</a></li>
						<li><a href="#">July 2022</a></li>
					</ul>
            </div>
     
          </div>
     
      ) : (
        ""
      )}
      <Footer/>
    </>
  );
};
