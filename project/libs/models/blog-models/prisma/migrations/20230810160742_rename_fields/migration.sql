/*
  Warnings:

  - You are about to drop the `Post` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Post";

-- CreateTable
CREATE TABLE "posts" (
    "post_id" SERIAL NOT NULL,
    "title" TEXT NOT NULL DEFAULT '',
    "link" TEXT NOT NULL DEFAULT '',
    "announce" TEXT NOT NULL DEFAULT '',
    "description" TEXT NOT NULL DEFAULT '',
    "author" TEXT NOT NULL DEFAULT '',
    "photo" TEXT NOT NULL DEFAULT '',
    "type" INTEGER NOT NULL,
    "tags" TEXT[],
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "published_at" TIMESTAMP(3) NOT NULL,
    "userId" TEXT,

    CONSTRAINT "posts_pkey" PRIMARY KEY ("post_id")
);
