/*requiring mysql node modules */
var mysql = require("mysql");

var method = db.prototype;

function db() {
	/*
		creating MySql database connection 
	*/
	var con = mysql.createPool({
		connectionLimit : 100, //important
		host : '127.0.0.1',
	  	user : 'root',
	  	password : 'syairasyaka1981',
	  	database : 'dbm005',
		socketPath: '/var/run/mysqld/mysqld.sock',
		port: '3306',
		debug    :  true,
		
	});
	this.connection=con;
}
method.getcon = function() {
	return this;
};

module.exports = db;
