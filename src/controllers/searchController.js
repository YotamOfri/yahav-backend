const searchItems = (req, res) => {
  const { term, page } = req.query;

  if (!term || !page) {
    return res.status(400).send("Missing required parameters: term and page");
  }

  res.send(`Searching for '${term}' on page ${page}`);
};

module.exports = { searchItems };
