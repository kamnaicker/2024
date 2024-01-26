var express = require('express');
const {response} = require("express");
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login.ejs',{title: 'Express', username: null,password: null, ticketNo: null});
});

//router.post('/login/{username}/{password}',[username],  )

module.exports = router;
