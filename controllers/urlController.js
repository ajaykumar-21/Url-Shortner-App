const shortid = require("shortid");

const createShortUrl = async (req, res) => {
  const { longUrl, customAlias, topic } = req.body;
  try {
    let shortUrl = customAlias || shortid.generate();
    res.status(201).json({ shortUrl });
  } catch (error) {
    res.status(500).json({ error: "Error creating short URL" });
  }
};

module.exports = { createShortUrl };
