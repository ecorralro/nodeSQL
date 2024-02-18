var mysql = require('mysql');

var conexion = mysql.createConnection({
    host:"localhost",
    user:"nodejv",
    password:"nodejv"
});
conexion.connect(function(err){
    if(err) throw(err);
    console.log("conectado");
})