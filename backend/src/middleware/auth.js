import jwt from 'jsonwebtoken';
import User from '../models/user.js';

const auth = ( async (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '')
        const decode = jwt.verify(token, 'leandro')
        const user = await User.findOne({ _id: decode._id, 'tokens.token': token })

        if(!user) {
            throw Error()
        }

        req.token = token
        req.user = user
        next();
    }
    catch(e) {
        res.status(401).send({ error: 'Auth Error!'})
    }
})

export default auth;
