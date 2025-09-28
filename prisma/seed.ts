import { PrismaClient, type Prisma } from "@prisma/client";

const prisma = new PrismaClient()


const users: Prisma.UserCreateManyInput[] = [
    { name: "Ömer Gokbakar", email: "omer.gokbakar@example.com", age: 27, married: false, nationality: "Turkish" },
    { name: "Bel Yılmaz", email: "bel.yilmaz@example.com", age: 25, married: false, nationality: "Turkish" },
    { name: "Noname", email: "no-name@example.com", age: 31, married: true, nationality: "German" }, // name yok (optional)
    { name: "Ava Chen", email: "ava.chen@example.com", age: 29, married: true, nationality: "Chinese" },
    { name: "Lucas Meyer", email: "lucas.meyer@example.com", age: 34, married: true, nationality: "Swiss" },
];


async function seed() { // bu fonksiyon database i baslangic verileriyle doldurmak icin kullanilir 
    

    await prisma.user.createMany({ data: users, skipDuplicates: true })
}

seed().then(() => prisma.$disconnect())