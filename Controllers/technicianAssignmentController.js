const db = require('../config/db');

// Get all technician assignments
exports.getAllAssignments = (req, res) => {
  const query = 'SELECT * FROM technicienassignments';
  db.query(query, (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
};

// Add a new technician assignment
exports.createAssignment = (req, res) => {
  const { assignment_id, user_id, site_id, assignment_date } = req.body;
  const query = 'INSERT INTO technicienassignments (assignment_id, user_id, site_id, assignment_date) VALUES (?, ?, ?, ?)';
  db.query(query, [assignment_id, user_id, site_id, assignment_date], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ message: 'Assignation ajoutée avec succès' });
  });
};
