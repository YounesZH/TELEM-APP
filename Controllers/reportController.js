const db = require('../config/db');

// Get all reports
exports.getAllReports = (req, res) => {
  const query = 'SELECT * FROM reports';
  db.query(query, (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
};

// Add a new report
exports.createReport = (req, res) => {
  const { report_type, user_id, site_id, report_date, report_data } = req.body;
  const query = 'INSERT INTO reports (report_type, user_id, site_id, report_date, report_data) VALUES (?, ?, ?, ?, ?)';
  db.query(query, [report_type, user_id, site_id, report_date, report_data], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ message: 'Rapport ajouté avec succès' });
  });
};
