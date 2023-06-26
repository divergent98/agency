const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();

require("dotenv/config");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

mongoose
  .connect(process.env.CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "mern-crud",
  })
  .then(() => {
    console.log("Database Connection is ready...");
  })
  .catch((err) => {
    console.log(err);
  });
app.get("/", (req, res) => {
  res.send("Express is here");
});
//--------------------------------------------------------------------------------------post schema
const postSchema = mongoose.Schema({
  title: String,
  description: String,
  content: String,
  category: String,
  image: String,
});
const Post = mongoose.model("Post", postSchema);
//--------------------------------------------------------------------------------------product schema
const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  description2: {
    type: String,
    required: true,
  },
  date: { 
    type: Date, 
    default: Date.now 
  },
  image: {
    type: String,
    default: "",
  },
  price: {
    type: Number,
    default: 0,
  },
  category: {
    type: String,
    default: "",
    required: true,
  },

});
const Product = mongoose.model("Product", productSchema);
//--------------------------------------------------------------------------------------reservation schema
const reservationSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  date: { 
    type: Date, 
    default: Date.now 
  },
  destination: {
    type: String,
    default: "",
  },
  cardno: {
    type: String,
    required: true,
  },
  carddate: { 
    type: String, 
    required: true,
  },
  cvc: {
    type: String,
    required: true,
  },
});
const Reservation = mongoose.model("Reservation", reservationSchema);
// --------------------------------------------------------------------------------------Post
app.post("/create", (req, res) => {
  Post.create({
    title: req.body.title,
    description: req.body.description,
    content: req.body.content,
    category: req.body.category,
    image: req.body.image,
  })
    .then((doc) => console.log(doc))
    .catch((err) => console.log(err));
});
app.get("/posts", (req, res) => {
  Post.find()
    .then((items) => res.json(items))
    .catch((err) => console.log(err));
});
app.delete("/delete/:id", (req, res) => {
  console.log(req.params);
  Post.findByIdAndDelete(
    { _id: req.params.id },
    {
      title: req.body.title,
      description: req.body.description,
      content: req.body.content,
      category: req.body.category,
      image: req.body.image,
    }
  )
    .then((doc) => console.log(doc))
    .catch((err) => console.log(err));
});
app.put("/update/:id", (req, res) => {
  Post.findByIdAndUpdate(
    { _id: req.params.id },
    {
      title: req.body.title,
      description: req.body.description,
      content: req.body.content,
      category: req.body.category,
      image: req.body.image,
    }
  )
    .then((doc) => console.log(doc))
    .catch((err) => console.log(err));
});
// --------------------------------------------------------------------------------------Product
app.post("/createProduct", (req, res) => {
  Product.create({
    name: req.body.name,
    description: req.body.description,
    description2: req.body.description2,
    date: req.body.date,
    image: req.body.image,
    price: req.body.price,
    category: req.body.category,

  })
    .then((doc) => console.log(doc))
    .catch((err) => console.log(err));
});
app.get("/products", (req, res) => {
  Product.find()
    .then((items) => res.json(items))
    .catch((err) => console.log(err));
});
app.delete("/deleteProduct/:id", (req, res) => {
  console.log(req.params);
  Product.findByIdAndDelete(
    { _id: req.params.id },
    {
      name: req.body.name,
      description: req.body.description,
      description2: req.body.description2,
      date: req.body.date,
      image: req.body.image,
      price: req.body.price,
      category: req.body.category,

    }
  )
    .then((doc) => console.log(doc))
    .catch((err) => console.log(err));
});
app.put("/updateProduct/:id", (req, res) => {
  Product.findByIdAndUpdate(
    { _id: req.params.id },
    {
      name: req.body.name,
      description: req.body.description,
      description2: req.body.description2,
      date: req.body.date,
      image: req.body.image,
      price: req.body.price,
      category: req.body.category,

    }
  )
    .then((doc) => console.log(doc))
    .catch((err) => console.log(err));
});
// --------------------------------------------------------------------------------------Reservation
app.post("/createReservation", (req, res) => {
  Reservation.create({
    name: req.body.name,
    lastname: req.body.lastname,
    phone: req.body.phone,
    email: req.body.email,
    destination: req.body.destination,
    cardno: req.body.cardno,
    carddate: req.body.carddate,
    cvc: req.body.cvc
  })
    .then((doc) => console.log(doc))
    .catch((err) => console.log(err));
});
app.get("/reservation", (req, res) => {
  Resevations.find()
    .then((items) => res.json(items))
    .catch((err) => console.log(err));
});
app.delete("/deleteReservation/:id", (req, res) => {
  console.log(req.params);
  Reservation.findByIdAndDelete(
    { _id: req.params.id },
    {
      name: req.body.name,
      lastname: req.body.lastname,
      phone: req.body.phone,
      email: req.body.email,
      destination: req.body.destination,
      cardno: req.body.cardno,
      carddate: req.body.carddate,
      cvc: req.body.cvc

    }
  )
    .then((doc) => console.log(doc))
    .catch((err) => console.log(err));
});
//---------------------------------------------------------------------------------------------------
app.listen(3001, function () {
  console.log("Server is running");
});
