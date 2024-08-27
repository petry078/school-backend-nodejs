# school-backend-nodejs

CRUD to save students data for schools. It stores the id, name, age, scores (n1 and n2), teacher, and class assigned to each student.

Live: __

Made with:

* `JavaScript & Node.js` -> Programming;
* `Express.js` -> Server framework;
* `Prisma Client` -> ORM; 
* `Neon DB & PostgreSQl` -> Database solution.
* `Swagger UI` -> API endpoint documentation.
* `Vercel` -> Deploy.

Database model:

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

Available HTTP Methods:

* GET all students;
* GET student by ID;
* POST student;
* PUT (update whole) student;
* PATCH (update single filed) student;
* DELETE student.