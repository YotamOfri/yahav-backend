const triggerError = (req, res, next) => {
  const err = new Error("Something went wrong!");
  next(err);
};

const handleMissingRoute = (req, res) => {
  res.status(404).send("Route not found.");
};

module.exports = {
  triggerError,
  handleMissingRoute,
};
