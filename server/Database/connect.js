import mongoose from "mongoose";

export default function ConnectDB(url) {
    mongoose.connect(url)
        .then(()=> console.log(`Database connection established successfully`))
        .catch((err)=>{
            console.log(`Failed to establish connection to database`);
            console.log({err});
        })
}