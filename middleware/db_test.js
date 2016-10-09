/*requiring mysql node modules */
/**
 * author Piter Novian [ptr.nov@gmail.com]
 * change name file to db_test.js to db.js
 * socketPath : find socket pah mysql
*/
var mysql = require("mysql");

var method = db.prototype;

function db() {
	/*
		creating MySql database connection 
	*/
	var con = mysql.createPool({
		connectionLimit : 100, //important
		host : '',
	  	user : '',
	  	password : '',
	  	database : '',
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
