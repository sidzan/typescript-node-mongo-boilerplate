"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const router = express.Router();
router
    .route("/")
    .get((_, res) => {
    res.status(200).send({ data: "you did a great job" });
});
module.exports = router;
//# sourceMappingURL=apiv2test.route.js.map