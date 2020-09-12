const path = require('path');
const spawn = require("child_process").spawn;
//const pythonProcess = spawn('python',["path/to/script.py", arg1, arg2, ...]);
const fs = require('fs');
var RecipeController = {};

RecipeController.createRecipe = function(food, callback) {
    return callback(null, {
        recipe: food + ' taste good'
    });
}

RecipeController.randomMeme = function(callback) {
    let files = fs.readdirSync(path.join(__dirname, '../asset'));
    let meme = files[Math.floor(Math.random() * files.length)];
    return callback(null, path.join(__dirname, '../asset/', meme));
}


module.exports = RecipeController;