# school-backend-nodejs
CRUD to save students data for schools, made with Node.js, Express.js, Prisma Client, and PostgreSQl.

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
