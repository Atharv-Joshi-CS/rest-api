# Products Rest API

The aim of this exercise is to develop a well structured API which is able to perform CRUD operations on json data.


### Steps to run the project.

1. Setup the repository in your local system.
2. Make sure you have node and npm installed.
3. After completing the above two steps run the following command to download all dependencies. `npm install`
4. Start the server using the following command. `npm run start`
5. If nodemon is installed globally, server can be started in development mode using `npm run dev`
6. Command to install nodemon globally : `npm i -g nodemon`
7. The server will be running on `http://localhost:3000`

### API Endpoints:

#### 1. Get all products :
Url : `http://localhost:3000/products`

HTTP METHOD : GET

##### Successfull Request :

Status code : 200

Response body : array of all products

#### 2. Get product by Id :
Url : `http://localhost:3000/products/:id`

HTTP METHOD : GET

##### Successfull Request :

Status code : 200

Response body : Single Json object

##### Unsuccessfull Request :

Status code : 404

Response body : EMPTY

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

Status code : 422

Response body : EMPTY

#### 4. Delete Product :
Url : `http://localhost:3000/products/:id`

HTTP METHOD : DELETE

##### Successfull Request :

Status code : 200

Response body : Single Json object

##### Unsuccessfull Request :

Status code : 404

Response body : EMPTY

#### 5. Product Product :
Url : `http://localhost:3000/products/:id`

HTTP METHOD : PATCH

##### Successfull Request :

Status code : 200

Response body : Updated Json object

##### Unsuccessfull Request :

Status code : 404

Response body : EMPTY
