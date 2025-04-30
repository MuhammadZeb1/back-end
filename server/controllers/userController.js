import  Example from "../model/example.js";
// const Users = Example.Example

// console.log(Users);

// Create
export const createUser = async (req, res) => {
    try {
      const example = new Example(req.body);  
      const savedUser = await example.save();
      res.status(201).json(savedUser);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  };
  

// Read all
export const getUsers = async(req, res) => {
  const find = await Example.find()
  res.json(find)
};

// Read one
export const getUser = async (req, res) => {
  try {
    const id = req.params.id;
    const find = await Example.findById(id);
    
    if (!find) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(find);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};


// Update
export const updateUser = async(req, res) => {
   try {
    const id = req.params.id;
    const find = await Example.findOneAndReplace({_id:id},req.body,{new:false});
    
    if (!find) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(find);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// PATCH - Update selected fields only
export const patchUser = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedUser = await Example.findByIdAndUpdate(id, req.body, {
      new: true,        // return the updated document
      // runValidators: true // validate updated data against schema
    });

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(updatedUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


// Delete
import mongoose from "mongoose";

export const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;

    // Validate ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid ID format" });
    }

    const deletedUser = await Example.findByIdAndDelete(id);

    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "User deleted", data: deletedUser });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};
