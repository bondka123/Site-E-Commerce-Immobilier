const user = require('../models/user');

exports.createUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const user = new user({ username, email, password });
    await user.save();

    res.status(201).json({ message: 'Utilisateur créé avec succès', user });
  } catch (error) {
    res.status(400).json({ message: 'Erreur lors de la création de l’utilisateur', error });
  }
};
