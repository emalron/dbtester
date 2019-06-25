var mysql = require("mysql");

var connection = mysql.createConnection({
host: 'localhost',
post: 3306,
user: 'dev',
password: 'init0000',
database: 'testdb'
});

connection.connect();

connection.query("select * from users", function(err, rows, fields) {
		connection.end();
		if(!err) {
		console.log(rows);
		console.log(fields);
		var result = 'rows: ' + JSON.stringify(rows) + '<br><br>' +
		'fields: ' + JSON.stringify(fields);
		}
		else {
		console.log('query error: ' + err);
		}
		}
		);
