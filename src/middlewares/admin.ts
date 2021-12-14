import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken"; 

export function admin(req: Request, res: Response, next: NextFunction) {

    if(!req.headers.authorization)
        return res.status(401).end();

    const [, token] = req.headers.authorization.split(" ");

    if(!token)
        return res.status(401).end();

    try {
        const decode = verify(token, "TOKEN HASH");
        return next();
    } catch (err) {
        return res.status(401).end();
    }
}