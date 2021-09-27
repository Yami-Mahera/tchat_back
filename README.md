# Application_Tchat

 application permettant de stocker des "conversations" entre des personnes

## Installation dev packages:

1 - In the folder `db-seed/`: run `npm install`
2 - In the folder `server/src`: run `npm install`
3 - In the folder `client/`: run `npm install`

## Insert seed data (users ) into mongodb:

Run the service mongodb
In the folder `db-seed/`: run `npm run seed`

## Development server

Run `npm start` in the folder `server/src`. app started and listening on port 4000 (`http://localhost:4000/`). The app will automatically reload if you change any of the source files.

## Development front

Run `npm start` in the folder `client/`. Navigate to `http://localhost:3000/`. The app will automatically reload if you change any of the source files.


## Variables environment: (.env in `server/src`)
PORT=4000
mongodb_uri=mongodb://localhost/
database=db_tchat
