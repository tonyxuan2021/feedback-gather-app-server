const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String,
});

mongoose.model("users", userSchema);
//loading user into model



// to create a model class
