-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_UserAIBoost" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "tryCount" INTEGER NOT NULL DEFAULT 0,
    "isPremium" BOOLEAN NOT NULL DEFAULT false,
    "premiumType" TEXT
);
INSERT INTO "new_UserAIBoost" ("email", "id", "name", "tryCount") SELECT "email", "id", "name", "tryCount" FROM "UserAIBoost";
DROP TABLE "UserAIBoost";
ALTER TABLE "new_UserAIBoost" RENAME TO "UserAIBoost";
CREATE UNIQUE INDEX "UserAIBoost_email_key" ON "UserAIBoost"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
