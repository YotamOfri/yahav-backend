const { formatTime } = require("../utils/timeFormatter");

const getCurrentTime = (req, res) => {
  const time = formatTime(new Date());
  res.send(`Current time: ${time}`);
};

module.exports = { getCurrentTime };
