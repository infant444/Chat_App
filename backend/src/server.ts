import express from 'express';
import cors from 'cors';

const app=express()

app.use(express.json());
app.use(cors({
    credentials:true,
    origin:["http://localhost:4200"]
}))

app.get("/",(req,res)=>{
    res.send("success backend connnecte");
})

const PORT=process.env.PORT||5000;
app.listen(PORT,()=>{
    console.log("The server is successfully connected http://localhost:"+PORT);
})