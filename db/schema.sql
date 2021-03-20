### Schema
DROP DATABASE IF EXISTS thetechlife_db;
CREATE DATABASE thetechlife_db;
USE thetechlife_db;

CREATE TABLE users (
    userfirstname VARCHAR(30) NOT NULL,
    userlastname VARCHAR(30) NOT NULL,
    userid INT auto_increment,
    useremail VARCHAR(128) NOT NULL,
    admin Boolean,
    createdAt datetime,
    updatedAt datetime,
    password VARCHAR(30) NOT NULL,
    PRIMARY KEY (userid)
);

CREATE TABLE category (
    categoryid int NOT NULL,
    categoryname varchar(30) NOT NULL,
    PRIMARY KEY (categoryid)

);

CREATE TABLE articles (
    articleID int NOT NULL auto_increment,
    articleTitle varchar(30) NOT NULL,
    categoryID int NOT NULL,
    articleEnglish text NOT NULL,
    articleSpanish text, 
    articleJapanese text,	
    articleKorean text,
    articleMandarin text,
    articleImage blob,
    authorID int,
    PRIMARY KEY (articleID),
    FOREIGN KEY (authorID) REFERENCES users(userid),
    FOREIGN KEY (categoryID) REFERENCES category(CategoryID)

);