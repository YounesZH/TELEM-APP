const db = require('../config/db');

// Get all sites
exports.getAllSites = (req, res) => {
  const query = 'SELECT * FROM sites';
  db.query(query, (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
};

// Add a new site
exports.createSite = (req, res) => {
  const { site_name, site_location, created_at } = req.body;
  const query = 'INSERT INTO sites (site_name, site_location, created_at) VALUES (?, ?, ?)';
  db.query(query, [site_name, site_location, created_at], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ message: 'Site ajouté avec succès' });
  });
};
