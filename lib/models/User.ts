import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String },
  profileImage: { type: String, default: "/default-avatar.png" }, // Default avatar
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
