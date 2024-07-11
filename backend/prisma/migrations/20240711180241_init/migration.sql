-- CreateEnum
CREATE TYPE "Contribution" AS ENUM ('APPRENTICE', 'MENTOR', 'COLLABORATOR');

-- CreateEnum
CREATE TYPE "Level" AS ENUM ('STARTER', 'MIDLEVEL', 'ADVANCED');

-- CreateTable
CREATE TABLE "Candidate" (
    "id" BIGSERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" VARCHAR(11) NOT NULL,
    "contributionType" "Contribution" NOT NULL DEFAULT 'APPRENTICE',
    "isSignIn" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Candidate_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Technologies" (
    "id" BIGSERIAL NOT NULL,
    "candidateId" BIGINT NOT NULL,
    "level" "Level" NOT NULL DEFAULT 'STARTER',
    "name" TEXT NOT NULL,

    CONSTRAINT "Technologies_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Candidate_email_key" ON "Candidate"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Technologies_name_key" ON "Technologies"("name");

-- CreateIndex
CREATE INDEX "Technologies_candidateId_idx" ON "Technologies"("candidateId");

-- AddForeignKey
ALTER TABLE "Technologies" ADD CONSTRAINT "Technologies_candidateId_fkey" FOREIGN KEY ("candidateId") REFERENCES "Candidate"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
