require('dotenv').config()
module.exports = query => {
  return new Promise((resolve, reject) => {
    const
      mysql = require('mysql'),
      conn = mysql.createConnection({
               host:     process.env.HOST,
               database: process.env.DB_NAME,
               user:     process.env.DB_USER,
               password: process.env.DB_PASS,
               // port: 8889
             })

    conn.connect()

    conn.query(query, (err, rows, fields) => {
      if(err) reject(err);
      resolve(rows)
    })

    conn.end()
  })
}