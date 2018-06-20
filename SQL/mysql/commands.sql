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
INSERT
========================================================================== */

# insert row into table
INSERT INTO student VALUES('Dale', 'Cooper', 'dcooper@aol.com', 
	'123 Main St', 'Yakima', 'WA', 98901, '792-223-8901', "1959-2-22",
	'M', NOW(), 3.50, NULL);

#insert multiple values at once
INSERT INTO class VALUES
('English', NULL), 
('Speech', NULL), 
('Literature', NULL);

#better way to insert is specify the column names so
#you don't have to worry aout columns changing
INSERT INTO table_name(column1, column2, column3, ...)
VALUES 
(value1, value2, value3, ...),
(value1, value2, value3, ...),
(value1, value2, value3, ...)
;

# insert by copying data from one table to another.
# just substitute the VALUES with a SELECT
INSERT INTO class(id, room, grade)
SELECT id, room, grade 
FROM some_other_table;

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
# **always surroun the where search 
# value with quotes unless it's a number
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
row count
========================================================================== */

# get only the returned row count
SELECT SQL_CALC_FOUND_ROWS

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
dates
========================================================================== */

# Subtract 10 days from a date and return the date:
SELECT DATE_SUB("2017-06-15", INTERVAL 10 DAY);

/* ==========================================================================
order by
========================================================================== */

-- If you use 2 ORDER BYs it will order one and then the other
SELECT first_name, last_name
FROM students
ORDER BY last_name;
	
-- ORDER BY allows you to order results. To change the order use
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
# below would match 'baby'
SELECT last_name, first_name
FROM students
WHERE first_name LIKE '___y';

/* ==========================================================================
REGEXP
========================================================================== */

# basic
SELECT name FROM items WHERE name REGEXP 'new';

# fall, ball, tall
SELECT name FROM items WHERE name REGEXP '.all';

# bob or frank
SELECT name FROM items WHERE name REGEXP 'bob|frank';

