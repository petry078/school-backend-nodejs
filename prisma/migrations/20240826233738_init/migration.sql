-- CreateTable
CREATE TABLE "Student" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "n1" INTEGER NOT NULL,
    "n2" INTEGER NOT NULL,
    "teacher" TEXT NOT NULL,
    "class" INTEGER NOT NULL,

    CONSTRAINT "Student_pkey" PRIMARY KEY ("id")
);
