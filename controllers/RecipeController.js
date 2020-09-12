const spawn = require("child_process").spawn;
//const pythonProcess = spawn('python',["path/to/script.py", arg1, arg2, ...]);

var RecipeController = {};

RecipeController.createRecipe = function(food, callback) {
    return callback({
        recipe: food + " taste good"
    });
    
}


module.exports = RecipeController;