import mongoose from "mongoose";
const connection={

}
async function dbConnect(){
    if(connection.isConnected){
        return
    }
    const db=await mongoose.connect(process.env.DATABASE_KEY)
    console.log("db is connecting");
    connection.isConnected=db.connections[0].readyState;
}
export default dbConnect