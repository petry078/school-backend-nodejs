import express from 'express';
import { PrismaClient } from '@prisma/client';

const app = express()
const prisma = new PrismaClient()
const PORT = 3000

app.use(express.json())

//GET all students

app.get('/', (req, res) => {
    res.send('Hello World!')
  })
  
//GET student by ID
//POST student
//PUT (update whole) student
//PATCH (update single filed) student
//DELETE student
app.listen(PORT, () => {
    console.log(`App runing on PORT ${PORT}`)
  })