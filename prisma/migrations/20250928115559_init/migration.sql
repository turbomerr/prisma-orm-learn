/*
  Warnings:

  - Added the required column `age` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nationality` to the `User` table without a default value. This is not possible if the table is not empty.
  - Made the column `name` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "public"."User" ADD COLUMN     "age" INTEGER NOT NULL,
ADD COLUMN     "married" BOOLEAN,
ADD COLUMN     "nationality" TEXT NOT NULL,
ALTER COLUMN "name" SET NOT NULL;
