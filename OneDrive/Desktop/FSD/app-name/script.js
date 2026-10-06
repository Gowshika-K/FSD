const express =require('express');
const app = express();
const port = 3000;
app.use(express.json());
let students=[
    {id:1,name:"John",age:20},
    {id:2,name:"Jane",age:22}
];
app.get('/students',(req,res)=>{
    res.json(students);
}
);
app.get('/students/:id',(req,res)=>{
    const id =Number(req.params.id);
    const student = students.find(s=>s.id===id);
    if(student){
        res.json(student);
    }
    