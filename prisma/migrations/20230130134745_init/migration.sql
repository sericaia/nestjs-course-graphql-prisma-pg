-- CreateTable
CREATE TABLE "Coffee" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "flavors" TEXT[],

    CONSTRAINT "Coffee_pkey" PRIMARY KEY ("id")
);
