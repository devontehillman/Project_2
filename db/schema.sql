### Schema

CREATE DATABASE thetechlife_db;
USE thetechlife_db;

CREATE TABLE Users (
    UserFirstName varchar(30) NOT NULL,
    UserLastName varchar(30) NOT NULL,
    UserId int NOT NULL,
    UserEmail varchar(255) NOT NULL,
    UserImage image,
    UserRole bit NOT NULL,
    PRIMARY KEY (UserId), 
);

CREATE TABLE Articles (
    ArticleID int NOT NULL,
    ArticleTitle varchar(30) NOT NULL,
    CategoryID int NOT NULL,
    ArticleEnglish text NOT NULL,
    ArticleSpanish text, 
    ArticleJapanese text,
    ArticleKorean text,
    ArticleMandarin text,
    ArticleImage image,
    AuthorID int,
    PRIMARY KEY (ArticleID),
    FOREIGN KEY (AuthorID) REFERENCES Users(UserId)
    FOREIGN KEY (CategoryID) REFERENCES Category(CategoryID),

);

CREATE TABLE Category (
    CategoryID int NOT NULL,
    CategoryName varchar(30) NOT NULL,
    PRIMARY KEY (CategoryID),

)