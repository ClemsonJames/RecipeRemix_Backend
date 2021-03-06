const express = require('express');
const router = express.Router();
const RecipeController = require('../controllers/RecipeController');

/**
 * POST REQUEST
 * get random recipe based on ingredient
 * body {
 *  food: food
 * }
 */
router.post('/recipe/michael', function(req, res){
    let food = req.body.food;
    RecipeController.createRecipe1(food, function(err, result) {
        if (err){
            return res.status(400).send(err);
        }
        return res.status(200).send(result);
    });
    
})

/**
 * POST REQUEST
 * get random recipe based on ingredient
 * body {
 *  food: food
 * }
 */
router.post('/recipe/jonathan', function(req, res){
    let food = req.body.food;
    RecipeController.createRecipe2(food, function(err, result) {
        if (err){
            return res.status(400).send(err);
        }
        return res.status(200).send(result);
    });
    
})

/**
 * GET REQUEST
 * get a random meme
 */
router.get('/meme', function(req, res){
    RecipeController.randomMeme(function(err, fileName) {
        if (err){
            return res.status(400).send(err);
        }
        return res.status(200).sendFile(fileName);
    });
})

module.exports = router;