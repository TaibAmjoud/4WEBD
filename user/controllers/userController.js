const User = require('../models/User');

// Fonction pour inscrire un nouvel utilisateur
const registerUser = async (req, res) => {
    try {
        const { firstName, lastName, email, password } = req.body;
        // Créer un nouvel utilisateur dans la base de données
        const newUser = new User({ firstName, lastName, email, password });
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

// Fonction pour récupérer tous les utilisateurs
const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

// Fonction pour récupérer un utilisateur par son ID
const getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

// Fonction pour mettre à jour un utilisateur par son ID
const updateUserById = async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedUser) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(updatedUser);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

// Fonction pour supprimer un utilisateur par son ID
const deleteUserById = async (req, res) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id);
        if (!deletedUser) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

// Fonction pour authentifier un utilisateur
const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        // Vérifier si l'utilisateur existe dans la base de données
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        // Vérifier si le mot de passe est correct
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid password' });
        }
        // Générer le token JWT
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
        res.status(200).json({ token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

// Fonction pour déconnecter un utilisateur
const logout = async (req, res) => {
    try {
        // si utilisation de JWT, peut simplement ignorer le token côté client
        res.status(200).json({ message: 'User logged out successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

// Fonction pour récupérer les détails de l'utilisateur actuellement connecté
const getUserProfile = async (req, res) => {
    try {
        // on peut récupérer les informations de l'utilisateur à partir du jeton JWT
        const userId = req.user.userId; // si on a stocké l'ID de l'utilisateur dans le jeton JWT
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};


// Fonction pour mettre à jour le mot de passe de l'utilisateur connecté
const updatePassword = async (req, res) => {
    try {
        // on peut récupérer l'ID de l'utilisateur à partir du jeton JWT
        const userId = req.user.userId; // si on a stocké l'ID de l'utilisateur dans le jeton JWT
        const { newPassword } = req.body;
        // Mettre à jour le mot de passe dans la base de données
        await User.findByIdAndUpdate(userId, { password: newPassword });
        res.status(200).json({ message: 'Password updated successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

// Fonction pour mettre à jour les informations de l'utilisateur connecté
const updateUserInfo = async (req, res) => {
    try {
        // on peut récupérer l'ID de l'utilisateur à partir du jeton JWT
        const userId = req.user.userId; // si on a stocké l'ID de l'utilisateur dans le jeton JWT
        const { username, email } = req.body;
        // Mettre à jour les informations dans la base de données
        await User.findByIdAndUpdate(userId, { username, email });
        res.status(200).json({ message: 'User information updated successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

const adminRoute = (req, res) => {
    // Cette route est uniquement accessible aux admins
    res.json({ message: 'Admin area' });
  };

module.exports = {
    registerUser,
    getAllUsers,
    getUserById,
    updateUserById,
    deleteUserById,
    login,
    logout,
    getUserProfile,
    updatePassword,
    updateUserInfo,
    adminRoute
};

