DROP DATABASE IF EXISTS musicDB;

CREATE DATABASE musicDB;

USE musicDB;

CREATE TABLE music (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(45) NULL,
  artist VARCHAR(45) NULL,
  genre VARCHAR(45) NULL,
  PRIMARY KEY (id)
);

INSERT INTO music (title, artist, genre)
VALUES ("Down with the Sickness","Disturbed", "Rock");

INSERT INTO music (title, artist, genre)
VALUES ("One More Light", "Linkin Park", "Rock");

INSERT INTO music (title, artist, genre)
VALUES ("Be Humble","Kendrick Lamar", "Rap");


