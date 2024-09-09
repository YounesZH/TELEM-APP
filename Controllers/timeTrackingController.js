const db = require('../config/db');


exports.getAllTimeTracking = (req, res) => {
  const query = 'SELECT * FROM timetracking';
  db.query(query, (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
};


exports.createTimeTracking = (req, res) => {
  const { user_id, site_id, check_in_time, check_out_time, hours_worked, notes } = req.body;
  const query = 'INSERT INTO timetracking (user_id, site_id, check_in_time, check_out_time, hours_worked, notes) VALUES (?, ?, ?, ?, ?, ?)';
  db.query(query, [user_id, site_id, check_in_time, check_out_time, hours_worked, notes], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ message: 'Temps de suivi ajouté avec succès' });
  });
};
