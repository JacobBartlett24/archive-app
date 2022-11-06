const {createPool} = require('mysql');

const pool = createPool({
    host: "localhost",
    user: "root",
    password: "password",
    connectionLimit: 10
})

pool.query(
    `select * from archive.playlists`,
    (err, res) =>{
        return console.log(res)
    }
)