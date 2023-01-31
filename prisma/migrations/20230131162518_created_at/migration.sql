/*
  Warnings:

  - You are about to drop the column `createdBy` on the `Coffee` table. All the data in the column will be lost.
  - You are about to drop the column `createdBy` on the `Flavor` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Coffee" DROP COLUMN "createdBy",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "Flavor" DROP COLUMN "createdBy",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
