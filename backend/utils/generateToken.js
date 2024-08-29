import jwt from 'jsonwebtoken';

const generateTokenAndSetCookie = (userId, res) => {
    const token = jwt.sign({userId}, process.env.JWT_SECRET, {
        expiresIn: '120d'
    })

    res.cookie("jwt", token, {
        maxAge: 120 * 24 * 60 * 60 * 1000, // Milisecond
        httpOnly: true, // prevent cross-site scripting attacks
        sameSite: "strict", // cross-site request forgery attacks
        secure: process.env.NODE_ENV !== "development",
    });
};

export default generateTokenAndSetCookie;