/*
  Warnings:

  - You are about to drop the column `descriotion` on the `Article` table. All the data in the column will be lost.
  - Added the required column `description` to the `Article` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Article" DROP COLUMN "descriotion",
ADD COLUMN     "description" TEXT NOT NULL;