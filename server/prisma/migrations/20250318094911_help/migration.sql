-- CreateEnum
CREATE TYPE "URGENCY_LEVELS" AS ENUM ('LOW', 'MEDIUM', 'URGENT');

-- CreateTable
CREATE TABLE "HelpPost" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "urgency_level" "URGENCY_LEVELS" NOT NULL,
    "posted_by" TEXT NOT NULL,

    CONSTRAINT "HelpPost_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Comments" (
    "id" TEXT NOT NULL,
    "comment" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "post_id" TEXT NOT NULL,

    CONSTRAINT "Comments_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "HelpPost" ADD CONSTRAINT "HelpPost_posted_by_fkey" FOREIGN KEY ("posted_by") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comments" ADD CONSTRAINT "Comments_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comments" ADD CONSTRAINT "Comments_post_id_fkey" FOREIGN KEY ("post_id") REFERENCES "HelpPost"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
