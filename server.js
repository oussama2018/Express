const express =require('express') 
const app=express()
const port = 5000

/* const authMiddleWare=(req,res,next)=>{
const auth=false
auth? next():res.status(400).send('your are not allowed')
} */
const authMiddleWare = (req, res, next) => {
    const date = new Date();
    const dayOfWeek = date.getDay();
    const hour = date.getHours();
  
    (dayOfWeek >= 1 && dayOfWeek <= 5 && hour >= 9 && hour < 17)? next() : res.send('Sorry, back (Monday to Friday, from 9 to 17).')
     
    }


app.get('/',authMiddleWare,(req,res)=>{
    res.status(200).sendFile(__dirname+'/view/home.html')
})
app.get('/OurServices',authMiddleWare,(req,res)=>{
    res.status(200).sendFile(__dirname+'/view/OurServices.html')
})
app.get('/contact',authMiddleWare,(req,res)=>{
    res.status(200).sendFile(__dirname+'/view/contact.html')
})
 app.get('/.css/style.css',(req,res)=>{
    res.status(200).sendFile(__dirname+'/view/css/style.css')
}) 
/* app.use(express.static('./view/.css/style.css')) */





app.listen(port,(err)=>err?console.log(err):console.log('server is runing:', port))
