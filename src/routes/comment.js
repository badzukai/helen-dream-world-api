const express = require('express');
const router = express.Router();
const {Comment} = require('../db/db');

router.get('/:publicationName', async (req, res) => {
  let publicationName = req.params.publicationName;
  try {
    const content = await Comment.findAll({
      where: {
        publicationName
      }
    });
    res.json(content);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
});

router.post('/', async (req, res) => {
  const {content, publicationName, userName } = req.body;
  try {
    const comment = await Comment.create({ content, publicationName, userName });
    res.json(comment);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
  res.send
});

module.exports = router