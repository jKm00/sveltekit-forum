-- CreateTable
CREATE TABLE "Likes" (
    "authUserId" TEXT NOT NULL,
    "postId" INTEGER NOT NULL,

    PRIMARY KEY ("authUserId", "postId"),
    CONSTRAINT "Likes_authUserId_fkey" FOREIGN KEY ("authUserId") REFERENCES "auth_user" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Likes_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
