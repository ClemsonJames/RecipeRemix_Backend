const express = require('express');
const router = express.Router();
const RecipeController = require('../controllers/RecipeController');


router.get('/recipe', function(req, res){
    RecipeController.createRecipe(function(err, user) {
        if (err){
            return res.status(400).send(err);
        }
        return res.status(200).send(user);
    });
    
})

module.exports = router;