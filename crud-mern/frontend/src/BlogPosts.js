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

      <div>
        <div class="container-fluid blog-container-banner">
          <div class="row align-items-stretch p-0">
            <div class="col-lg-6 order-lg-1 p-0">
              <div class="h-100">
                <div class="h-100 ">
                  <div
                    class="main-blog"
                    style={{ backgroundImage: `url(${positano})` }}
                  >
                    <div className="title-space"></div>
                    <div className="title-style">
                      <hr></hr>
                      <h3 className="white-headline">
                        Even the all-powerful Pointing has Beautiful Condo has
                        no control about the blind texts
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-6 col-sm-6 col-lg-3 p-0 feature-1-wrap d-md-flex flex-md-column order-lg-1">
              <div class=" d-md-flex ">
                <div
                  class="align-self-center side-blog"
                  style={{ backgroundImage: `url(${vacation})` }}
                >
                  <div className="title-space-small"></div>
                  <div className="title-style-small">
                    <hr></hr>
                    <h3 className="white-headline side-blog-title">
                      Even the all-powerful Pointing has Beautiful Condo has no
                      control about the blind texts
                    </h3>
                  </div>
                </div>
              </div>

              <div class=" ">
                <div
                  class="align-self-center side-blog"
                  style={{ backgroundImage: `url(${iceland})` }}
                >
                  <div className="title-space-small"></div>
                  <div className="title-style-small">
                    <hr></hr>
                    <h3 className="white-headline side-blog-title">
                      Even the all-powerful Pointing has Beautiful Condo has no
                      control about the blind texts
                    </h3>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-6 col-sm-6 col-lg-3 p-0 feature-1-wrap d-md-flex flex-md-column order-lg-3">
              <div class=" d-md-flex">
                <div
                  class="align-self-center side-blog"
                  style={{ backgroundImage: `url(${iceland})` }}
                >
                  <div className="title-space-small"></div>
                  <div className="title-style-small">
                    <hr></hr>
                    <h3 className="white-headline side-blog-title">
                      Even the all-powerful Pointing has Beautiful Condo has no
                      control about the blind texts
                    </h3>
                  </div>
                </div>
              </div>

              <div class=" d-md-flex">
                <div
                  class="align-self-center side-blog"
                  style={{ backgroundImage: `url(${vacation})` }}
                >
                  <div className="title-space-small"></div>
                  <div className="title-style-small">
                    <hr></hr>
                    <h3 className="white-headline side-blog-title">
                      Even the all-powerful Pointing has Beautiful Condo has no
                      control about the blind texts
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container blog-container">
        <div className="row justify-content-center mt-5">
          {posts ? (
            <div className="col-lg-8 col-md-12 col-sm-12 my-5">
              <div className="row">
                <span className="tag">Highlighted</span>
                <hr className="tag-line"></hr>
              </div>
              {
                <div className="row">
                  {posts.map((post) => {
                    if (post.category === "highlight") {
                      return (
                        <div className="col-lg-4 col-md-4 col-sm-12">
                          <Link
                            to={`/SinglePost/${post._id}/`}
                            className="decoration-none"
                          >
                            <figure
                              class="snip background-color"
                              key={post._id}
                            >
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

          <div className="col-lg-3 col-sm-12 ms-lg-5 mt-5">
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
                          <div
                            className="col-4 news-post-image"
                            style={{ backgroundImage: `url(${post.image})` }}
                          ></div>
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
