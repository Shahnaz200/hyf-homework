-- Part 2 : School Database

CREATE DATABASE SchoolDatabase;
USE SchoolDatabase;

CREATE TABLE `class` (  
ID int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY, 
NAME char(255) NOT NULL, 
STARTS DATE NOT NULL, 
ENDS DATE NOT NULL) 
ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


-- Student: with the columns: id, name, email, phone, class_id (foreign key)
CREATE TABLE `student` ( 
ID int (10) unsigned NOT NULL PRIMARY KEY, 
NAME VARCHAR(255) NOT NULL, 
EMAIL VARCHAR(225) NOT NULL,  
PHONE INT(10) NOT NULL,
CLASS_ID int unsigned NOT NULL,
CONSTRAINT fk_class FOREIGN KEY (CLASS_ID) REFERENCES class (ID) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Create an index on the name column of the student table
CREATE INDEX index_name ON student(name);

-- Add a new column to the class table named status which can only have the following values: not-started, ongoing, finished (hint: enumerations)
ALTER TABLE class
ADD status ENUM('not-started' , 'ongoing' , 'finished' ) NOT NULL;
