var express = require('express');
var router = express.Router();
router.get('/', function(req, res, next) {
    var num1 = Math.floor(Math.random() * 10);
    var num2 = Math.floor(Math.random() * 10);
    var num3 = Math.floor(Math.random() * 10);
    var num4 = Math.floor(Math.random() * 10);
    var acoshFunction = Math.acosh(num1);
    var log1pFunction = Math.log1p(num2);
    var tanFunction = Math.tan(num3);
    var sqrtFunction = Math.sqrt(num4);
    res.render('computation',
                {
                    title: ' Yogesh Naidu Mahareddy computations :',
                    num1: num1,
                    num2: num2,
                    num3: num3,
                    num4: num4,
                    acosh: acoshFunction,
                    log1p: log1pFunction,
                    tan: tanFunction,
                    sqrt: sqrtFunction
                });
});
module.exports = router;