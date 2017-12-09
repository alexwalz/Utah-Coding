DROP DATABASE IF EXISTS top5000_db;
CREATE DATABASE top5000_db

USE top5000_db

CREATE TABLE topSongs (
  position INT AUTO_INCREMENT NOT NULL,
  rank INT NOT NULL,
  artist VARCHAR(100) NULL,
  song VARCHAR(100) NULL,
  year INT NULL,
  raw_total DECIMAL(10,4) NULL,
  raw_usa DECIMAL(10,4) NULL,
  raw_uk DECIMAL(10,4) NULL,
  raw_eur DECIMAL(10,4) NULL,
  raw_row DECIMAL(10,4) NULL,
  PRIMARY KEY (position)
);

SELECT * FROM topSongs;


INSERT INTO topSongs (artist, song, year, raw_total) VALUE ("Linkin Park", "In The End", 2002, 322)

UPDATE topSongs SET raw_total = 32.22
WHERE position = 1