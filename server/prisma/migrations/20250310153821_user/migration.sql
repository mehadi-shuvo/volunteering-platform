-- AlterTable
ALTER TABLE "User" ALTER COLUMN "causes_supported" SET DEFAULT ARRAY[]::TEXT[],
ALTER COLUMN "volunteer_history" SET DEFAULT ARRAY[]::TEXT[];
