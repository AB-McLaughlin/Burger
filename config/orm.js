const connection = require("./connection.js");


//Method to display all burgers available for devouring selectAll()
var orm = {
	all: function(tableInput, callback) {
		connection.query('SELECT * FROM ' + tableInput + ';', function(err, result) {
			if (err)
				throw err;
			callback(result);
		})
	},

//Method to add burger to database insertOne()
    create: function(tableInput, value, callback) {
        connection.query('INSERT INTO ' + tableInput + " (burger_name) VALUES ('" + value + "');", function(err, result) {
            if (err)
                throw err;
            callback(result);
        })
    },	

//Method to add burger to list of burgers that have been devoured updateOne()
    update: function(tableInput, condition, callback) {
        connection.query('UPDATE ' + tableInput + ' SET DEVOURED=true WHERE id=' + condition + ';', function(err, result) {
            if(err)
                throw err;
            callback(result);
        })
    }
}


//Export the ORM object in `module.exports`.
module.exports = orm;