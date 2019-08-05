// get model form model path
const Todo = require('../models/todo.m');

exports.todo_home = function(req, res, next){
    res.render('todo_create');
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
            name: req.body.name
        }  
    );
    todo.save(function(err){
        if(err) return next(err);
        res.render('todo_create');
    });
};  

exports.todo_delete = function(req, res, next){
        Todo.remove({_id:req.params.id}, function(err){
            if(err) return (err)
            res.redirect('todolist');
        });
};

exports.todo_edit = function(req, res, next) {
    Todo.findOneAndUpdate({_id:req.params.id}, req.body, function(err){
        if(err) return (err);
        res.send('updated');
    });
}   