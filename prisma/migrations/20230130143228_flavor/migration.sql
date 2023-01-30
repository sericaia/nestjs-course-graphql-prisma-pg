/*
  Warnings:

  - The primary key for the `Coffee` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `flavors` on the `Coffee` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Coffee" DROP CONSTRAINT "Coffee_pkey",
DROP COLUMN "flavors",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Coffee_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Coffee_id_seq";

-- CreateTable
CREATE TABLE "Flavor" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "coffeeId" TEXT NOT NULL,

    CONSTRAINT "Flavor_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Flavor_coffeeId_key" ON "Flavor"("coffeeId");

-- AddForeignKey
ALTER TABLE "Flavor" ADD CONSTRAINT "Flavor_coffeeId_fkey" FOREIGN KEY ("coffeeId") REFERENCES "Coffee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
