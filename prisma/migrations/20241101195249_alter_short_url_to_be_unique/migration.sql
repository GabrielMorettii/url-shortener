/*
  Warnings:

  - A unique constraint covering the columns `[shortUrl]` on the table `short_urls` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "short_urls_shortUrl_key" ON "short_urls"("shortUrl");
