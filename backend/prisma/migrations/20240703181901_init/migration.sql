-- CreateTable
CREATE TABLE "Candidate" (
    "id" BIGSERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" VARCHAR(11) NOT NULL,
    "isSignIn" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Candidate_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Technologies" (
    "id" BIGSERIAL NOT NULL,
    "candidateId" BIGINT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Technologies_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Level" (
    "id" BIGSERIAL NOT NULL,
    "technologyId" BIGINT NOT NULL,
    "level" TEXT NOT NULL,

    CONSTRAINT "Level_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Candidate_email_key" ON "Candidate"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Technologies_name_key" ON "Technologies"("name");

-- CreateIndex
CREATE INDEX "Technologies_candidateId_idx" ON "Technologies"("candidateId");

-- CreateIndex
CREATE UNIQUE INDEX "Level_technologyId_key" ON "Level"("technologyId");

-- AddForeignKey
ALTER TABLE "Technologies" ADD CONSTRAINT "Technologies_candidateId_fkey" FOREIGN KEY ("candidateId") REFERENCES "Candidate"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Level" ADD CONSTRAINT "Level_technologyId_fkey" FOREIGN KEY ("technologyId") REFERENCES "Technologies"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
