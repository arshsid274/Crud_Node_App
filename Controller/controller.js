// import User from '../models/User.js';

// exports.createUser = async (req,res) =>{
//   try {
//     const user = new User(req.body);
//     const saved = await user.save();
//     res.status(201).json(saved);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }

// };

// controller.js
import User from '../models/User.js';

export const createUser = async (req, res) => {
  try {
    const user = new User(req.body);
    const saved = await user.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getUser = async (req, res) => {
    
      try {
        const users = await User.find();
        res.json(users);
      } catch (err) {
        res.status(500).json({ error: err.message });
      
      }
    };

    export const UpdateUser = async (req, res) => {
      try {
        const updated = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updated);
      } catch (err) {
        res.status(500).json({ error: err.message });
      }  
    };

    export const deleteUser = async (req, res) => {
      try {
        await User.findByIdAndDelete(req.params.id);
        res.json({ message: 'User deleted' });
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
    };

