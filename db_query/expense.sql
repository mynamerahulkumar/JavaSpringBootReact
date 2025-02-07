CREATE DATABASE expensetransactions;
Use expensetransactions;

INSERT INTO tbl_expense
(expense_id,name,note,category,amount,date,created_at,updated_at)
VALUES
(uuid(),'Electricity bill','electricity bill','utilites',500.00,curdate(),utc_timestamp(),utc_timestamp()),
(uuid(),'Water bill','water bill','utilites',199.00,curdate(),utc_timestamp(),utc_timestamp());

SELECT * from  tbl_expense;

DESC tbl_expense;