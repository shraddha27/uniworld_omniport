const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'omniport'
});

const createTables = [
  `CREATE TABLE Users (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL UNIQUE
  );`,
  `CREATE TABLE Orders (
      id INT AUTO_INCREMENT PRIMARY KEY,
      amount DECIMAL(10, 2) NOT NULL,
      user_id INT NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (user_id) REFERENCES Users(id)
  );`,
  `CREATE TABLE Order_Chairs (
      id INT AUTO_INCREMENT PRIMARY KEY,
      order_id INT NOT NULL,
      chair_id INT NOT NULL,
      FOREIGN KEY (order_id) REFERENCES Orders(id)
  );`,
  `CREATE TABLE Order_Tables (
      id INT AUTO_INCREMENT PRIMARY KEY,
      order_id INT NOT NULL,
      table_id INT NOT NULL,
      FOREIGN KEY (order_id) REFERENCES Orders(id)
  );`,
  `CREATE TABLE Order_Tops (
      id INT AUTO_INCREMENT PRIMARY KEY,
      order_id INT NOT NULL,
      top_id INT NOT NULL,
      FOREIGN KEY (order_id) REFERENCES Orders(id)
  );`
];

db.connect((err) => {
  if (err) {
    throw err;
  }

  createTables.forEach((sql, index) => {
    console.log("sql:",sql);
    db.query(sql, (err1, results) => {
      if (err1) console.log(err1);
      console.log(`Table ${index + 1} created successfully.`);
    });
  });

  console.log('MySQL Connected...');
});

module.exports = db;
