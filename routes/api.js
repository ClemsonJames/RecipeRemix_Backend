const express = require('express');
const router = express.Router();
const RecipeController = require('../controllers/RecipeController');

/**
 * get random recipe based on ingredient
 * body {
 *  food: food
 * }
 */
router.post('/recipe', function(req, res){
    let food = req.body.food;
    RecipeController.createRecipe(food, function(err, user) {
        if (err){
            return res.status(400).send(err);
        }
        return res.status(200).send(user);
    });
    
})

module.exports = router;