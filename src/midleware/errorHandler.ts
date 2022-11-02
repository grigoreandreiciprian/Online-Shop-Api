
import { ErrorRequestHandler, NextFunction, Request, response, Response } from "express";

import HttpException from "./HttpException";




const errorHandler = (err: HttpException, req: Request, res: Response, next: NextFunction) => {
    const status = err.status || 500
    const message = err.message || 'Something went wrong';


    res.status(status)
        .send({
            status,
            message
        })

};
export default errorHandler;
