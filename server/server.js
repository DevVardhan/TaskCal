import express from 'express'
import * as dotenv from 'dotenv'
import ConnectDB from './Database/connect.js';

dotenv.config();

const app = express();
app.use(express.json());

const startSerever = () =>{
    try{
        ConnectDB(process.env.DB_URL)
        app.listen(process.env.PORT , () =>{
            console.log(`Server Connected to ${process.env.PORT}`);
        })
    }
    catch(err){
        console.log("Err encounterd while starting server");
    }
};

app.get('/' , (req , res) =>{
    res.status(200).send("Hello!")
})

startSerever();