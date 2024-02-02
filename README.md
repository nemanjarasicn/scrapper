# SCRAPPER

SCRAPPER - Scrape the 888casino's hourly jackpot data 

## Languages

- JavaScript ( typeScript )

## Technologies and Tools

- Node.js
- Express
- Git
- VSCode
- etc.

## Install

Follow the bellow steps to install the application:

1. download the repository

   `git clone https://github.com/nemanjarasicn/nymbl-task.git`

2. replace all template files with actual files

   - find the `.env.dev` files in root folder , than you need and duplicate(!) them as `.env`


3. install dependencies and start app

   navigate to root folder and:

   `npm install ` then `npm start`

## Update

Simply run `git pull origin`

### Development

#### Dev Prerequisites

Node.js and npm: Ensure you have Node.js and npm (Node Package Manager) installed on your machine. You can download them from https://nodejs.org/.

#### Test the application

In order to test the application open a postman or some other tools for for sending HTTP requests, choose GET method  and type url: http://localhost:8080/api/parser.

Or just run app and follow the console, you will see 'hourly jackpot' on every 30 seconds.

