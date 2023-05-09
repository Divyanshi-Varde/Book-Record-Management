Server  >> Storing certain book data
        >> User Register
        >> Subscription


This is a book record management API Server for the library system or management of records or books.

Fine System:
User: 06/04/2023 - 06/07/2023
09/07/2023 => 50*3=150/-


## Subscription Types
3 months (Basic)
6 months (Standard)
12 months (Premium)

If the subscription type is standard && if the subscription date is 06/04/2023
=> then subscription valid till 06/10/2023

within subscription date >> if missed the renewal >> 50/- day
subscription date has also been missed >> and missed the renewal too >> 100 + 50/- day


<!-- >> book1
>> basic
>> 06/04/2023 -> subscription date
>> 07/04/2023 => borrowed book from library
>> book1 renewal date is on 21/04/2023
>> 23/04/2023 => we need to pay a fine of 50


>> book2
>> basic
>> 06/04/2023 -> subscription date
>> 07/04/2023 => borrowed a book from library
>> book2 renewal date is on 21/04/2023
>> 23/07/2023 => we need to pay a fine of 100+50
 -->
missed by renewal date >> 50/-
missed by subscription date >> 100/-
missed by renewal and subscription date both >> 150/-

# Routes and Endpoints

## /users
POST: Creating a new user
GET: Get all the users

## /users/{id}
GET: Get user by id
PUT: Updating a user by their ID
DELETE: Delete a user by id (chk if he/she still have an issued book) && (is there any fine unpaid)

## /users/subscription_details/{id}
GET: Get user subscription details
        >> Date of Subscription
        >> Validity
        >> fine unpaid

## /books
GET: Get all the books
POST: Create/Add a new book

## /books/{id}
GET: Get a book by id
PUT: Update a book by id

## /books/issued
GET: Get all issued books

## /books/issued/withFine
GET: Get all issued books with their fine


## npm init
## npm i nodemon --save-dev
## npm run dev

...each
     ## "name": "Hetvi",
     ## "surname": "Varde",
      "email": "vardehetvi82@gmail.com",
      "subscriptionType": "Premium",
      "subscriptionDate": "01/01/2022"

...data
  "data": {
    ## "name": "Divyanshi",
    ## "surname": "Varde"
  }
name: Divyanshi
surname: Varde
email: divyanshi@gmail.com
subscriptioType: "Premium"

const index = users.indexOf(user);
users.splice(index,1)

var class = ["six", "seven", "eight"];
indexOf()
class.indexOf("seven")

MVC Arch => Controllers
  >> M: Model (It depicts the structure of aMongoDb Collections)
  >> V: View (wrt to frontend (reactJs))
  >> C: Controllers (Brain or logical part of a route)
        >> books.controllers.js
        >> users.controllers.js

Schema:
id: String
name: String
age: Number
gender: char || varchar(15)

model:
id: 123
name: DevTown
age: 23
gender: 'M'

<!-- Samsung Galaxy M31
amazon: 18k
flipkart: 17k -->

Foreing Key:
>> Referential Integrity

Users Table:                           
issuedBook: 3(Foreing Key here)
Books Table:       
issuedbook: 2 (Primary Key)
