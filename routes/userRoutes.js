// const express = require('express');
// const router = express.Router();
// router.get('/users', (req, res) => {
//     res.send("All Users");
// });
// module.exports = router;
// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const User = require('../models/User');
const {createUser} = require('../Controller/controller.js'); 
const { getUser } = require('../Controller/controller.js');
const { UpdateUser } = require('../Controller/controller.js');
const { deleteUser } = require('../Controller/controller.js');

// Create a user
router.post ('/', createUser);

//Get a user 
router.get('/all', getUser);

// Get all users


// Update a user
router.put('/:id', UpdateUser);

// Delete a user
router.delete('/:id', deleteUser);

module.exports = router;
