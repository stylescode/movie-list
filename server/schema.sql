CREATE DATABASE movielistapp;

USE movielistapp;

CREATE TABLE movies(
  id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
  title VARCHAR(60) NOT NULL,
  status BOOLEAN NOT NULL
);