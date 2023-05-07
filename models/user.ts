import { Schema, model, models } from 'mongoose';

const UserSchema = new Schema(
    {
      name: {
        type: String,
        required: [true, "Username is required"],
        minLenght: [4, "Username must be at least 4 characters"],
        maxLenght: [30, "Username must be at most 30 characters"]
      },
      email: {
        type: String,
        unique: [true, "Email already exists"],
        required: [true, "Email is required"],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Invalid email"]
      },
      hashedPassword: {
        // no length defined becouse we will hash the password
        type: String,
        required: [true, "Password is required"],
        select: false
      },
      img: {
        type: String,
      },
      subscribers: {
        type: Number,
        default: 0,
      },
      subscribedUsers: {
        type: [String],
      },
    },
    { timestamps: true }
  );
  
// checks if model is already created 
const User = models.User || model("User", UserSchema);

export default User;