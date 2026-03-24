/*
  Warnings:

  - A unique constraint covering the columns `[profileId,name]` on the table `Genres` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[profileId,name]` on the table `Instruments` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[profileId,name]` on the table `Tunings` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Genres_profileId_name_key" ON "Genres"("profileId", "name");

-- CreateIndex
CREATE UNIQUE INDEX "Instruments_profileId_name_key" ON "Instruments"("profileId", "name");

-- CreateIndex
CREATE UNIQUE INDEX "Tunings_profileId_name_key" ON "Tunings"("profileId", "name");
