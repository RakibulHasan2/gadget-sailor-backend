import jwt, { Secret } from 'jsonwebtoken';
import config from '../config/index';
import { Request, Response, NextFunction } from 'express';
import { Users } from '../app/modules/users/user.model';

interface AuthenticatedRequest extends Request {
    decoded?: any;
}

// verify JWT token
export default function verifyJWT(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.status(401).send('unauthorized access')
    }
    const token = authHeader.split(' ')[1];
    jwt.verify(token, config.access_token as Secret, function (err, decoded) {
        if (err) {
            return res.status(403).send({ message: 'forbidden access' })
        }
        req.decoded = decoded;
        next()
    })
}

//  //--------------------------jwt token--------------------
//  app.get('/jwt', async (req, res) => {
//     const email = req.query.email
//     const query = { email: email }
//     const user = await Users.findOne(query)
//     console.log(user)
//     if (user) {
//         const token = jwt.sign({ email }, config.access_token as Secret, { expiresIn: '1d' })
//         return res.send({ accessToken: token })
//     }
//     console.log(user)
//     res.status(403).send({ accessToken: '' })

// })

