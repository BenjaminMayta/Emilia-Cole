const express = require ('express')
const path = require ('path')
const app = express()
const port = 3000

app.use(express.static(path.resolve(__dirname,'public')))

app.get('/',(req,res)=>res.sendFile(path.resolve(__dirname,'views','index.html')))
app.get('/about',(req,res)=>res.sendFile(path.resolve(__dirname,'views','about.html')))
app.get('/contact',(req,res)=>res.sendFile(path.resolve(__dirname,'views','contact.html')))
app.get('/music',(req,res)=>res.sendFile(path.resolve(__dirname,'views','music.html')))
app.get('*',(req,res)=>res.sendFile(path.resolve(__dirname,'views','404.html')))/* Lo que va a aparecere siempre que se entre a un lugar que no este activo y siempre se pone al final */

app.listen(port,()=>console.log(`El sevidor se ha levantado con exito en http://localhost:${port}`))