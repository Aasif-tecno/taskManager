const express = require('express');
const {
  getAllTasks,
  createTasks,
  getSingleTask,
  updateTask,
  deleteTask,
} = require('../controllers/tasks');

const router = express.Router();

router.route('/').get(getAllTasks).post(createTasks);
router.route('/:id').get(getSingleTask).patch(updateTask).delete(deleteTask);

module.exports = router;
