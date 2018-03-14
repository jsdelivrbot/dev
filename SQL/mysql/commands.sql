# http://www.newthinktank.com/2014/08/mysql-video-tutorial/

/* ==========================================================================
startup
========================================================================== */

# login to MySQL 
mysql -u mysqladmin -p

# my test password:
root
 
# to quit
quit

/* ==========================================================================
databases
========================================================================== */

# show all databases
show databases;

# create database
CREATE DATABASE test2;

# switch to a database
USE test2;

# see the current active database
SELECT DATABASE();

# delete a database	
DROP DATABASE IF EXISTS test2;

/* ==========================================================================
tables
========================================================================== */

# show all tables
show tables;

# show the table structure
DESCRIBE <table_name>;

# insert row into table
INSERT INTO student VALUES('Dale', 'Cooper', 'dcooper@aol.com', 
	'123 Main St', 'Yakima', 'WA', 98901, '792-223-8901', "1959-2-22",
	'M', NOW(), 3.50, NULL);

#better way to do it is specify the column names so
#you don't have to worry aout columns changing
INSERT INTO table_name (column1, column2, column3, ...)
VALUES (value1, value2, value3, ...);

#insert multiple values at once
INSERT INTO class VALUES
('English', NULL), ('Speech', NULL), ('Literature', NULL),
('Algebra', NULL), ('Geometry', NULL), ('Trigonometry', NULL),
('Calculus', NULL), ('Earth Science', NULL), ('Biology', NULL),
('Chemistry', NULL), ('Physics', NULL), ('History', NULL),
('Art', NULL), ('Gym', NULL);

# creating a table
CREATE TABLE class(
	class_id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY
	name VARCHAR(30) NOT NULL,
	);

# rename tables
RENAME TABLE 
absence to absences,
class to classes,
score to scores,
student to students,
test to tests;

/* ==========================================================================
ALTER (columns)
========================================================================== */
# add columns to an existing table
# AFTER or BEFORE to define the placement
ALTER TABLE <table_name> ADD <col_name> INT NOT NULL AFTER <after_this_col>;

# ALTER and DROP COLUMN can delete a column
ALTER TABLE absences
DROP COLUMN test_taken;

# change column name
ALTER TABLE score CHANGE event_id test_id 
INT UNSIGNED NOT NULL;

# can change the data type with ALTER and CHANGE
ALTER TABLE absences
CHANGE student_id student_id INT UNSIGNED NOT NULL;

# can also change the data type with ALTER and MODIFY COLUMN
ALTER TABLE absences
MODIFY COLUMN test_taken ENUM('T','F') NOT NULL DEFAULT 'F';


/* ==========================================================================
select/where
========================================================================== */

# select all
SELECT * FROM <table_name>;

# select certain things
SELECT FIRST_NAME, last_name 
FROM student;

# select where
SELECT first_name, last_name, state 
FROM students
WHERE state="WA";

# select where (comparison)
# To get the month, day or year of a date use: 
# MONTH(), DAY(), or YEAR()
SELECT first_name, last_name, birth_date
FROM students
WHERE YEAR(birth_date) >= 1965;

# where using or
SELECT first_name, last_name, birth_date
FROM students
WHERE MONTH(birth_date) = 2 OR state="CA";

# Returns a true value if both conditions are true 
AND, &&
# Returns a true value if either condition is true
OR, || 
# Returns a true value if the operand is false
NOT, !

# example
SELECT last_name, state, birth_date
FROM students
WHERE DAY(birth_date) >= 12 && (state="CA" || state="NV");

/* ==========================================================================
count
========================================================================== */

-- COUNT returns the number of matchs
SELECT COUNT(*)
FROM students;

-- get the number
-- of DISTINCT states from which students were born
SELECT COUNT(DISTINCT state)
FROM students;

# when using both COUNT() and another
# field to select, you must use GROUP BY
SELECT sex, COUNT(*)
FROM students
GROUP BY sex;

/* ==========================================================================
order by
========================================================================== */

-- If you use 2 ORDER BYs it will order one and then the other
SELECT first_name, last_name
FROM students
ORDER BY last_name;
	
ORDER BY allows you to order results. To change the order use
ORDER BY col_name DESC;
	
SELECT first_name, last_name, state
FROM students
ORDER BY state DESC, last_name ASC;

/* ==========================================================================
check for null/not null
========================================================================== */

-- If you want to check for NULL you must use IS NULL or IS NOT NULL
SELECT last_name
FROM students
WHERE last_name IS NULL;

SELECT last_name
FROM students
WHERE last_name IS NOT NULL;

/* ==========================================================================
check for null/not null
========================================================================== */

-- Use LIMIT to limit the number of results
SELECT first_name, last_name
FROM students
LIMIT 5;

-- get results 5 through 10
SELECT first_name, last_name
FROM students
LIMIT 5, 10;

/* ==========================================================================
AS
========================================================================== */

# AS provides for a way to define the column name
SELECT
test_id AS 'Test',
MIN(score) AS min,
MAX(score) AS max,
MAX(score)-MIN(score) AS 'range',
SUM(score) AS total,
AVG(score) AS average
FROM scores
GROUP BY test_id;

/* ==========================================================================
LIKE
========================================================================== */

# Matchs any first name that starts with a D, or ends with a n
# % matchs any sequence of characters 
# ends with n: %n
# starts with n: n%
SELECT last_name, first_name
FROM students
WHERE first_name LIKE 'D%' OR last_name LIKE '%n';

