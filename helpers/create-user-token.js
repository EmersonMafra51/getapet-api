const jwt = require('jsonwebtoken');

const createUserToken = async( user, req, res) =>{

    // CREATE TOKEN
    const token =  jwt.sign({
        name: user.name,
        id: user._id
    }, "nossosecret")

    //RETURN TOKEN
    res.status(200).json({
        message: 'Você está autenticado',
        token: token,
        userId: user._id,
    })

}

module.exports =createUserToken