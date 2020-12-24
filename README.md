# capstoneProject-MyBrand: personal branding

[![Build Status](https://travis-ci.com/bertinNDAYISHIMIYE/capstoneProject-MyBrand.svg?branch=develop)](https://travis-ci.com/bertinNDAYISHIMIYE/capstoneProject-MyBrand)


[![Coverage Status](https://coveralls.io/repos/github/bertinNDAYISHIMIYE/capstoneProject-MyBrand/badge.svg?branch=develop)](https://coveralls.io/github/bertinNDAYISHIMIYE/capstoneProject-MyBrand?branch=develop)

[![Maintainability](https://api.codeclimate.com/v1/badges/3603ba7a48c3a2140453/maintainability)](https://codeclimate.com/github/bertinNDAYISHIMIYE/capstoneProject-MyBrand/maintainability)


# Project Description

- The project consist of two works:
- UI : user interface ( personal portifolio and blloging website)
- Server : personal branding and blogging powering server.

# Running server locally

- Clone this repo with: https://github.com/bertinNDAYISHIMIYE/capstoneProject-MyBrand
- `npm install` to install all required dependencies
- Install MongoDB community 
- `npm run dev` to start the local server

# Application Structure

- `index.js` -  The entry point to our application. This file defines our express server and connects it to MongoDB using mongoose. It also requires the routes and models we'll be using in the application.
- `routes/` - This folder contains the route definitions for our API.
- `models/` - This folder contains the schema definitions for our Mongoose models.
- `controllers/` - This folder contains the logic for each API endpoint route.
- `middleware/` - This folder contains validation and authorisation logics
- `helper/` - This folder contains files that help in codes logic.
- `config/` - this folder contains configuratons settings files.



