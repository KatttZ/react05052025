const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static("public"))
app.use(express.urlencoded({extends:true}))
app.use(express.json())
// app.use(logger)

// app.get("/", (req, res) => {
//     console.log("Here") 
//     // res.sendStatus(500)
//     // res.send('HI')
//     // res.status(500).send('Hi')
//     // res.status(500).json({message:'Error'})
//     // res.json({message:"Error"})
//     // res.download('server.js')
//     res.render('index', {textrandom:"World"})
// })

const userRouter = require('./routes/users')

app.use('/users', userRouter)

// middleware
// function logger(req, res, next){
//  console.log(req.originalUrl)
//  next()
// }


app.listen(3000);
