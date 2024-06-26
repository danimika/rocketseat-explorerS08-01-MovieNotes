import 'express-async-errors'
import { AppError } from './utils/AppError.js'
import express from 'express'
import { routes } from './routes/index.js'
const app = express()
app.use(express.json())


app.use(routes)
app.use((error, req, res, next) => {
  if (error instanceof AppError){ 
    return res.status(error.statusCode).json({
      status: "error",
      message: error.message
    })
  }
  console.error(error)

  return res.status(500).json({
    status: "error",
    message: "Internal Server Error"
  })
})


const port= 3333
app.listen(port, () => {
  console.log(`Server is running on Port ${port}`)
})