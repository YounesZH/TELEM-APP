const express = require('express');
const bodyParser = require('body-parser');
const db = require('./config/db');



// Import routes
const userRoutes = require('./Routes/userRoutes');
const siteRoutes = require('./Routes/siteRoutes');
const reportRoutes = require('./Routes/reportRoutes');
const technicianAssignmentRoutes = require('./Routes/technicianAssignmentRoutes');
const timeTrackingRoutes = require('./Routes/timeTrackingRoutes');
const workHoursRoutes = require('./Routes/WorkHoursRoutes');
const notificationRoutes = require('./Routes/notificationRoutes');
const interventionPhotoRoutes = require('./Routes/interventionPhotoRoutes');

// Initialize app
const app = express();
app.use(bodyParser.json());

// Routes
app.use('/users', userRoutes);
app.use('/sites', siteRoutes);
app.use('/reports', reportRoutes);
app.use('/technician-assignments', technicianAssignmentRoutes);
app.use('/timetracking', timeTrackingRoutes);
app.use('/workhours', workHoursRoutes);
app.use('/notifications', notificationRoutes);
app.use('/interventionphotos', interventionPhotoRoutes);
app.use('/auth', authRoutes);


// Server setup
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
