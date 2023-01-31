-- DropForeignKey
ALTER TABLE "Flavor" DROP CONSTRAINT "Flavor_coffeeId_fkey";

-- AddForeignKey
ALTER TABLE "Flavor" ADD CONSTRAINT "Flavor_coffeeId_fkey" FOREIGN KEY ("coffeeId") REFERENCES "Coffee"("id") ON DELETE CASCADE ON UPDATE CASCADE;
