const express = require('express')
//create an express app.() is a top level express function exported in the module.
const app = express()
app.get('/',(req,res)=>{
    console.log('user hit it')
    res.status(200).send('Express Homepage')
})
app.get('/about',(req,res)=>{
    res.status(200).send('express about page')
})
app.all('*',(req,res)=>{
    res.status(404).send('<h1>Resource not found</h1>')
    
})
//functions to cover
app.listen(5000,()=>{
    console.log('server is listening on 5000...')
}
)

//app.get
//app.post
//app.put
//app.delete
//app.use