import  express from "express"
import "./dbConnect.js"
import userRoute from "./Routes/userRoute.js"
import transactionRoute from "./Routes/transactionsRoute.js"
import path from "path"
const app = express()
const port = process.env.PORT || 5000


if(process.env.NODE_ENV === 'production'){
  app.use("/",express.static('client/build'));
  app.get("*",(req,res)=>{
    res.sendFile(path.resolve(__dirname,'client/build/index.html'))
  })
}












app.get('/', (req, res) => res.send('Hello World!'))


// routes

app.use(express.json())

app.use('/api/users/', userRoute);

app.use("/api/transactions/",transactionRoute)


app.listen(port, () => console.log(`Node Js server started at port ${port}!`))