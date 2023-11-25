import mongoose from "mongoose";
const {Schema}=mongoose;
const userScehma= new Schema({
    name:{type:String},
    email:{type:String},
    phone:{type:String},
})
export const userModel=mongoose.models?.data || mongoose.model("data",userScehma);