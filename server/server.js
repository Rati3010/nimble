import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from 'dotenv';
import sqlConnection from "./config/db.js";
import saveDraftRoute from './routes/saveDraft.route.js'

dotenv.config();
const app = express();
app.use(bodyParser.json());
app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

app.get("/",(req,res)=>{
  res.send({"msg":'Happy to  see you'})
})
app.use('/api/saveDraft',saveDraftRoute)

app.listen(process.env.PORT || 8081 , async()=>{
  console.log(`Server is runnig on port ${process.env.port || 8081}`)
})
