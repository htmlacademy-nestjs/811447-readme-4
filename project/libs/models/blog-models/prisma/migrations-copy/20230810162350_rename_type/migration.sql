/*
  Warnings:

  - You are about to drop the column `type` on the `posts` table. All the data in the column will be lost.
  - You are about to drop the column `typeTypeId` on the `posts` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `posts` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "posts" DROP CONSTRAINT "posts_typeTypeId_fkey";

-- AlterTable
ALTER TABLE "posts" DROP COLUMN "type",
DROP COLUMN "typeTypeId",
DROP COLUMN "userId",
ADD COLUMN     "type_id" INTEGER,
ADD COLUMN     "user_id" TEXT;

-- AddForeignKey
ALTER TABLE "posts" ADD CONSTRAINT "posts_type_id_fkey" FOREIGN KEY ("type_id") REFERENCES "types"("type_id") ON DELETE SET NULL ON UPDATE CASCADE;
