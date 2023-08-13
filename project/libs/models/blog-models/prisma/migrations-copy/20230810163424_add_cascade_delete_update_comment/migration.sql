-- DropForeignKey
ALTER TABLE "comments" DROP CONSTRAINT "comments_postPostId_fkey";

-- AddForeignKey
ALTER TABLE "comments" ADD CONSTRAINT "comments_postPostId_fkey" FOREIGN KEY ("postPostId") REFERENCES "posts"("post_id") ON DELETE CASCADE ON UPDATE CASCADE;
