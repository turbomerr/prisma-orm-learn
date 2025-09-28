// prisma.config.ts
import "dotenv/config";
import { defineConfig } from "prisma/config";

export default defineConfig({
 
 migrations: {
    seed: "tsx prisma/seed.ts", // <-- seed burada
  },
});
