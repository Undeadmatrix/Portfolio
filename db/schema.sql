DROP DATABASE IF EXISTS portfolioDB;
CREATE DATABASE portfolioDB;
USE portfolioDB;

CREATE TABLE IF NOT EXISTS `newViewers`
(
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    PRIMARY KEY (`id`)
);

CREATE TABLE IF NOT EXISTS `users` 
(
    `id` INTEGER NOT NULL auto_increment ,
    `firstName` VARCHAR(255),
    `lastName` VARCHAR(255),
    `email` VARCHAR(255) NOT NULL UNIQUE,
    `password` VARCHAR(255) NOT NULL,
    `createdAt` DATETIME NOT NULL,
    `updatedAt` DATETIME NOT NULL,
     PRIMARY KEY (`id`)
);

CREATE TABLE IF NOT EXISTS `posts` (
    `id` INTEGER NOT NULL auto_increment ,
    `title` VARCHAR(255) NOT NULL,
    `body` TEXT NOT NULL,
    `createdAt` DATETIME NOT NULL,
    `updatedAt` DATETIME NOT NULL,
    `userId` INTEGER, 
    PRIMARY KEY (`id`),
    FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
);
