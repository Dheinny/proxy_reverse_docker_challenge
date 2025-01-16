const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'mysql_ch',
    user: 'root',
    password: 'root',
    database: 'proxy_ch_db'
}

const mysql = require('mysql')

const name = ['Joao', 'Maria', 'Jose', 'Carlos', 'Roberto', 'Anne', 'Joana', 'Carla', 'Jorge', 'Gloria']
const lasname = ['Silva', 'Santos', 'Pereira', 'Oliveira', 'Ferreira', 'Valle', 'Sousa', 'Veloso', 'Duarte', 'Buarque']

app.get('/', (req, res) =>{
    connection = mysql.createConnection(config)
    sql = `INSERT INTO people(name) values ('`+name[parseInt(Math.random()*10)]+` `+lasname[parseInt(Math.random()*10)]+`')`
    connection.query(sql)
    
    rp = response_req(connection, res)
    connection.end
})

app.listen(port, ()=>
    console.log('Node server listen on port:' + port)
)

function response_req(con, res) {    
    sql = `SELECT name FROM people;`
    
    name_list = "<h1>NOMES</h1><p/>"

    con.query(sql, function(err, result, fiels){
        for (let n in result) {
            name_list+="<p>"+result[n].name+"</p>"            
        }
        
        res.send(name_list)
    })   
}