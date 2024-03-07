const jwt=require('jsonwebtoken')

exports.authVerify = (req, res, next) => {
    try {
        let Token = req.headers.token;
        const decoded = jwt.verify(Token, 'secretkey')
        let email = decoded.data.Email
        req.headers.email = email
        next()   
    } catch (error) {
        res.json({status: 'fail', data: error})
    }
}