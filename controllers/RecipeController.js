const path = require('path');
const {PythonShell} = require('python-shell')

let RecipeController = {};

// michaels model
RecipeController.createRecipe1 = function(food, callback) {
    let options = {
        mode: 'text',
        pythonPath:  process.env.PYTHON_PATH,
        pythonOptions: ['-u'], // get print results in real-time
        scriptPath: __dirname + '../../../models/michael',
        args: [food]
    };
    
    PythonShell.run('predict.py', options, function (err, results) {
        if (err) throw err;
        // results is an array consisting of messages collected during execution
        return callback(null, {
            recipe: results
        });
    });
}

// jonathan model
RecipeController.createRecipe2 = function(food, callback) {
    let options = {
        mode: 'text',
        pythonPath: process.env.PYTHON_PATH,
        pythonOptions: ['-u'], // get print results in real-time
        scriptPath: __dirname + '../../../models/jonathan',
        args: [food]
    };
    
    PythonShell.run('test_script.py', options, function (err, results) {
        if (err) throw err;
        // results is an array consisting of messages collected during execution
        return callback(null, {
            recipe: results
        });
    });
}

RecipeController.randomMeme = function(callback) {
    let files = fs.readdirSync(path.join(__dirname, '../asset'));
    let meme = files[Math.floor(Math.random() * files.length)];
    return callback(null, path.join(__dirname, '../asset/', meme));
}


module.exports = RecipeController;