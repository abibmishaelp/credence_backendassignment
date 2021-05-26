let async = require('async');
var express = require('express');
var router = express.Router();
let serviceUsers = require('../service/users');

/* GET home page. */

//Read
router.get('/', async (req, res) => {
  let result;
  try {
    result = await serviceUsers.dashboard(req);
    console.log("Result", result);
  } catch (e) {
    console.log("Error", e);
  } finally {
    res.render('dashboard', {
      title: "Welcome to Dashboard",
      data: result
    });
  }
});

//Create
router.post('/', async (req, res) => {
  let result;
  try {
    result = await serviceUsers.create(req);
    console.log("Result", result);
  } catch (e) {
    console.log("Error", e);
  } finally {
    res.render('index', { title: result });
  }
});

//Edit
router.put('/', async (req, res) => {
  let result;
  try {
    result = await serviceUsers.edit(req);
    console.log("Result", result);
  } catch (e) {
    console.log("Error", e);
  } finally {
    res.render('index', { title: result });
  }
});

//Delete
router.delete('/', async (req, res) => {
  let result;
  try {
    result = await serviceUsers.delete(req);
    console.log("Result", result);
  } catch (e) {
    console.log("Error", e);
  } finally {
    res.render('index', { title: result });
  }
});

module.exports = router;
