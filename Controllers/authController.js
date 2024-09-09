const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../config/db'); // Connexion à la base de données

// Clé secrète pour JWT
const jwtSecret = process.env.JWT_SECRET || 'votre_clé_secrète';

exports.signup = async (req, res) => {
  const { username, password, email, gsm, role } = req.body;

  try {
    // Vérifier si l'utilisateur existe déjà
    db.query('SELECT * FROM users WHERE email = ?', [email], async (err, results) => {
      if (results.length > 0) {
        return res.status(400).json({ message: 'Cet email est déjà utilisé.' });
      }

      // Hacher le mot de passe
      const salt = await bcrypt.genSalt(10);
      const password_hash = await bcrypt.hash(password, salt);

      // Insérer l'utilisateur dans la base de données
      db.query('INSERT INTO users (username, password_hash, email, gsm, role, created_at) VALUES (?, ?, ?, ?, ?, NOW())', 
        [username, password_hash, email, gsm, role], 
        (err, result) => {
          if (err) {
            console.error(err);
            return res.status(500).json({ message: 'Erreur serveur.' });
          }
          res.status(201).json({ message: 'Utilisateur inscrit avec succès.' });
        }
      );
    });
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de l\'inscription.' });
  }
};

exports.login = (req, res) => {
  const { email, password } = req.body;

  // Vérifier si l'utilisateur existe
  db.query('SELECT * FROM users WHERE email = ?', [email], async (err, results) => {
    if (err || results.length === 0) {
      return res.status(400).json({ message: 'Email ou mot de passe incorrect.' });
    }

    const user = results[0];

    // Comparer les mots de passe
    const isMatch = await bcrypt.compare(password, user.password_hash);
    if (!isMatch) {
      return res.status(400).json({ message: 'Email ou mot de passe incorrect.' });
    }

    // Générer un token JWT
    const token = jwt.sign({ id: user.user_id, role: user.role }, jwtSecret, { expiresIn: '1h' });

    res.json({
      message: 'Connexion réussie',
      token,
      user: {
        id: user.user_id,
        username: user.username,
        email: user.email,
        role: user.role
      }
    });
  });
};