# _ matchs any single character
SELECT last_name, first_name
FROM students
WHERE first_name LIKE '___y';

/* ==========================================================================
CONCAT
========================================================================== */

# CONCAT is used to combine results
SELECT CONCAT(first_name, " ", last_name) AS 'Name',
CONCAT(city, ", ", state) AS 'Hometown'
FROM students;

/* ==========================================================================
DISTINCT
========================================================================== */
	
#eliminates duplicates in results


/* ==========================================================================
foreign key
========================================================================== */

-- example:
-- If we have a customer and city table. If the city table had a column which 
-- listed the unique primary key of all the customers, that Primary Key listing in the city table would be considered a Foreign Key. 

-- class_id is a foreign key
-- Used to make references to the Primary Key of another table 
-- can have different name than primary key name
-- can be null 
-- doesn't need to be unique
	
CREATE TABLE test(
date DATE NOT NULL,
type ENUM('T', 'Q') NOT NULL,
class_id INT UNSIGNED NOT NULL,
test_id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY);

/* ==========================================================================
combine to make unique
========================================================================== */

-- We combined the event and student id to make sure we don't have 
-- duplicate scores and it makes it easier to change scores

-- Since neither the event or the student ids are unique on their 
-- own we are able to make them unique by combining them

CREATE TABLE score(
student_id INT UNSIGNED NOT NULL,
event_id INT UNSIGNED NOT NULL,
score INT NOT NULL,
PRIMARY KEY(event_id, student_id));

/* ==========================================================================
GROUP BY
========================================================================== */

# defines how the results will be grouped

/* ==========================================================================
HAVING
========================================================================== */

# The HAVING clause is used to filter values in a GROUP BY
SELECT state, COUNT(state) AS 'Amount'
FROM students
GROUP BY state
HAVING Amount > 1;

/* ==========================================================================
GROUP BY
========================================================================== */

SELECT MONTH(birth_date) AS 'Month', COUNT(*)
FROM students
GROUP BY Month;

/* ==========================================================================
DELETE
========================================================================== */
	
DELETE FROM absences 
WHERE student_id = 6;

/* ==========================================================================
UPDATE
========================================================================== */

# Use UPDATE to change a value in a row
UPDATE scores SET score=25 
WHERE student_id=4 AND test_id=3;

/* ==========================================================================
BETWEEN
========================================================================== */

# find matches between a minimum and maximum	
SELECT first_name, last_name, birth_date
FROM students
WHERE birth_date 
BETWEEN '1960-1-1' AND '1970-1-1';
	
/* ==========================================================================
IN
========================================================================== */

# narrow results based on a predefined list of options
SELECT first_name, last_name
FROM students
WHERE first_name IN ('Bobby', 'Lucy', 'Andy');

/* ==========================================================================
joinning two or more table selects
========================================================================== */

-- To combine data from multiple tables:
-- define the 2 tables to join after FROM
-- define the common data between the tables after WHERE

SELECT student_id, date, score
FROM tests, scores
WHERE date = '2014-08-25'
AND tests.test_id = scores.test_id;

-- It is good to qualify the specific data needed by proceeding
-- it with the tables name and a period

-- The test_id that is in scores is an example of a foreign key, which 
-- is a reference to a primary key in the tests table

-- You can JOIN more then 2 tables as long as you define the like 
-- data between those tables

SELECT CONCAT(students.first_name, " ", students.last_name) AS Name, 
tests.date, scores.score, tests.maxscore
FROM tests, scores, students
WHERE date = '2014-08-25'
AND tests.test_id = scores.test_id
AND scores.student_id = students.student_id;

-- If we wanted a list of the number of absences per student we
-- have to group by student_id or we would get just one result

SELECT students.student_id, 
CONCAT(students.first_name, " ", students.last_name) AS Name,
COUNT(absences.date) AS Absences
FROM students, absences
WHERE students.student_id = absences.student_id
GROUP BY students.student_id;
	
/* ==========================================================================
LEFT JOIN
========================================================================== */

-- If we need to include all information from the table listed
-- first (students), even if it doesn't exist in the table on
-- the right (absences), we can use a LEFT JOIN.
-- must un ON not WHERE with it

SELECT students.student_id, 
CONCAT(students.first_name, " ", students.last_name) AS Name,
COUNT(absences.date) AS Absences
FROM students LEFT JOIN absences
ON students.student_id = absences.student_id
GROUP BY students.student_id;

/* ==========================================================================
INNER JOIN
========================================================================== */

-- An INNER JOIN gets all rows of data from both tables if there
-- is a match between columns in both tables

-- Here I'm getting all the data for all quizzes and matching that 
-- data up based on student ids

SELECT students.first_name, 
students.last_name,
scores.test_id,
scores.score
FROM students
INNER JOIN scores
ON students.student_id=scores.student_id
WHERE scores.score <= 15
ORDER BY scores.test_id;

/* ==========================================================================
embedded select and evaluate first
========================================================================== */

-- this is to make it evaluate first so the fuel_cost and service_cost can be used
-- SELECT *
-- FROM (
-- ) AS __vehicles

SELECT *, fuel_cost + service_cost AS total
FROM (
   SELECT v.id, v.name,
    (
        SELECT SUM(f.cost)
        FROM fuel f
        WHERE f.vehicle_id=v.id
    ) AS fuel_cost,
    (
        SELECT SUM(s.cost)
        FROM service s
        WHERE s.vehicle_id=v.id
    ) AS service_cost
    FROM vehicles v
) AS __vehicles