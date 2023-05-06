const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add a name"],
    },
    email: {
      type: String,
      required: [true, "Please add a Email"],
      unique: true,
      trim: true,
      match: [
        /^([\w\!\#$\%\&\'\*\+\-\/\=\?\^\`{\|\}\~]+\.)*[\w\!\#$\%\&\'\*\+\-\/\=\?\^\`{\|\}\~]+@((((([a-z0-9]{1}[a-z0-9\-]{0,62}[a-z0-9]{1})|[a-z])\.)+[a-z]{2,6})|(\d{1,3}\.){3}\d{1,3}(\:\d{1,5})?)$/,
        "Please enter a valid Email",
      ],
    },
    password: {
      type: String,
      required: [true, "Please add a Password"],
      minLength: [6, "Password must be up to 6 characters"],
      maxLength: [23, "Password must not be more than 23 characters"],
    },
    photo: {
      type: String,
      required: [true, "Please add a photo"],
      default: "https://i.ibb.co/4pDNDk1/avatar.png",
    },
    phone: {
      type: String,
      default: "+84",
    },
    bio: {
      type: String,
      maxLength: [250, "Password must not be more than 250 characters"],
      default: "bio",
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
