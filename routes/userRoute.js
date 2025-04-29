import express from 'express';
import {
  createUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
  patchUser
} from '../controllers/userController.js';

const router = express.Router();

router.post('/users', createUser);       // Create
router.get('/users', getUsers);          // Read all
router.get('/users/:id', getUser);       // Read one
router.put('/users/:id', updateUser);    // Update
router.patch('/users/:id', patchUser);    // Update
router.delete('/users/:id', deleteUser); // Delete

export default router;