const db = require('../config/db');

// Get all users
exports.getAllUsers = (req, res) => {
  const query = 'SELECT * FROM users';
  db.query(query, (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
};

// Add a new user
exports.createUser = (req, res) => {
  const { username, password_hash, email, gsm, role, created_at } = req.body;
  const query = 'INSERT INTO users (username, password_hash, email, gsm, role, created_at) VALUES (?, ?, ?, ?, ?, ?)';
  db.query(query, [username, password_hash, email, gsm, role, created_at], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ message: 'Utilisateur ajouté avec succès' });
  });
};
