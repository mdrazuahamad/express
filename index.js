const express = require ('express')

const cors = require ('cors');
const morgan = require ('morgan');
const router = require('./routes');

const app = express()

app.use(require('./routes'))

app.listen(4000,()=>{
    console.log('Server is listening on PORT 4000');
})