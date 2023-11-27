import mongoose from "mongoose";
const {Schema}=mongoose;
const userScehma= new Schema({
    title:{type:String},
    description:{type:String}
},{timestamps:true}
)
export const userModel=mongoose.models?.data || mongoose.model("data",userScehma);