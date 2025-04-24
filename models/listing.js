const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  image: {
    type:String,
    default:"https://unsplash.com/photos/palm-trees-line-a-walkway-with-geometric-art-2beINfjW6cg", 
    set: (v) => v===""?"https://unsplash.com/photos/palm-trees-line-a-walkway-with-geometric-art-2beINfjW6cg" :  v,
  },
  price: Number,
  location: String,
  country: String,
});

const Listing = mongoose.model("listing", listingSchema);
module.exports  = Listing;