var express = require('express');
var router = express.Router();
const crypto = require('crypto');
/* GET home page. */
router.get('/', function(req, res, next) {

    const dbobj=req.db_obj;
// read mesage from database and decrypte it
    dbobj.homework7.findOne({},function (err,encryptedData) {
            const decipher = crypto.createDecipher('aes256', 'asaadsaad');
            const encrypted = encryptedData.message;
            let decrypted = decipher.update(encrypted, 'hex', 'utf8');
            decrypted += decipher.final('utf8');
            //res.send(decrypted);
        res.render("index",{title:decrypted});
        });



});

module.exports = router;
