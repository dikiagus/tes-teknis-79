# 🏆 48 Hour Backend Technical Challenge

The backend solution is an <b>API</b> for managing employees with just 3 controllers, using <u>MongoDB</u> for persistence, request validation with <u>express-validator</u>, and  <b>try-catch</b> blocks to make the application understandable and easy to debug. 

> I personally used a <u>Mongo Docker image</u>  and <u>Render</u> for deployment!

<hr>

### Github Workflow
* `db-image`: branch is responsible for creating the mongodb container which serves as the database.
* `feature`: branch will contain all project requirements divided into sub branches and labeled with `enhancements`.
* `release`: branch is merged into the main branch when the work is tested and completed.

> More documentation is included in the issues tab.

<center>I created this workflow with Figjam, a Figma product that is excellent for creating diagrams workflows and even project management ^^</center>
<img width="2912" alt="workflow" src="https://github.com/meddhiaka/employee-management-backend-challenge/assets/108496649/0dbfeb7a-479b-4dc8-a56d-28600ee3ae28">



### Playing with the solution

* To build the application (generate the javascript dist) :

`npm run build`

<hr>

* To run the application in the development mode :

`npm run dev`

<hr>

* To run the mongo docker container  (MongoDB database in a container created with few commands and isolated form the OS):

```
// navigate to docker compose
> cd ./db 

// run docker compose file in detached mode
> sudo docker compose up -d

// open the mongo shell to interacte with the database
> docker exec -it personal-mongo-database mongosh

YOURE INSIDE THE CONTAINER NOW YOU CAN LIST DATABASES, USE ONE, DO ANY CRUD OPERATIONS...

    # list all databases
    > show dbs
    
    # use a specific database
    > use db_name

    # see all the collections of the database selected
    > show collections

    # list all documents in a collection
    > db.db_name.find()

```

### Demos of the backend application in action XD

> the test is performed using `Thunder Client`

* POST /employees: Add a new employee:
[demo for adding new employee](https://github.com/meddhiaka/employee-management-backend-challenge/assets/108496649/9e8d1cec-25ec-4335-996c-cbb2f5154247)

* PUT /employees/:id: Update an existing employee's details:
[demo for updating an employee](https://github.com/meddhiaka/employee-management-backend-challenge/assets/108496649/e986166a-e5bb-40a6-ac76-b3d3b99a24a8)

* DELETE /employees/:id: Delete an employee by ID:
[demo for deleting an employee](https://github.com/meddhiaka/employee-management-backend-challenge/assets/108496649/fb75f94b-b472-413a-8a19-af852f33b5a3)





<hr>

I recommand to see the issues tag in the process of understandimg the solution <u>(ordered) </u> implementations: 
* https://github.com/meddhiaka/employee-management-backend-challenge/issues/1
* https://github.com/meddhiaka/employee-management-backend-challenge/issues/3
* https://github.com/meddhiaka/employee-management-backend-challenge/issues/5

> Also reading the mentionned pull request in every issue is a good win !

# MIT license forever
