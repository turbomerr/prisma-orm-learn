import express from "express"
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()
const app = express();
app.use(express.json())

app.get("/users", async (req, res) => {
    try {
        const users = await prisma.user.findMany({where : {nationality : {in : ["Turkish", "German"]}}});
        res.json(users);
    } catch (error) {
        console.log(error)
        res.status(500).json({message : error})
    }
})

app.put("/users", async(req, res) => {
    try {
        const updatedUsers = await prisma.user.update({where : {email : "omer.gokbakar@example.com"}, data : {age : 35, married : false}});
        res.json(updatedUsers);
    } catch (error) {
        console.log(error)
        res.status(500).json({message : error})
    }
})

app.delete("/users", async(req, res) => {
    try {
        const deletedUser = await prisma.user.delete({where : {email : "lucas.meyer@example.com"}})
        const recentUsers = await prisma.user.findMany();
        res.json({deletedUser : deletedUser, allUser :recentUsers })
    } catch (error) {
        console.log(error)
        res.status(500).json({message : error})
    }
})

app.listen(4000, () => {
    console.log("Server running on port 4000");
})
