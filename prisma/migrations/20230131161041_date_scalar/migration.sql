/*
  Warnings:

  - Added the required column `updatedAt` to the `Coffee` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Flavor` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Coffee" ADD COLUMN     "createdBy" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Flavor" ADD COLUMN     "createdBy" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;
