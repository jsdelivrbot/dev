-- -------------------------------------------------------------------------
stored functions
-- -------------------------------------------------------------------------
-- A stored function is a custom sql function that returns a single value.
-- You can use it in SQL statements wherever an expression is used.
-- 

-- to create a stored function using sql:
-- If using a myql client to define a stored program containing semicolon characters, a problem arises. 
-- By default, mysql recognizes the semicolon as a statement delimiter, so you must redefine the delimiter 
-- temporarily to cause mysql to pass the entire stored program definition to the server.
-- state the name of the stored function and the parameters for it
DELIMITER $$

CREATE FUNCTION function_name(<param1_name type, param2_name type, …>)
    RETURNS <mysql data type: INT, VARCHAR, etc.>
   -- use deterministic if you want it to return the same results if the same parameters are used for 
   -- this function in different queries (for optimization) 
   <[NOT] DETERMINISTIC or DETERMINISTIC>
 <statements: write the code in the body of the stored function>
 RETURN <output>
 
 -- -------------------------------------------------------------------------
 
 -- example:
 
DELIMITER $$
 
CREATE FUNCTION CustomerLevel(p_creditLimit double) RETURNS VARCHAR(10)
    DETERMINISTIC
BEGIN
    DECLARE lvl varchar(10);
 
    IF p_creditLimit > 50000 THEN
 SET lvl = 'PLATINUM';
    ELSEIF (p_creditLimit <= 50000 AND p_creditLimit >= 10000) THEN
        SET lvl = 'GOLD';
    ELSEIF p_creditLimit < 10000 THEN
        SET lvl = 'SILVER';
    END IF;
 
 RETURN (lvl);
END

-- use like:

SELECT 
    customerName,
    -- creditLimit is a column with an entry like: 1000
    CustomerLevel(creditLimit)
FROM
    customers

-- result:

-- Andrew | GOLD
-- Peter | SILVER
-- ...

-- -------------------------------------------------------------------------
stored procedures
-- -------------------------------------------------------------------------
-- for creating re-usable sql queries

DELIMITER $$
 
CREATE PROCEDURE GetCreditLimit(
    IN  p_customerNumber INT(11),
    OUT p_customerLevel  varchar(10)
)
BEGIN
    DECLARE creditlim DOUBLE;
 
    SELECT creditlimit INTO creditlim
    FROM customers
    WHERE customerNumber = p_customerNumber;
 
    SELECT creditlim
    INTO p_customerLevel;
END

-- use it something like:

$query = $this->db->query('CALL GetCreditLimit('.$id.')');
return $query->result();

    
 
