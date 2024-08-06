/*
  Warnings:

  - Added the required column `contentDueDate` to the `Project` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `Project` table without a default value. This is not possible if the table is not empty.
  - Added the required column `eventDate` to the `Project` table without a default value. This is not possible if the table is not empty.
  - Added the required column `proposedStartDate` to the `Project` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Project_title_key";

-- AlterTable
ALTER TABLE "Project" ADD COLUMN     "contentDueDate" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "eventDate" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "proposedStartDate" TIMESTAMP(3) NOT NULL;
