var express = require('express');

var router = express.Router();

const User = require("../../controllers/user.controller");

router.post("/", async function(req,res){
    let user = await User.create(req.body);
    if(user){
        req.flash('info', 'Created successfully.');
        res.redirect('/identityChain/register');
    }
    else
    {
        req.flash('info', 'Created incorrectly.');
        res.redirect('/identityChain/register');
    }
});

module.exports = router;

// Retrieve all Tutorials
//router.get("/", token.findAll);

// Delete a Tutorial with id
//router.delete("/:identity/:org", token.delete);

