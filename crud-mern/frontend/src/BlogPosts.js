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
import avatar from "./img/avatar.png"

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
          >        <div className="title-space"> </div>
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
                  Iceland Unveiled: A Journey into<br></br>  the Enchanting Land of Fire
                  and Ice
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
                  Paradise Beckons: 5 Essential Tips<br></br> for Your Tropical Travel
                  Adventure
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
    
          <div className="col-9 my-5">
            <div className="row"> 
              <span className="tag">Highlighted</span>
              <hr className="tag-line"></hr>
            </div>
            {
              <div className="row">
                {posts.map((post) => {
                  return (
                    <div className="col-4">
                    <figure class="snip background-color" key={post._id}>
                      <img src={post.image} alt="sample85" />

                      <figcaption>
                        <h3>{post.title}</h3>
                        <hr className="snip-line"></hr>
                        <div className="author"><img className="avatar me-3" src={avatar}/><p>Admin</p></div>
             
                        <hr className="snip-line"></hr>
                        <p>{post.description}</p>
                 
                      </figcaption>
                      <a href="#"></a>
                    </figure>
                  </div>
                  );
                })}
              </div>
            }
          </div>
      
      ) : (
        ""
      )}   
      
       <div className="col-2 ms-5 mt-5">
       <div className="row"> 
              <span className="tag">News</span>
              <hr className="tag-line"></hr>
            </div>
     
            <ul class="list">
              <li>
                <a href="#">Suspendisse massa mi </a>
              </li>
              <li>
                <a href="#">Porttitor at velit id </a>
              </li>
              <li>
                <a href="#">Congue adipiscing </a>
              </li>
              <li>
                <a href="#">Vestibulum vitae porta </a>
              </li>
              <li>
                <a href="#">Vivamus ac sodales </a>
              </li>
              <li>
                <a href="#">Massa quis adipiscing </a>
              </li>
              <li>
                <a href="#">Phasellus hendrerit </a>
              </li>
              <li>
                <a href="#">Libero in sapien </a>
              </li>
              <li>
                <a href="#">Dignissim vel imperdiet </a>
              </li>
            </ul>
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