# using sets
SELECT name FROM items WHERE name REGEXP '[1-5]';



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
-- own we are able to make them unique by combining them (that's the reason for two primary keys)

CREATE TABLE score(
student_id INT UNSIGNED NOT NULL,
event_id INT UNSIGNED NOT NULL,
score INT NOT NULL,
PRIMARY KEY(event_id, student_id));

/* ==========================================================================
GROUP BY
========================================================================== */

# defines how the results will be grouped
# aggregate functions rely on GROUP BY to decide
# what colum they'll execute against.
# like saying for each entry in the GROUP BY colum, execute the above SELECT, etc...
SELECT state, COUNT(state) AS 'Amount'
FROM students
GROUP BY state

#group by multiple columns:
GROUP BY X 
#means put all those with the same value for X in the one group.
GrouP BY X, Y 
#means put all those with the same values for both X and Y in the one group

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

# also can use the opposite
NOT IN ('Bobby', 'Lucy', 'Andy');

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

-- If we need to include ALL data from the table listed
-- on the left (students), even if it doesn't exist in the table on
-- the right (absences)
-- must un ON with it

SELECT students.student_id, 
CONCAT(students.first_name, " ", students.last_name) AS Name,
COUNT(absences.date) AS Absences
FROM students LEFT JOIN absences
ON students.student_id = absences.student_id
GROUP BY students.student_id;

/* ==========================================================================
INNER JOIN
========================================================================== */

-- An INNER JOIN gets only rows of data from both tables if there
-- is a match between columns in BOTH tables

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
subqueries/nested select
========================================================================== */

# nested selects are evaluated first.
# what is returned from a nested select can be a single value, or a table, if
# it's a single number it can go inside a AVG() for example, if it's a table
# it can go inside a IN (,,,) for example, or you can do an inner join() to inclued
# it into the query as if it was a normal table

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

/* ==========================================================================
exists
========================================================================== */

# disclude the selection returned from a subselect.
# SELECT NULL because you don't neet to return any column data
# great thing is that you can access an outer variable: WHERE pc.id=test.user_id
AND NOT EXISTS (
	SELECT NULL
	FROM swp_person_certificate pc
	WHERE pc.id=test.user_id
)

/* ==========================================================================
useful queries
========================================================================== */

-- testing for null
WHERE my_column IS NULL

/* ==========================================================================
date functions
========================================================================== */

-- get current time
NOW()

/* ==========================================================================
CONCAT
========================================================================== */

# concat values accross differnt columns to combine to one
# use concat_ws where possible since it won't do null values
CONCAT_WS(', ', col1, col2) AS combined_value;

/* ==========================================================================
expressions
========================================================================== */

# any expression works
SELECT cost+20 AS final_cost

/* ==========================================================================
aggregate functions
========================================================================== */

# aggregate functions work by evaluating column values vertically
# number of returned items
COUNT(colname);
# add the numbers in the returned items
SUM(cost);
# the average
AVG(cost);
# the maximum/minimum
MAX(cost);
MIN(cost)

# group concat - must be used with GROUP_BY.
# concatenates column data vertically
GROUP_CONCAT(colname);

# with separator, distinct and order by
SELECT pub_id,GROUP_CONCAT(DISTINCT cate_id
ORDER BY  cate_id ASC SEPARATOR ' ')

/* ==========================================================================
utility functions
========================================================================== */

# uppercase
UPPER()

/* ==========================================================================
full text search
========================================================================== */

# add full text search ability to column
# search by algorithm and with speed (alternative to LIKE or REGEXP)
ALTER TABLE items ADD FULLTEXT(name);

#use it like this
SELECT name, cost FROM items WHERE MATCH(name) AGAINST("baby");

#boolean mode (include word baby, not include coat)
AGAINST('+baby -coat' IN BOOLEAN MODE)
AGAINST("baby")

/* ==========================================================================
CASE/WHEN/THEN/ELSE/END
========================================================================== */

# like and if statement in SQL

# select certain columns based on condition 
# (Stock is the ailias for the decided column) 
SELECT OrderID, Quantity,
CASE
    WHEN Quantity > 30 THEN ColA
    WHEN Quantity = 30 THEN ColB
    ELSE ColC
END Stock
FROM OrderDetails;

# order by certain column based on condition
SELECT CustomerName, City, Country FROM Customers
ORDER BY (
	CASE
		WHEN City IS NULL THEN Country
		ELSE City
	END
);

/* ==========================================================================
// joining in subqueries
========================================================================== */

#use when needing to bring in data from other tables to populate certain columns
#where you need to do operations on it first.

SELECT
	f.id,
	_apples.cost + _oranges.cost AS total
FROM
	fruit f
LEFT JOIN (
	SELECT
		SUM(cost) cost
	FROM
		apples
	GROUP BY
		fruit_id
) _apples ON _apples.fruit_id = f.id
LEFT JOIN (
	SELECT
		SUM(cost) cost
	FROM
		oranges
	GROUP BY
		fruit_id
) _oranges ON _oranges.fruit_id = f.id
GROUP BY
	f.id

#doing a left join select in codeigniter:
/*
->join('(SELECT COUNT(id) AS person_count, certificate_id
		FROM swp_person_certificate
		WHERE deleted_at IS NULL
		GROUP BY certificate_id) AS pc_', 'pc_.certificate_id=c.id', 'left')
*/


/* ==========================================================================
// union
========================================================================== */

# combines two tables (aggregates) data vertically stacked
# UNION ALL instead of UNION, if possible, as it is much more efficient

SELECT DISTINCT *
FROM
(
	SELECT YEAR(s.serviced_on) year
	FROM flt_service s

	UNION ALL
	
	SELECT YEAR(f.receipt_date)
	FROM flt_fuel f
) AS __years

WHERE year IS NOT NULL

ORDER BY year DESC

/* ==========================================================================
COALESCE
========================================================================== */

# Return the first non-null expression in a list:
SELECT COALESCE(NULL, NULL, NULL, 'W3Schools.com', NULL, 'Example.com');
# 'W3Schools.com'
# example usecase:
SELECT COALESCE(IF(ISNULL(u2.first_name), NULL, CONCAT_WS(" ", u2.first_name, u2.last_name))

/* ==========================================================================
if statement
========================================================================== */

#if statement
SELECT IF(500<1000, "YES", "NO");

/* ==========================================================================
EXPLAIN
========================================================================== */

#provides info on the current query
EXPLAIN

