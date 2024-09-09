const jwt = require('jsonwebtoken');
const jwtSecret = process.env.JWT_SECRET || 'votre_clé_secrète';

exports.verifyToken = (req, res, next) => {
  const token = req.header('Authorization').replace('Bearer ', '');

  if (!token) {
    return res.status(403).json({ message: 'Accès interdit. Aucun token fourni.' });
  }

  try {
    const decoded = jwt.verify(token, jwtSecret);
    req.user = decoded; // L'utilisateur est maintenant disponible dans req.user
    next();
  } catch (err) {
    res.status(401).json({ message: 'Token invalide.' });
  }
};
