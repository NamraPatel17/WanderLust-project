const mongoose = require("mongoose");
const { stringify } = require("querystring");
const review = require("./review");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  image: {
    type: String,
    default:"https://images.unsplash.com/photo-1566438480900-0609be27a4be?q=80&w=1988&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  price: Number,
  location: String,
  country: String,
  review:[
    {
      type: Schema.Types.ObjectId,
      ref:"Review",
    },
  ],
});

const Listing = mongoose.model("listing", listingSchema);
module.exports  = Listing;
