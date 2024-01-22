const jwt = require('jsonwebtoken');


const verifyToken = (req, res, next) => {
    const token = req.headers.authorization;



    //Checking if the token is null
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized - No token provided' });
    }



    //Verifying if the token is valid.

    jwt.verify(token, 'aditya', (err, decodedToken) => {
        if (err) {
            return res.status(401).json({ message: 'Unauthorized - Invalid token' });
        }

        req.userId = decodedToken.id;
        next();
    });
};

module.exports = {
    verifyToken
};