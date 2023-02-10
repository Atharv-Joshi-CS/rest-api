# Task 6: Express server with File System
## Title: Express REST api using File system

In this task you will create a REST api using the underlying file system.
Data will be stored in a json file in the project folder. The project will replicate the express server we build during sessions.
The API should provide CRUD capability. The Readme file will act like the documentation source.


The aim of this exercise is to develop a well structured API which is able to perform CRUD operations on json data.


### Steps to run the project.

1. Setup the repository in your local system.
2. Make sure you have node and npm installed.
3. After completing the above two steps run the following command to download all dependencies. `npm install`
4. Create a `.env` file at root directory of project. Set up the environment variables : 
  a. PORT = <PORT>
  b. FILEPATH = <ABSOLUTE FILE PATH OF DATA FILE>
5. Start the server using the following command. `npm run start`
6. If nodemon is installed globally, server can be started in development mode using `npm run dev`
7. Command to install nodemon globally : `npm i -g nodemon`
8. The server will be running on `http://localhost:3000`

### API Endpoints:

#### 1. Get all products :
Url : `http://localhost:3000/products`

HTTP METHOD : GET

##### Successfull Request :

Status code : 200

Response body : array of all products

##### Unsuccessfull Request :

Status code : 500

Response body : Error Object

#### 2. Get product by Id :
Url : `http://localhost:3000/products/:id`

HTTP METHOD : GET

##### Successfull Request :

Status code : 200

Response body : Single Json object

##### Unsuccessfull Request :

Status code : 404

Response body : {"message" : "Product not found."}

Status code : 500

Response body : Error Object

#### 3. Create Product :
Url : `http://localhost:3000/products`

HTTP METHOD : POST

Request Body Template :
```
{
"id" : "333",
"title" : "Brown Sneakers",
"category" : "Shoes",
"imagepath" : "public/images/brown_shoes.png",
"price" : "500"
}
```
##### Successfull Request :

Status code : 200

Response body : Newly Created Product Object

##### Unsuccessfull Request :

Status code : 500

Response body : Error Object

Status code : 422

Response body : {"message" : "Product Schema Invalid"}

#### 4. Delete Product :
Url : `http://localhost:3000/products/:id`

HTTP METHOD : DELETE

##### Successfull Request :

Status code : 200

Response body : {"message" : "Object Deleted Successfully"}

##### Unsuccessfull Request :

Status code : 404

Response body : {"message" : "Product not found."}

Status code : 500

Response body : Error Object

#### 5. Patch Product :
Url : `http://localhost:3000/products/:id`

HTTP METHOD : PATCH

`title, category, imagePath, price` can be updated
`id` cannot be updated.

Example : 
```
{
"title" : "Yellow Pants",
"price" : "5000"
}
```
##### Successfull Request :

Status code : 200

Response body : Updated Json object

##### Unsuccessfull Request :

Status code : 404

Response body : {"message" : "Product not found."}

Status code : 500

Response body : Error Object
