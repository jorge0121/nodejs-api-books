import { log } from 'console';
import express from 'express';
import fs, { read } from 'fs';

const app = express();
const readData = () =>{
    try{
        const data = fs.readFileSync("./db.json");
        return JSON.parse(data);

    }catch(error){
        console.log(error);
    }
}
const writeData = () => {
    try{
        const data = fs.writeFileSync("./db.json", JSON.stringify(data));
       

    }catch(error){
        console.log(error);
    }
}
app.get("/books",(req,res)=>{
    const data = readData();
    res.json(data);
})

app.get("/books/:id",(req,res)=>{
    const data = readData();
    const id = parseInt(req.params.id)
    const book = data.books.find((e)=>e.id === id);
    res.json(book);

});
app.listen(3000,()=>{console.log("Server listening on port 3000")});
