-- CreateTable
CREATE TABLE "UserAIBoost" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "tryCount" INTEGER NOT NULL DEFAULT 0
);

-- CreateIndex
CREATE UNIQUE INDEX "UserAIBoost_email_key" ON "UserAIBoost"("email");
