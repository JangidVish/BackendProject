//require('dotenv').config({path: './env'})
 import dotenv from 'dotenv'
// import { DB_NAME } from './constants';
import connectDB from './db/db.js';


 dotenv.config({
     path:'./env'
 })



connectDB()












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