import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Posts from './Posts';
import CreatePost from './CreatePost';

import AddProducts from './AddProducts';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Products from './Products';
import { BlogPosts } from './BlogPosts';
import LoginForm from './LoginForm';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
<Route path="/" element={<App/>}/>
<Route path="/create" element={<CreatePost/>}/>
<Route path="/createProduct" element={<AddProducts/>}/>
<Route path="/create/posts" element={<Posts/>}/>
<Route path="/create/product" element={<Products/>}/>
<Route path="/BlogPosts" element={<BlogPosts/>}/>
<Route path="/Login" element={<LoginForm/>}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
