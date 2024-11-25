const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

// Middleware
const loggerMiddleware = require("./middleware/loggerMiddleware");
const errorHandlerMiddleware = require("./middleware/errorHandlerMiddleware");

// Routes
const greetRoutes = require("./routes/greetRoutes");
const searchRoutes = require("./routes/searchRoutes");
const userRoutes = require("./routes/userRoutes");
const dataRoutes = require("./routes/dataRoutes");
const timeRoutes = require("./routes/timeRoutes");
const errorRoutes = require("./routes/errorRoutes");

// Middleware setup
app.use(express.json());
app.use(express.static("public"));
app.use(loggerMiddleware);

// Route setup
app.use(greetRoutes);
app.use(searchRoutes);
app.use(userRoutes);
app.use(dataRoutes);
app.use(timeRoutes);
app.use(errorRoutes);

// Error handling middleware
app.use(errorHandlerMiddleware);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
