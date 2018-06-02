/* ==========================================================================
field creation types/commands
========================================================================== */

# Characters with an expected max length of 30
VARCHAR(30)

# Must contain a value
NOT NULL 

# Doesn't require a value
NULL

# Contains exactly 2 characters
CHAR(2)

# Receives a default value of PA
DEFAULT "PA" : 

# Value no greater then 8,388,608
MEDIUMINT 

# Can't contain a negative value
UNSIGNED

# Stores a date in the format YYYY-MM-DD
DATE

# Can contain either a M or F
ENUM('M', 'F')

# Stores date and time in this format YYYY-MM-DD-HH-MM-SS
TIMESTAMP

# A number with decimal spaces, with a value no bigger than 1.1E38 or smaller than -1.1E38
FLOAT

# Contains a number without decimals
INT

# Generates a number automatically that is one greater then the previous row
AUTO_INCREMENT

-- Unique ID that is assigned to this row of data:
-- 	- Uniquely identifies a row or record 
-- 	- Each Primary Key must be unique to the row 
-- 	- Must be given a value when the row is created and that value can't be NULL 	
-- 	- The original value can't be changed It should be short 
-- 	- It's probably best to auto increment the value of the key
PRIMARY KEY

------------ Numeric Types ------------

TINYINT: A number with a value no bigger than 127 or smaller than -128
SMALLINT: A number with a value no bigger than 32,768 or smaller than -32,767
MEDIUM INT: A number with a value no bigger than 8,388,608 or smaller than -8,388,608
INT: A number with a value no bigger than 2^31 or smaller than 2^31 â?? 1
BIGINT: A number with a value no bigger than 2^63 or smaller than 2^63 â?? 1
FLOAT: A number with decimal spaces, with a value no bigger than 1.1E38 or smaller than -1.1E38
DOUBLE: A number with decimal spaces, with a value no bigger than 1.7E308 or smaller than -1.7E308

------------ String Types ------------

CHAR: A character string with a fixed length
VARCHAR: A character string with a length thatâ??s variable
BLOB: Can contain 2^16 bytes of data
ENUM: A character string that has a limited number of total values, which you must define.
SET: A list of legal possible character strings. Unlike ENUM, a SET can contain multiple values in comparison to the one legal value with ENUM.

------------ Date & Time Types ------------

DATE: A date value with the format of (YYYY-MM-DD)
TIME: A time value with the format of (HH:MM:SS)
DATETIME: A time value with the format of (YYYY-MM-DD HH:MM:SS)
TIMESTAMP: A time value with the format of (YYYYMMDDHHMMSS)
YEAR: A year value with the format of (YYYY)