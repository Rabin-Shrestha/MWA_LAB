/**
 * Created by Rabin Shrestha on 7/3/2017.
 */
var express = require('express');
var fs=require('fs');


var router = express.Router();

/* GET news letter data listing. */
router.get('/', function(req, res, next) {
    //res.send('respond with a resource');
    res.render('newsletterView',{title:'NewsFeed'})
});


router.post('/subscribe', function(req, res, next) {

    /***************************************
     * Checking Token
     ****************************************/
    // todo
    // req.csrfToken()




    /***************************************
     * Validating the Form data
     ****************************************/
    var email = req.body.email;
    console.log("your email Address is "+email);
    req.assert('email','Email must be valid').notEmpty().isEmail();
    var errors = req.validationErrors();
    console.log(errors);
    if(errors){
        res.render('newsletterView',{errors: errors[0].msg});
    }else{
        //After successful Validation
        fs.appendFileSync('subscriberList.txt',email+'\n'); // writing subscriber email in  file
        res.render("thankyouView",{EMAIL:email}); // rendering thank you page
    }


});

module.exports = router;
