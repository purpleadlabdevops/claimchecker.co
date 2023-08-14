require('dotenv').config()
module.exports = query => {
  return new Promise((resolve, reject) => {
    const
      mysql = require('mysql'),
      dbData = {
        host:     process.env.HOST,
        database: process.env.DB_NAME,
        user:     process.env.DB_USER,
        password: process.env.DB_PASS
      }

    if(process.env.NODE_ENV === 'development') dbData.port = 8889
    console.log(process.env.NODE_ENV);

    const conn = mysql.createConnection()

    conn.connect()

    conn.query(query, (err, rows, fields) => {
      if(err) reject(err);
      resolve(rows)
    })

    conn.end()
  })
}