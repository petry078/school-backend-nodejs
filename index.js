import express from 'express';
import { PrismaClient } from '@prisma/client';
import swaggerUI from 'swagger-ui-express';
import swaggerDocument from './swagger.json' with { type: "json" };

const app = express()
const prisma = new PrismaClient()
const PORT = 3000

app.use(express.json())
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

//GET all students
app.get('/', async (req, res) => {
  const students = await prisma.student.findMany()
  return res.json(students)
})

//GET student by ID
app.get('/:id', async (req, res) => {
  const id = req.params.id
  const student = await prisma.student.findUnique({
    where: {
      id: Number(id),
    },
  })
  return res.json(student)
})

//POST student
app.post('/', async (req, res) => {
const postStudent = await prisma.student.create({
  data: {
    name: req.body.name,
    age: req.body.age,
    n1: req.body.n1,
    n2: req.body.n2,
    teacher: req.body.teacher,
    class: req.body.class
  }
})
return res.json(postStudent)    
}) 

//PUT student
app.put('/:id', async (req, res) => {
  const id = req.params.id
  const student = await prisma.student.update({
    where: { id: Number(id) },
    data: {
      name: req.body.name,
      age: req.body.age,
      n1: req.body.n1,
      n2: req.body.n2,
      teacher: req.body.teacher,
      class: req.body.class
    }
  })

  return res.json(student)
})

//PATCH student
app.patch('/:id', async (req, res) => {
  const id = req.params.id
  const student = await prisma.student.update({
    where: { id: Number(id) },
    data: {
      name: req.body.name,
      age: req.body.age,
      n1: req.body.n1,
      n2: req.body.n2,
      teacher: req.body.teacher,
      class: req.body.class
    }
  })

  return res.json(student)
})

//DELETE student
app.delete('/:id', async (req, res) => {
const id = req.params.id;
try {
  await prisma.student.delete({
    where: {
      id: Number(id),
    },
  });
  res.status(200).send("Student deleted.");
} catch (error) {
  res.status(500).send("Error deleting student.");
}
});

//Server start log
app.listen(PORT, () => {
    console.log(`App runing on http://localhost:${PORT}/api-docs`)
  })
