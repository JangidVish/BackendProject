//require('dotenv').config({path: './env'})
 import dotenv from 'dotenv'
// import { DB_NAME } from './constants';
import connectDB from './db/db.js';
import { app } from './app.js';


 dotenv.config({
     path:'./env'
 })



connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`Server is running at port: ${process.env.PORT}`);
    })

    app.on("error", (error)=>{
        console.log("ERRR: ", error);
        throw error
    })
})
.catch((err)=>{
    console.log("MONGODB Connection failed !!! ". err);
})












/*
;(async ()=>{
    try{
        await moongose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        app.on("error",(error)=>{
            console.log("ERRR: ", error);
            throw error
        })

        app.listen(process.env.PORT, ()=>{
            console.log(`App is listening on ${PORT}`);
        })
    }
    catch(error){
        console.log("Error: ", error);
        throw err
    }
})()
*/