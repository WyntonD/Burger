var mysql = require("mysql");

var connection;

if(process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} 
else{
    connection = mysql.createConnection({
        host:"localhost",
        user:"root",
        password: "12345678",
        database: "burgers_db"
    });
};

connection.connect(function(err) {

    if(err)
    {
        console.log("Error occured when trying to connect");
        return;
    };
    console.log("Succesfully connected ad ID " + connection.threadId);
});

module.exports = connection;