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
export const getUsers = (req, res) => {
  res.send("")
};

// Read one
export const getUser = (req, res) => {
    res.send("")

};

// Update
export const updateUser = (req, res) => {
  res.send("")

};

// Delete
export const deleteUser = (req, res) => {
    res.send("")
 
};
