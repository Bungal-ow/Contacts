# ABODE
Modules: Listing summary, Agent/Agency Contact - Appointments and Tours

Database used: MongoDB. Please have MongoDB shell and server v4.2.3 running. If earlier, please update to latest. 
It is doubtful that you have a database called "abode_dh" so running the seeding script after installing all packages should create and populate it. 

- npm install
- npm start
- npm run react-dev
- npm run seed

The script will check if you have that database already and if you have any documents in the properties collection. If you do, your console should log "Database contains sufficient seeded data"

If for any reason you want to reseed your database, after logging into the shell with:
- mongo

use these commands:
- show database
- use abode_dh
- show collections
- db.properties.deleteMany({})

That should empty the collection (usually 100 documents will be deleted)

Then you can go back to you node terminal and seed the database again:
- npm run seed

If successful, the console shoud log that 100 entries(documents) were made.

You should now be able to point your browser or proxy to http://localhost:5000 to be served the static files / components. 