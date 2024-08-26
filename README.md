# school-backend-nodejs
CRUD to save students data for schools, made with Node.js, Express.js, Prisma Client, and PostgreSQl.

Database model (Prisma Client):

```sql
model Student {
  id Int @id @default(autoincrement())
  name String
  age Int
  n1 Int
  n2 Int
  teacher String
  class Int
}
```

HTTP Methods:

* GET all students;
* GET student by ID;
* POST student;
* PUT (update whole) student;
* PATCH (update single filed) student;
* DELETE student.
