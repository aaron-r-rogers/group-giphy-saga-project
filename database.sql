CREATE DATABASE "giphy_search_favorites";

-- You'll need a table for storing each giphy image favorite
-- Each favorite image can be assigned 1 of the following categories as a Foreign Key

-- Category table
CREATE TABLE "category" (
  "id" SERIAL PRIMARY KEY,
  "name" VARCHAR (100) NOT NULL
);

-- Image table
CREATE TABLE "image" (
  "id" SERIAL PRIMARY KEY,
  "url" VARCHAR(2048) NOT NULL
);

-- image-category junction table
CREATE TABLE "category_junction" (
  "id" SERIAL PRIMARY KEY,
  "image_id" INT REFERENCES "image"(id),
  "category_id" INT REFERENCES "category"(id)
);

-- Default categories. You may change them :)
INSERT INTO "category" ("name")
VALUES ('funny'), ('cohort'), ('cartoon'), ('nsfw'), ('meme');

-- Image example
INSERT INTO "image" ("url")
VALUES ('https://cdn.mos.cms.futurecdn.net/BX7vjSt8KMtcBHyisvcSPK-1024-80.jpg');

-- favorites example - for testing sql, styling & functionality
-- to be removed later
INSERT INTO "category_junction" ("image_id", "category_id")
VALUES (1, 3), (1, 1);
