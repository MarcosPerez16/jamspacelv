import "dotenv/config";
import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../app/generated/prisma/client";

const connectionString = `${process.env.DATABASE_URL}`;
const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });
async function main() {
  //USER 1
  const marcos = await prisma.user.upsert({
    where: { email: "marcos.perez@yahoo.com" },
    update: {},
    create: {
      name: "Marcos Perez",
      email: "marcos.perez@yahoo.com",
    },
  });
  const marcosProfile = await prisma.profile.upsert({
    where: { userId: marcos.id },
    update: {},
    create: {
      userId: marcos.id,
      name: "Marcos Perez",
    },
  });
  await prisma.instruments.upsert({
    //composite unique key: profileId + name
    where: {
      // where: search for existing record using composite unique key (profileId + name)
      profileId_name: { profileId: marcosProfile.id, name: "Guitar" },
    },
    update: {},
    // create: if not found, insert this data
    create: {
      name: "Guitar",
      profileId: marcosProfile.id,
    },
  });
  await prisma.genres.upsert({
    where: {
      profileId_name: { profileId: marcosProfile.id, name: "Metalcore" },
    },
    update: {},
    create: {
      name: "Metalcore",
      profileId: marcosProfile.id,
    },
  });
  await prisma.tunings.upsert({
    where: { profileId_name: { profileId: marcosProfile.id, name: "Drop C" } },
    update: {},
    create: {
      name: "Drop C",
      profileId: marcosProfile.id,
    },
  });

  //USER 2
  const densie = await prisma.user.upsert({
    where: { email: "dvclassof@yahoo.com" },
    update: {},
    create: {
      name: "Denise Villegas",
      email: "dvclassof@yahoo.com",
    },
  });
  const deniseProfile = await prisma.profile.upsert({
    where: { userId: densie.id },
    update: {},
    create: {
      userId: densie.id,
      name: "Denise Villegas",
    },
  });
  await prisma.instruments.upsert({
    where: { profileId_name: { profileId: deniseProfile.id, name: "Drums" } },
    update: {},
    create: {
      name: "Drums",
      profileId: deniseProfile.id,
    },
  });
  await prisma.genres.upsert({
    where: { profileId_name: { profileId: deniseProfile.id, name: "Rock" } },
    update: {},
    create: {
      name: "Rock",
      profileId: deniseProfile.id,
    },
  });
  await prisma.tunings.upsert({
    where: { profileId_name: { profileId: deniseProfile.id, name: "Drop A" } },
    update: {},
    create: {
      name: "Drop A",
      profileId: deniseProfile.id,
    },
  });
}
main()
  .then(async () => {
    await prisma.$disconnect();
    await pool.end();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    await pool.end();
    process.exit(1);
  });
