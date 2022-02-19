const path= require('path');

const express=require('express');
const bodyParser = require('body-parser');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop'); 

const app=express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')));

app.use('/admin',adminRoutes); 
app.use(shopRoutes);

// app.use('/',(req,res,next)=> {
//     console.log("This always run!!");
//     next();
// })

 

// app.use('/',(req,res,next)=>{
//     console.log("I am in another middleware!");
//     res.send('<h1>Hello  From Express<h1>');
// })

app.use((req,res,next)=> {
    // res.status(404).send('<h1>Page Not Found</h1>');
    res.status(404).sendFile(path.join(__dirname,'views','404.html'));

});


app.listen(3000);



// In the next lecture, we'll write this code:

// module.exports = path.dirname(process.mainModule.filename);
// (I explain why we write this code in the next lecture when we write it!)

// The important thing is that you might get a deprecation warning for that code - in that case, you can simply switch to this code:

// module.exports = path.dirname(require.main.filename);
// Quite straightforward :)