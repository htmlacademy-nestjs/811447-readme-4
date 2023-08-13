-- AlterTable
ALTER TABLE "posts" ADD COLUMN     "typeTypeId" INTEGER;

-- CreateTable
CREATE TABLE "types" (
    "type_id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "types_pkey" PRIMARY KEY ("type_id")
);

-- AddForeignKey
ALTER TABLE "posts" ADD CONSTRAINT "posts_typeTypeId_fkey" FOREIGN KEY ("typeTypeId") REFERENCES "types"("type_id") ON DELETE SET NULL ON UPDATE CASCADE;
