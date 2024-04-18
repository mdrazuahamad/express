const express = require ('express')

const app = express()

app.get('/', (req,res)=>{
    res.json({
        mesage: 'Hello JSON'
    })
})

app.listen(4000,()=>{
    console.log('Server is listening on PORT 4000');
})