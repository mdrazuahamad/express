const router = require('express').Router()
const{homeController,aboutController,helpController,contactController} = require('./controller')



router.get('/',homeController )

router.get('/about',aboutController)

router.get('/help',helpController)

router.get('/contact',contactController)




module.exports= router