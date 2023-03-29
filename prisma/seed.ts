import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const movie = await prisma.movies.create({
    data: {
      name: "Film 1",
      description: "Film 1 description"
    }
  })
  console.log(movie);
}

//подключается к базе, если все ок, то отключается и умирает
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
