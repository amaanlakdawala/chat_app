import cookieParser from "cookie-parser";
import express, {urlencoded} from "express"
import cors from "cors"
import dotenv from "dotenv"
import connectDB from "./utils/db.js";
import userRoute from './router/user.router.js'  
import messageRoute from './router/message.router.js'





const app = express();

dotenv.config()



// Middleware Setup

app.use(express.json())
app.use(cookieParser())
const corsOptions={
    origin: ["http://localhost:5173"],
    credentials: true,
}
app.use(cors(corsOptions))
app.use(express.urlencoded({ extended: true }));
 




//API

app.use('/api/v1/user',userRoute)
app.use('/api/v1/message',messageRoute)

app.get("/",(req,res)=>{
   return res.status(200).json({
    message: "Welcome to the API",
    success:true
   })
})



//Server

app.listen(process.env.PORT, ()=>{
    connectDB();
   console.log("server running");
   
})