# SCHEMA SQL 

CREATE TABLE options (
    id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    author TEXT,
    option TEXT
);
INSERT INTO options (author, option)
VALUES ('Test author', 'Test option'),
 ('Test author 2', 'Test option 2'),
('Test author 3', 'Test option 3');
CREATE TABLE pros_cons (
    id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
	option_id INT REFERENCES options(id),
    author TEXT,
    category TEXT,
	pros_cons TEXT
);
INSERT INTO pros_cons (option_id, author, category, pros_cons) VALUES (1, 'Test author', 'Pro', 'This is a great idea because...');

# QUERY SQL

SELECT *
FROM options
FULL OUTER JOIN pros_cons ON options.id = pros_cons.option_id;