import mongoose from "mongoose";
const {Schema}=mongoose;
const UserSchema=new Schema({
    firstName:{type:String,required:true},
    lastName:{type:String},
    email:{type:String,required:true},
    phone:{type:String}
})
export const userModel=mongoose.models?.profiles || mongoose.model('profiles',UserSchema)