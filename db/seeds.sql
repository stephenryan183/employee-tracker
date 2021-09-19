INSERT INTO department (department_name)
VALUES ("Managment"),
        ("Software Developnent"),
       ("HR"),
       ("Sales"),
       ('Influencers');
       

INSERT INTO role (title, salary, department_id)
VALUES ("Head of Managment", 300000, 1),
        ("Full Stack Developer", 200000, 2)
        ("Back End Engineer", 150000, 2),
        ("Senior Human Resources", 120000, 3),
        ("Vice President of Sales", 80000, 4),
        ("Sales Engineer", 40000, 4),
        ("Outside Sales Represntative", 25000, 5);

INSERT INTO employee (first_name, last_name, role_id, , manager_id)
VALUES ("Patrick", "Bateman", 1, NULL),
        ("Clement", "Mihailescu", 2, NULL) ,
        ("Joma", "Tech", 3, 2),
        ("Tobey", "Flenderson", 4, NULL),
         ("Addison", "Rae",5, NULL)
        ("Seth", "Rogen", 6, NULL),
        ("Bill", "Murray", 7, 6);
       



        





