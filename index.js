import express from 'express';
import { PrismaClient } from '@prisma/client';

const app = express()
const prisma = new PrismaClient()
const PORT = 3000

app.use(express.json())

//GET all students
app.get('/', async (req, res) => {
    const students = await prisma.note.findMany()
    return res.json(students)
  })
  
//GET student by ID
app.get('/:id', async (req, res) => {
    const id = req.params.id
    const noted = await prisma.note.findUnique({
      where: {
        id: Number(id),
      },
    })
    return res.json(noted)
  })

//POST student
app.post('/', async (req, res) => {
    const newNoted = await prisma.note.create({
      data: {
        noted: req.body.noted,
      },
    })
  
    return res.json(newNoted)
  })
  
//DELETE student
  app.delete('/:id', async (req, res) => {
    const id = req.params.id
  
    await prisma.note.delete({
      where: { id: Number(id) },
    })
  
    res.json(`Note ${id} deleted.`)
  })

//Server start log
app.listen(PORT, () => {
    console.log(`App runing on http://localhost:${PORT}/`)
  })