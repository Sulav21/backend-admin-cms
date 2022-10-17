import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
  fName: {
    type: String,
    required: true,
    trim: true,
    maxLength: [20, "First Name must be less than 20 characters"],
  },
  lName: {
    type: String,
    required: true,
    trim: true,
    maxLength: [20, "Last Name must be less than 20 characters"],
  },
  dob: {
    type: Date,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    maxLength: [50, "Email must be less than 50 characters"],
    unique: true,
    index: 1,
  },
  phone:{
    type:String,
    required:true,
    trim:true,
    maxLength:[15,'Phone Numbers must not be more than 15 characters'],
    minLength:[9,'Phone Numbers must be atleast 9 characters']
  },
  password:{
    type:String,
    required:true,
  },
  address:{
    type:String,
    default:""
  }
},
{
    timestamps:true
}
);

export default mongoose.model('Admin',adminSchema)
