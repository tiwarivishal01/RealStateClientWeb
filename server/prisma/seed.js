import { PrismaClient } from "@prisma/client";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const prisma = new PrismaClient();

async function main() {
  console.log("Starting database seeding...");

  // Wipe the collections for a clean seed
  console.log("Clearing existing Residency and User records...");
  await prisma.residency.deleteMany({});
  await prisma.user.deleteMany({});

  // Read Residency.json
  const dataPath = path.join(__dirname, "../data/Residency.json");
  const rawData = fs.readFileSync(dataPath, "utf8");
  const residencies = JSON.parse(rawData);

  // Extract unique user emails from the seed data
  const emails = [...new Set(residencies.map((r) => r.userEmail))];
  console.log(`Found ${emails.length} unique users in seed data:`, emails);

  // Upsert users
  for (const email of emails) {
    await prisma.user.create({
      data: {
        email,
        name: email.split("@")[0],
        image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
      },
    });
    console.log(`Created user: ${email}`);
  }

  // Create residencies
  let createdCount = 0;
  for (const resData of residencies) {
    const id = resData._id.$oid;
    await prisma.residency.create({
      data: {
        id,
        title: resData.title,
        description: resData.description,
        price: Number(resData.price),
        address: resData.address,
        city: resData.city,
        country: resData.country,
        image: resData.image,
        facilities: resData.facilities,
        owner: { connect: { email: resData.userEmail } },
        createdAt: new Date(resData.createdAt.$date),
        updatedAt: new Date(resData.updatedAt.$date),
      },
    });
    createdCount++;
  }

  console.log(`Seeding complete. Created ${createdCount} residencies with high-quality images.`);
}

main()
  .catch((e) => {
    console.error("Error during seeding:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
