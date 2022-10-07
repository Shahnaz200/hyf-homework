CREATE DATABASE IF NOT EXISTS School2;
USE School2;

create table Students(
student_id int unsigned not null primary key auto_increment,
first_name varchar(50) not null,
last_name varchar(50) not null,
email varchar(255) not null, 
date_registerd datetime not null
);

create table Courses (
course_id int unsigned not null primary key auto_increment,
title varchar(255) not null,
price decimal(5,2) not null,
instructor_id smallint not null,
foreign key fk_Courses_Instructors1(instructor_id)
references Instructors(instructor_id)
on update restrict
on delete restrict 
);

create table Enrollments(
course_id int not null,
student_id int not null,
date datetime not null,
price decimal(5,2) not null,
foreign key fk_Enrollments_Courses(course_id)
references Courses(course_id)
on update cascade
on delete restrict,

foreign key fk_Enrollments_Students1(student_id)
references Students(student_id)
on update restrict
on delete restrict
);

create table Tags(
tag_id tinyint not null,
name varchar(50) not null
);

create table Course_tags(
course_id int not null,
tag_id tinyint not null,
foreign key fk_Course_tags_Courses1(course_id)
references Courses(course_id)
on update cascade
on delete restrict,

foreign key fk_Course_tags_Tags1(tag_id)
references Tagd(tag_id)
on update restrict
on delete restrict  
);

create table Instructors(
instructor_id smallint not null,
name varchar(50) not null
);







