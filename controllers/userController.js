let users = [];
let idCounter = 1;

// Create
export const createUser = (req, res) => {
  const user = { id: idCounter++, ...req.body };
  users.push(user);
  res.status(201).json(user);
};

// Read all
export const getUsers = (req, res) => {
  res.json(users);
};

// Read one
export const getUser = (req, res) => {
  const user = users.find(u => u.id == req.params.id);
  if (!user) return res.status(404).json({ message: 'User not found' });
  res.json(user);
};

// Update
export const updateUser = (req, res) => {
  const user = users.find(u => u.id == req.params.id);
  if (!user) return res.status(404).json({ message: 'User not found' });

  Object.assign(user, req.body);
  res.json(user);
};

// Delete
export const deleteUser = (req, res) => {
  const index = users.findIndex(u => u.id == req.params.id);
  if (index === -1) return res.status(404).json({ message: 'User not found' });

  users.splice(index, 1);
  res.json({ message: 'User deleted' });
};
