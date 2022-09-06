//* Accessing local data
let commentsData = require('../../data/comments');

const getComments = (req, res) => {
  res.json(commentsData);
};

const getCommentByID = (req, res) => {
  const commentID = req.params.id;
  // console.log(contactID);
  const getComment = commentsData.find((comment) => comment._id === +commentID);
  if (!getComment) {
    res.status(500).send('Account not found.');
  } else {
    res.json(getComment);
  }
};

const postNewComment = (req, res) => {
  // * Mapping the contactDataArray to get all the existing ID's into an array.
  idArray = commentsData.map((object) => object._id);
  // * Finding the max value in the array of IDs
  let maxID = Math.max(...idArray);
  // * Adding 1 to the current max value every time the postNewContact route is run.
  let newID = maxID + 1;

  let newComment = req.body;
  // * Adding newID key and value to req.body at the object's first position.
  let keyValues = Object.entries(newComment);
  keyValues.splice(0, 0, ['_id', newID]);
  newComment = Object.fromEntries(keyValues);
  commentsData.push(newComment);
  res.json(newComment);
};

//* Exporting route functions
module.exports = {
  getComments,
  getCommentByID,
  postNewComment,
};
