"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetch = void 0;
const express_1 = require("express");
const idex_1 = require("../controller/idex");
const services_1 = require("../controller/services");
const router = (0, express_1.Router)();
const fetch = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(req.params);
        return res.status(200).send("success");
    }
    catch (err) {
        console.log(err);
    }
});
exports.fetch = fetch;
router.get("/dogs/:breed/:name", exports.fetch);
router.get("/links", idex_1.getUsers);
router.get("/links:id'", idex_1.getUserById);
router.get("/axios", services_1.getPosts);
/*
router.use((req, res, next) => {
    const error = new Error('not found');
    return res.status(404).json({
        message: error.message,
        page:"problema"
    });
});
*/
exports.default = router;
