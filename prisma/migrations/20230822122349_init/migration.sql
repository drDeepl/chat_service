-- AlterTable
ALTER TABLE "User" ADD COLUMN     "sex" TEXT;

-- CreateTable
CREATE TABLE "Interests_User" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(32) NOT NULL,

    CONSTRAINT "Interests_User_pkey" PRIMARY KEY ("id")
);
