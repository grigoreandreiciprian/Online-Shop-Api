import { CostumerAtributes } from "./Customer";
import { RequestHandler, Request, Response, NextFunction } from "express";

export interface RequestAuth extends Request {

    user?: CostumerAtributes;
}