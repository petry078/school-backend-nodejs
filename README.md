# school-backend-nodejs
CRUD to save students data for schools, made with Node.js, Express.js, Prisma Client, and PostgreSQl.

Database table:

```sql
create table "students" (
  "id" serial primary key,
  "name" VARCHAR(255) not null,
  "age" INTEGER not null,
  "n1" FLOAT not null,
  "n2" FLOAT not null,
  "teacher" VARCHAR(255) not null,
  "class" INT not null
)
```

HTTP Methods:

* GET all students;
* GET student by ID;
* POST student;
* PUT (update whole) student;
* PATCH (update single filed) student;
* DELETE student.
