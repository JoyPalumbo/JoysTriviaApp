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
  question varchar
  (255) NOT NULL,
  rightAnswer varchar
  (100) NOT NULL,
  wrongAnswer1 varchar
  (100) Not Null,
  wrongAnswer2 varchar
  (100) ,
  wrongAnswer3 varchar
  (100) Not Null,
  wrongAnswer4 varchar
  (100),
  rightCount int
  (25),
   wrongCount int
  (25),
  PRIMARY KEY
  (id)
);
