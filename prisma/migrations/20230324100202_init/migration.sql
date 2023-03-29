-- CreateTable
CREATE TABLE "Movies" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Movies_pkey" PRIMARY KEY ("id")
);
