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

import iceland from "./img/iceland.jpg";
import positano from "./img/positano.jpg";
import vacation from "./img/vacation.jpg";
import avatar from "./img/avatar.png";
import { Link } from "react-router-dom";

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

      <div className="container-fluid g-0 blog-container-banner">
        <div className="row g-0">
          <div
            className="col-6 main-blog"
            style={{ backgroundImage: `url(${positano})` }}
          >
            {" "}
            <div className="title-space"> </div>
            <div className="title-style">
              <hr></hr>
              <h2 className="text-light">
                Positano: A Breathtaking Coastal Gem Awaiting Your Arrival
              </h2>
            </div>
          </div>

          <div className="col-6">
            Iceland Unveiled: A Journey into the Enchanting Land of Fire and Ice
            <div
              className="col-12 side-blog"
              style={{ backgroundImage: `url(${iceland})` }}
            >
              <div className="title-space-small"> </div>
              <div className="title-style-small">
                <div>
                  <hr></hr>
                  <h2 className="text-light font-24">
                    Iceland Unveiled: A Journey into<br></br> the Enchanting
                    Land of Fire and Ice
                  </h2>
                </div>
              </div>
            </div>
            <div
              className="col-12 side-blog"
              style={{ backgroundImage: `url(${vacation})` }}
            >
              <div className="title-space-small"> </div>
              <div className="title-style-small">
                <div>
                  <hr></hr>
                  <h2 className="text-light font-24">
                    Paradise Beckons: 5 Essential Tips<br></br> for Your
                    Tropical Travel Adventure
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-center mt-5">
          {posts ? (
            <div className="col-8 my-5">
              <div className="row">
                <span className="tag">Highlighted</span>
                <hr className="tag-line"></hr>
              </div>
              {
                <div className="row">
                  {posts.map((post) => {
                    if (post.category === "highlight") {
                      return (
                        <div className="col-4">
                          <Link to={`/SinglePost/${post._id}/`}>
                          <figure class="snip background-color" key={post._id}>
                            <img src={post.image} alt="sample85" />

                            <figcaption>
                              <h3>{post.title}</h3>
                              <hr className="snip-line"></hr>
                              <div className="author">
                                <img className="avatar me-3" src={avatar} />
                                <p>Admin</p>
                              </div>

                              <hr className="snip-line"></hr>
                              <p>{post.description}</p>
                            </figcaption>

                          </figure>
                          </Link>
                        </div>
                      );
                    }
                  })}
                </div>
              }
            </div>
          ) : (
            ""
          )}

          <div className="col-3 ms-5 mt-5">
            <div className="row">
              <span className="tag">News</span>
              <hr className="tag-line"></hr>
            </div>
            <div>
              {posts
                ? posts.map((post) => {
                    if (post.category === "news") {
                      return (
                        <div className="row ms-2 news-post">
                          <div className="col-4 news-post-image" style={{ backgroundImage: `url(${post.image})`}}>
                           
                          </div>
                          <div className="col-8">
                            <h3 className="font-18 blinker">{post.title}</h3>
                            <div className="author">
                              <img className="avatar me-3" src={avatar} />
                              <p>Admin</p>
                            </div>
                          </div>

                          <hr className="snip-line"></hr>
                        </div>
                      );
                    }
                  })
                : ""}
            </div>

            <h3 class="head1 ms-4">ARCHIVES</h3>
            <ul class="list">
              <li>
                <a href="#">November 2022</a>
              </li>
              <li>
                <a href="#">October 2022</a>
              </li>
              <li>
                <a href="#">September 2022</a>
              </li>
              <li>
                <a href="#">August 2022</a>
              </li>
              <li>
                <a href="#">July 2022</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
