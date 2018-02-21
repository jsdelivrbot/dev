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

# creating a table
CREATE TABLE class(
	name VARCHAR(30) NOT NULL,
	class_id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY);

# add columns to an existing table
ALTER TABLE <table_name> ADD <col_name> INT NOT NULL AFTER <after_this_col>;

# change column name
ALTER TABLE score CHANGE event_id test_id 
	INT UNSIGNED NOT NULL;

#rename tables
RENAME TABLE 
absence to absences,
class to classes,
score to scores,
student to students,
test to tests;

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
	



	
	

	

	
	a. GROUP BY defines how the results will be grouped
	
41. SELECT MONTH(birth_date) AS 'Month', COUNT(*)
	FROM students
	GROUP BY Month
	ORDER BY Month;
	
	a. We can get each month in which we have a birthday and the total
	number for each month
	
42. SELECT state, COUNT(state) AS 'Amount'
	FROM students
	GROUP BY state
	HAVING Amount > 1;
	
	a. HAVING allows you to narrow the results after the query is executed
	

	
45. SELECT * FROM absences; 

	DESCRIBE scores;
	
	SELECT student_id, test_id
	FROM scores
	WHERE student_id = 6;
	
	INSERT INTO scores VALUES
	(6, 3, 24);

	DELETE FROM absences 
	WHERE student_id = 6;
	
	a. Look up students that missed a test
	
	b. Look up the specific test missed by student 6
	
	c. Insert the make up test result
	
	d. Delete the record in absences
	
46. ALTER TABLE absences
	ADD COLUMN test_taken CHAR(1) NOT NULL DEFAULT 'F'
	AFTER student_id; 
	
	a. Use ALTER to add a column to a table. You can use AFTER
	or BEFORE to define the placement

47. ALTER TABLE absences
	MODIFY COLUMN test_taken ENUM('T','F') NOT NULL DEFAULT 'F';
	
	a. You can change the data type with ALTER and MODIFY COLUMN
	
48. ALTER TABLE absences
	DROP COLUMN test_taken;
	
	a. ALTER and DROP COLUMN can delete a column

49. ALTER TABLE absences
	CHANGE student_id student_id INT UNSIGNED NOT NULL;
	
	a. You can change the data type with ALTER and CHANGE
	
50. SELECT *
    FROM scores
    WHERE student_id = 4;

	UPDATE scores SET score=25 
	WHERE student_id=4 AND test_id=3;
	
	a. Use UPDATE to change a value in a row
	
51. SELECT first_name, last_name, birth_date
	FROM students
	WHERE birth_date 
	BETWEEN '1960-1-1' AND '1970-1-1';
	
	a. Use BETWEEN to find matches between a minimum and maximum
	
52. SELECT first_name, last_name
	FROM students
	WHERE first_name IN ('Bobby', 'Lucy', 'Andy');
	
	a. Use IN to narrow results based on a predefined list of options
	
53. SELECT student_id, date, score, maxscore
	FROM tests, scores
	WHERE date = '2014-08-25'
	AND tests.test_id = scores.test_id;
	
	a. To combine data from multiple tables you can perform a JOIN
	by matching up common data like we did here with the test ids
	
	b. You have to define the 2 tables to join after FROM
	
	c. You have to define the common data between the tables after WHERE
	
54. SELECT scores.student_id, tests.date, scores.score, tests.maxscore
	FROM tests, scores
	WHERE date = '2014-08-25'
	AND tests.test_id = scores.test_id;
	
	a. It is good to qualify the specific data needed by proceeding
	it with the tables name and a period
	
	b. The test_id that is in scores is an example of a foreign key, which 
	is a reference to a primary key in the tests table
	
55. SELECT CONCAT(students.first_name, " ", students.last_name) AS Name, 
	tests.date, scores.score, tests.maxscore
	FROM tests, scores, students
	WHERE date = '2014-08-25'
	AND tests.test_id = scores.test_id
	AND scores.student_id = students.student_id;
	
	a. You can JOIN more then 2 tables as long as you define the like 
	data between those tables
	
56. SELECT students.student_id, 
	CONCAT(students.first_name, " ", students.last_name) AS Name,
	COUNT(absences.date) AS Absences
	FROM students, absences
	WHERE students.student_id = absences.student_id
	GROUP BY students.student_id;
	
	a. If we wanted a list of the number of absences per student we
	have to group by student_id or we would get just one result
	
57. SELECT students.student_id, 
	CONCAT(students.first_name, " ", students.last_name) AS Name,
	COUNT(absences.date) AS Absences
	FROM students LEFT JOIN absences
	ON students.student_id = absences.student_id
	GROUP BY students.student_id;
	
	a. If we need to include all information from the table listed
	first "FROM students", even if it doesn't exist in the table on
	the right "LEFT JOIN absences", we can use a LEFT JOIN.
	
58. SELECT students.first_name, 
	students.last_name,
	scores.test_id,
	scores.score
	FROM students
	INNER JOIN scores
	ON students.student_id=scores.student_id
	WHERE scores.score <= 15
	ORDER BY scores.test_id;
	
	a. An INNER JOIN gets all rows of data from both tables if there
	is a match between columns in both tables
	
	b. Here I'm getting all the data for all quizzes and matching that 
	data up based on student ids
	
59. One-to-One Relationship (SLIDE)

	a. In this One-to-One relationship there can only be one social security number per person. Hence,  each social security number can be associated with one person. As well, one person in the other table only matches up with one social security number.

	b. One-to-One relationships can be identified also in that the foreign keys never duplicate across all rows.

	c. If you are confused by the One-to-One relationship it is understandable, because they are not often used. Most of the time if a value never repeats it should remain in the parent table being customer in this case. Just understand that in a One-to-One relationship, exactly one row in a parent table is related to exactly one row of a child table.

60. One-to-Many Relationship

	a. When we are talking about One-to-Many relationships think about the table diagram here. If you had a list of customers chances are some of them would live in the same state. Hence, in the state column in the parent table, it would be common to see a duplication of states. In this example, each customer can only live in one state so their would only be one id used for each customer.

	b. Just remember that, a One-to-Many relationship is one in which a record in the parent table can have many matching records in the child table, but a record in the child can only match one record in the parent. A customer can choose to live in any state, but they can only live in one at a time.

61. Many-to-Many Relationship

	a. Many people can own many different products. In this example, you can see an example of a Many-to-Many relationship. This is a sign of a non-normalized database, by the way. How could you ever access this information:

	b. If a customer buys more than one product, you will have multiple product idâ??s associated with each customer. As well, you would have multiple customer idâ??s associated with each product.