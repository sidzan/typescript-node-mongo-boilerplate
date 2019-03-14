import {NextFunction, Request, Response} from "express";

export class ContactController {

    public getData(_: Request, res: Response, next: NextFunction) {
        try {
            res.status(200).send({
                                     data: "coming from controller"
                                 });
        } catch (e) {
            next(e);
        }
    }
}{}
