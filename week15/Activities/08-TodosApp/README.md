* Folder: `08-ORM-To-Sequelize/Unsolved`

* INSTRUCTIONS:


  6) Step 5 should have created a config and a models folder for us. Navigate to the config folder, open `config.json`, and modify the development object's "database","username" and "password" values to match your MYSQL database on your machine. Include the database port number, if not using the default.

  7) Navigate to the models folder and create a new file called `todo.js`. Create a Todo model with columns for "text" (DataTypes.STRING), and "complete" (DataTypes.BOOLEAN).

  8) Navigate to the server.js file and require all of our models by requiring the models folder. Save this to a variable and name it "db".

  9) Sync the models by running db.sequelize.sync() before we start the express server.

  10) In your terminal, run "node server". Check MYSQL Workbench to see if a Todos table was created. If so, you were successful. If not, check your terminal for any errors.
