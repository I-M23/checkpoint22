const express = require('express');
const indexRoute = require('./routes/router');
const app = express();
const port = 4000;







app.set('views','./views');
app.set('view engine','pug')

app.use(testDate)
app.use('/',indexRoute)


//creation serveur
app.listen(port,(err)=>{
    if(err){
        console.log(err)
    }
    console.log('serveur cree')
})

