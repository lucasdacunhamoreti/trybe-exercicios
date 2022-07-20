-- 1
SELECT MAX(salary) FROM employees;

-- 2
SELECT MAX(salary) - MIN(salary) FROM employees;

-- 3
SELECT AVG(salary) AS media FROM employees GROUP BY job_id ORDER BY media DESC;

-- 4
SELECT SUM(salary) AS total FROM employees;


-- 5
SELECT MAX(salary) AS maior, MIN(salary) AS menor, SUM(salary) as soma, ROUND(AVG(salary), 2) AS media FROM employees;


-- 6
SELECT job_id, COUNT(*) AS quantidade FROM employees GROUP BY job_id HAVING job_id = 'IT_PROG';


-- 7
SELECT SUM(salary) AS total FROM employees GROUP BY job_id;


-- 8
SELECT SUM(salary) AS total FROM employees GROUP BY job_id HAVING job_id = 'IT_PROG';


-- 9
SELECT job_id, AVG(salary) AS media FROM employees GROUP BY job_id HAVING job_id != 'IT_PROG' ORDER BY media DESC;


-- 10
SELECT AVG(salary) AS media, COUNT(*) FROM employees GROUP BY job_id HAVING COUNT(*) > 10;


-- 11
SELECT REPLACE(phone_number, 515, 777) FROM employees;


-- 12
SELECT * FROM employees WHERE CHAR_LENGTH(first_name) >= 8;


-- 13
SELECT employee_id AS id, first_name AS nome, YEAR(hire_date) AS ano_contratacao FROM employees;


-- 14
SELECT employee_id AS id, first_name AS nome, DAY(hire_date) AS ano_contratacao FROM employees;


-- 15
SELECT employee_id AS id, first_name AS nome, MONTH(hire_date) AS ano_contratacao FROM employees;


-- 16
SELECT UCASE(first_name) FROM employees;


-- 17
SELECT last_name, hire_date FROM employees WHERE DATE(hire_date) LIKE '1987-07%';


-- 18
SELECT first_name, last_name, DATEDIFF(CURRENT_DATE(), hire_date) AS tempo_de_trabalho FROM employees;