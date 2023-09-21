import React, { Component } from "react";
import axios from "axios";
import { Navigation } from "./Navigation";
import { Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap";
import { Footer } from "./Footer";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import iceland from "./img/iceland.jpg";
import positano from "./img/positano.jpg";
import vacation from "./img/vacation.jpg";
import avatar from "./img/avatar.png";
import { Link } from "react-router-dom";

export const BlogPosts = () => {
  const [posts, setPosts] = React.useState(null);
  const [activeTab, setActiveTab] = React.useState("1");
  React.useEffect(() => {
    axios.get("/posts").then((response) => {
      setPosts(response.data);
    });
  }, []);
  const getFeaturedPosts = () => {
    if (!posts) return [];
    return posts.filter((post) => post.category === "FeaturedBlog");
  };

  // Get the array of featured posts
  const featuredPosts = getFeaturedPosts();
  console.log(featuredPosts);
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
                  <Link
                    to={`/SinglePost/${featuredPosts[0]._id}/`}
                    className="decoration-none"
                  >
                    <div
                      class="main-blog"
                      style={{
                        backgroundImage: `url(${featuredPosts[0].image})`,
                      }}
                    >
                      <div className="title-space"></div>
                      <div className="title-style">
                        <hr></hr>
                        <h3 className="white-headline">
                          {featuredPosts[0].title}
                        </h3>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            <div class="col-6 col-sm-6 col-lg-3 p-0 feature-1-wrap d-md-flex flex-md-column order-lg-1">
              <div class="">
                <Link
                  to={`/SinglePost/${featuredPosts[1]._id}/`}
                  className="decoration-none"
                >
                  <div
                    class="align-self-center side-blog"
                    style={{
                      backgroundImage: `url(${featuredPosts[1].image})`,
                    }}
                  >
                    <div className="title-space-small"></div>
                    <div className="title-style-small">
                      <hr></hr>
                      <h3 className="white-headline side-blog-title">
                        {featuredPosts[1].title}
                      </h3>
                    </div>
                  </div>
                </Link>
              </div>

              <div class=" ">
                <Link
                  to={`/SinglePost/${featuredPosts[2]._id}/`}
                  className="decoration-none"
                >
                  <div
                    class="align-self-center side-blog"
                    style={{
                      backgroundImage: `url(${featuredPosts[2].image})`,
                    }}
                  >
                    <div className="title-space-small"></div>
                    <div className="title-style-small">
                      <hr></hr>
                      <h3 className="white-headline side-blog-title">
                        {featuredPosts[2].title}
                      </h3>
                    </div>
                  </div>
                </Link>
              </div>
            </div>

            <div class="col-6 col-sm-6 col-lg-3 p-0 feature-1-wrap d-md-flex flex-md-column order-lg-3">
              <div class=" d-md-flex">
                <Link
                  to={`/SinglePost/${featuredPosts[3]._id}/`}
                  className="decoration-none"
                >
                  <div
                    class="align-self-center side-blog"
                    style={{
                      backgroundImage: `url(${featuredPosts[3].image})`,
                    }}
                  >
                    <div className="title-space-small"></div>
                    <div className="title-style-small">
                      <hr></hr>
                      <h3 className="white-headline side-blog-title">
                        {featuredPosts[3].title}
                      </h3>
                    </div>
                  </div>
                </Link>
              </div>

              <div class=" d-md-flex">
                <Link
                  to={`/SinglePost/${featuredPosts[4]._id}/`}
                  className="decoration-none"
                >
                  <div
                    class="align-self-center side-blog"
                    style={{
                      backgroundImage: `url(${featuredPosts[4].image})`,
                    }}
                  >
                    <div className="title-space-small"></div>
                    <div className="title-style-small">
                      <hr></hr>
                      <h3 className="white-headline side-blog-title">
                        {featuredPosts[4].title}
                      </h3>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container blog-container">
        <div className="row justify-content-center mt-5">
          <div className="col-lg-8 col-md-12 col-sm-12 my-5">
            {posts ? (
              <div className="row">
                <span className="tag">Highlighted</span>
                <hr className="tag-line"></hr>

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
            <div>
              <div class="container-fluid mt-5">
                <Nav tabs>
                  <NavItem>
                    <NavLink
                      className={activeTab === "1" ? "active" : ""}
                      onClick={() => setActiveTab("1")}
                    >
                      Adventure
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={activeTab === "2" ? "active" : ""}
                      onClick={() => setActiveTab("2")}
                    >
                      Advice
                    </NavLink>
                  </NavItem>
                </Nav>
                <TabContent activeTab={activeTab}>
                  <TabPane tabId="1">
                    <div>
                      <OwlCarousel
                        items={1}
                        className="owl-theme hidden-small-screen"
                        loop
                        nav
                        margin={8}
                      >
                        {posts ? (
                          <div className="row">
                            {
                              <div className="row">
                                {posts.map((post) => {
                                  if (post.category === "adventure") {
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
                                            <img
                                              src={post.image}
                                              alt="sample85"
                                            />

                                            <figcaption>
                                              <h3>{post.title}</h3>
                                              <hr className="snip-line"></hr>
                                              <div className="author">
                                                <img
                                                  className="avatar me-3"
                                                  src={avatar}
                                                />
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
                        )}{" "}
                      </OwlCarousel>
                      <OwlCarousel
                        items={1}
                        className="owl-theme hidden-big-screen"
                        loop
                        nav
                        margin={8}
                      >
                        <div className="mt-5">
                          {posts
                            ? posts.map((post) => {
                                if (post.category === "adventure") {
                                  return (
                                    <div className="row ms-2 news-post">
                                      <div
                                        className="col-4 news-post-image"
                                        style={{
                                          backgroundImage: `url(${post.image})`,
                                        }}
                                      ></div>
                                      <div className="col-8">
                                        <h3 className="font-18 blinker">
                                          {post.title}
                                        </h3>
                                        <div className="author">
                                          <img
                                            className="avatar me-3"
                                            src={avatar}
                                          />
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
                      </OwlCarousel>
                    </div>
                  </TabPane>
                  <TabPane tabId="2">
                    <div>
                      <OwlCarousel
                        items={1}
                        className="owl-theme hidden-small-screen"
                        loop
                        nav
                        margin={8}
                      >
                        {posts ? (
                          <div className="row">
                            {
                              <div className="row">
                                {posts.map((post) => {
                                  if (post.category === "advice") {
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
                                            <img
                                              src={post.image}
                                              alt="sample85"
                                            />

                                            <figcaption>
                                              <h3>{post.title}</h3>
                                              <hr className="snip-line"></hr>
                                              <div className="author">
                                                <img
                                                  className="avatar me-3"
                                                  src={avatar}
                                                />
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
                        )}{" "}
                      </OwlCarousel>
                      <OwlCarousel
                        items={1}
                        className="owl-theme hidden-big-screen"
                        loop
                        nav
                        margin={8}
                      >
                        <div className="mt-5">
                          {posts
                            ? posts.map((post) => {
                                if (post.category === "advice") {
                                  return (
                                    <div className="row ms-2 news-post">
                                      <div
                                        className="col-4 news-post-image"
                                        style={{
                                          backgroundImage: `url(${post.image})`,
                                        }}
                                      ></div>
                                      <div className="col-8">
                                        <h3 className="font-18 blinker">
                                          {post.title}
                                        </h3>
                                        <div className="author">
                                          <img
                                            className="avatar me-3"
                                            src={avatar}
                                          />
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
                      </OwlCarousel>
                    </div>
                  </TabPane>
                </TabContent>
              </div>
            </div>
          </div>
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
            <div className="row mt-5">
              <span className="tag">Archive</span>
              <hr className="tag-line"></hr>
            </div>
            <ul className="list roboto font-24 fw-normal ms-0 ps-0">
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
