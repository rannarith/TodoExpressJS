var express = require('express');
var router = express.Router();

// Call Controller that we by path 
const todo_C = require('../controllers/todo.c');

// Todo home
router.get('/', todo_C.todo_home);
// Get Todos listing
router.get('/list', todo_C.todo_list);
// Create todo Task 
router.post('/create', todo_C.todo_create);
router.get('/:id/delete', todo_C.todo_delete);
router.post('/:id/edit', todo_C.todo_edit);
module.exports = router;