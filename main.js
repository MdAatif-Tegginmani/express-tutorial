// const express = require('express')
// const path = require('path');

// const app = express()

// app.set('views', path.join(__dirname, 'views'));

// app.set('view engine', 'ejs')



// // app.get('/about', (req,res)=>{
// //     res.send('Waddup')

// // })

// // app.get('/name',(req,res)=>{
// //     res.send('Name is bond james bond')
// // })

// // app.get('/name/:username',(req,res)=>{
// //     res.send(` My name is ${req.params.username}`)
// // })

// app.get('/',(req,res)=>{
//     res.render('index')
// },
// )

// // app.get('/contact',(req,res)=>{
// //     res.render('contact')
// // },
// // )

// app.listen(3000)

const express = require('express');
// const path = require('path');
const app = express();

// Set the views directory

// Set the view engine
app.set('view engine', 'ejs');
app.use(express.static('./public'))

// Your routes and other middleware go here

app.get('/',(req,res)=>{
        res.render('index')
    },)

app.get('/error',(req,res)=>{
    throw error('Something not working ')
})



app.use(function errorHandler (err, req, res, next) {
    if (res.headersSent) {
      return next(err)
    }
    res.status(500)
    res.render('error', { error: err })
  })






// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});



