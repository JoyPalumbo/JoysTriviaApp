/**
 * Execute this file from the command line by typing:
 *   mysql -u root < schema.sql
 */

DROP DATABASE IF EXISTS trivia;
CREATE DATABASE trivia;

USE trivia;

CREATE TABLE questions
(
  id int NOT NULL
  AUTO_INCREMENT,
  catagory varchar
  (50) NOT NULL,
  question varchar
  (255) NOT NULL,
  answer varchar
  (100) NOT NULL,
  PRIMARY KEY
  (id)
);
