const db = require('../config/db');

exports.getAllWorkHours = (req, res) => {
  const query = 'SELECT * FROM workhours';
  db.query(query, (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
};

exports.createWorkHours = (req, res) => {
  const { user_id, site_id, work_date, start_time, end_time } = req.body;
  const query = 'INSERT INTO workhours (user_id, site_id, work_date, start_time, end_time) VALUES (?, ?, ?, ?, ?)';
  db.query(query, [user_id, site_id, work_date, start_time, end_time], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ message: 'Heures de travail ajoutées avec succès' });
  });
};
