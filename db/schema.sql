CREATE DATABASE IF NOT EXISTS thetechlife_db;
USE thetechlife_db;

CREATE TABLE user (
    id INT auto_increment,
    firstname VARCHAR(30) NOT NULL,
    lastname VARCHAR(30) NOT NULL,
    email VARCHAR(128) NOT NULL,
    password VARCHAR(255) NOT NULL,
    admin Boolean,
    createdAt datetime,
    updatedAt datetime,
    PRIMARY KEY (id)
);

CREATE TABLE category (
    id int NOT NULL,
    name varchar(30) NOT NULL,
    PRIMARY KEY (id)

);

CREATE TABLE articles (
    id int NOT NULL auto_increment,
    title varchar(30) NOT NULL,
    categoryId int NOT NULL,
    english text NOT NULL,
    spanishTrans text, 
    japaneseTrans text,	
    koreanTrans text,
    mandarinTrans text,
    articleImage VARCHAR(255),
    authorId int,
    PRIMARY KEY (id),
    FOREIGN KEY (authorId) REFERENCES user(id),
    FOREIGN KEY (categoryId) REFERENCES category(id)

);