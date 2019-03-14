"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ContactController {
    getData(_, res, next) {
        try {
            res.status(200).send({
                data: "coming from controller"
            });
        }
        catch (e) {
            next(e);
        }
    }
}
exports.ContactController = ContactController;
{ }
//# sourceMappingURL=test.controller.js.map