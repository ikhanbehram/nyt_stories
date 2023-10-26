const { getNytStories } = require("../utils/nytApi");

module.exports = {
  getStories: async (req, res) => {
    try {
      const { storiesType } = req.query;
      if (!storiesType) {
        return res.status(400).send("Stories type query is not passed");
      }
      const stories = await getNytStories(storiesType);
      res.json(stories);
    } catch (err) {
      res
        .status(err.status || 500)
        .json(err.message || "Internal Server Error");
    }
  },
};
