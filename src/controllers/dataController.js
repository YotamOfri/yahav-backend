const postData = (req, res) => {
  const { name } = req.body;
  res.send(`Received: ${name}`);
};

module.exports = { postData };
