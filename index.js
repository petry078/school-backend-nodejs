import express from 'express';
import { PrismaClient } from '@prisma/client';

const app = express()
const prisma = new PrismaClient()
const PORT = 3000

app.use(express.json())

//GET all students
app.get('/', async (req, res) => {
  try {
    const students = await prisma.student.findMany();
    return res.status(200).json(students);
  } catch (error) {
    res.status(500).send("Error fetching students.");
  }
});

//GET student by ID
app.get('/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const student = await prisma.student.findUnique({
      where: {
        id: Number(id),
      },
    });
    return res.status(200).json(student);
  } catch (error) {
    res.status(500).send(`Error fetching student ${id}.`);
  }
});

//POST student
app.post('/', async (req, res) => {
  try {
    const postStudent = await prisma.student.create({
      data: {
        name: req.body.name,
        age: req.body.age,
        n1: req.body.n1,
        n2: req.body.n2,
        teacher: req.body.teacher,
        class: req.body.class
      }
    });
    return res.status(200).json(postStudent);
  } catch (error) {
    res.status(500).send("Error creating student.");
  }
});

//PUT student
app.put('/:id', async (req, res) => {
  const id = req.params.id;
  try {
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
    });
    return res.status(200).json(student);
  } catch (error) {
    res.status(500).send(`Error updating student ${id}.`);
  }
});

//PATCH student
app.patch('/:id', async (req, res) => {
  const id = req.params.id;
  try {
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
    });
    return res.status(200).json(student);
  } catch (error) {
    res.status(500).send(`Error patching student ${id}.`);
  }
});

//DELETE student
app.delete('/:id', async (req, res) => {
  const id = req.params.id;
  try {
    await prisma.student.delete({
      where: {
        id: Number(id),
      },
    });
    res.status(200).send(`Student ${id} deleted.`);
  } catch (error) {
    res.status(500).send(`Error deleting student ${id}.`);
  }
});
//Server start log
app.listen(PORT, () => {
    console.log(`App runing on http://localhost:${PORT}/`)
  })