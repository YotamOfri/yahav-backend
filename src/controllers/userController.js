const getUserById = (req, res) => {
  const { id } = req.params;
  res.send(`User ID: ${id}`);
};

module.exports = { getUserById };
