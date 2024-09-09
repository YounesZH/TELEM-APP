const db = require('../config/db');

// Get all notifications
exports.getAllNotifications = (req, res) => {
  const query = 'SELECT * FROM notifications';
  db.query(query, (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
};

// Add a new notification
exports.createNotification = (req, res) => {
  const { user_id, notification_type, message, is_read, created_at } = req.body;
  const query = 'INSERT INTO notifications (user_id, notification_type, message, is_read, created_at) VALUES (?, ?, ?, ?, ?)';
  db.query(query, [user_id, notification_type, message, is_read, created_at], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ message: 'Notification ajoutée avec succès' });
  });
};
