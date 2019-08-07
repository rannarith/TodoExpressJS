// get model form model path
const Todo = require('../models/todo.m');

exports.todo_home = function(req, res, next){
    res.render('todo_create');
}

exports.todo_editpage = function(req, res, next){
    res.render('todo_edit');
}
exports.todo_list = function(req, res, next){
    // res.send('Todo list here');
    Todo.find( function(err, todo){
        if(err) return next(err);
        res.render('todolist', {todos:todo});
    });
};

exports.todo_create = function(req, res, next){
    const todo = new Todo(
        {
            name: req.body.name,
            status: false
        }  
    );
    todo.save(function(err){
        if(err) return next(err);
        res.redirect('/todos');
    });
};  

exports.todo_delete = function(req, res, next){
        Todo.remove({_id:req.params.id}, function(err){
            if(err) {return (err)}
            res.redirect('/todos/list');
        });
};

exports.todo_edit = function(req, res, next) {
    if (req.method === 'POST') {
        /** Client request to update data */
        Todo.findOneAndUpdate({ _id: req.params.id }, req.body, function(err) {
            if (err) return (err);

            res.redirect('/todos/list');
        });
    } else {
        /** Get data to display to client */
        Todo.findOne({ _id: req.params.id }, function(err, result) {
            if (err) throw err;

            res.render('todo_edit', { todo: result, total: 1 });
        });
    }
}   