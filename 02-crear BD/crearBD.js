var mysql = require('mysql');

var conexion = mysql.createConnection({
    host:"localhost",
    user:"nodejv",
    password:"nodejv"
});
conexion.connect(function(err){
    if(err) throw(err);
    console.log("conectado");
    conexion.query('CREATE DATABASE nodejv',function(err,result){
        if(err) throw err;
        console.log("Se ha creado la base de datos")
    })
})