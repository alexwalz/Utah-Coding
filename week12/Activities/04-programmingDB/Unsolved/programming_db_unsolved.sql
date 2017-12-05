-- Drops the programming_db if it already exists --
DROP DATABASE IF EXISTS programming_db;
-- Create a database called programming_db --
CREATE DATABASE programming_db;

-- Use programming db for the following statements --

CREATE TABLE programming_languages(
  -- Create a numeric column called "id" which will automatically increment its default value as we create new rows. --

  -- Create a string column called "language" --

  -- Create an integer column called "rating" --

  -- Create a boolean column called "mastered" which will automatically fill --
  -- with true when a new row is made and the value isn't otherwise defined. --

  -- Set the id as this table's primary key
);

-- Create new example rows


USE programming_db;

CREATE TABLE programming_languages (
	id INTEGER(11) AUTO_INCREMENTNOT NULL,
	languages VARCHAR(30) NOT NULL,
	rating INTEGER,
	mastered BOOLEAN DEFAULT true,
	PRIMARY KEY (id)
);


/* SELECT * FROM favorite_foods */
/* SELECT name FROM favorite_foods */



INSERT INTO programming_languages (id, languages, rating, mastered) VALUES(default, "CSS",10, default)


UPDATE programming_languages SET mastered = false
WHERE id = 2

UPDATE programming_languages set rating = "7"
WHERE id= 2

DELETE FROM programming_languages
WHERE id = 4