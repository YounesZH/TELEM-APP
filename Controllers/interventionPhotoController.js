const db = require('../config/db');

// Get all intervention photos
exports.getAllPhotos = (req, res) => {
  const query = 'SELECT * FROM interventionphotos';
  db.query(query, (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
};

// Add a new intervention photo
exports.createPhoto = (req, res) => {
  const { site_id, user_id, intervention_date, photo_type, photo_path, description, created_at } = req.body;
  const query = 'INSERT INTO interventionphotos (site_id, user_id, intervention_date, photo_type, photo_path, description, created_at) VALUES (?, ?, ?, ?, ?, ?, ?)';
  db.query(query, [site_id, user_id, intervention_date, photo_type, photo_path, description, created_at], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ message: 'Photo d\'intervention ajoutée avec succès' });
  });
};
