const express = require('express');
const connectDB = require('./config/config');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

connectDB();

app.use(cors());
app.use(bodyParser.json());

app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/projects', require('./routes/projectRoutes'));
app.use('/api/tasks', require('./routes/taskRoutes'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
