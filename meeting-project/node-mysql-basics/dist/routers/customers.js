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
const express_1 = require("express");
const customers_1 = require("../controllers/customers");
const router = (0, express_1.Router)();
// firstName
// lastName
// email
// point
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const insertId = yield (0, customers_1.save)(req.body);
        insertId
            ? res.send(`Customer ${insertId} inserted!`)
            : res.send('Nothing inserted');
    }
    catch (error) {
        console.log(error);
        res.status(500);
    }
}));
router.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const customer = yield (0, customers_1.find)(req.params.id);
        customer.length ? res.send(customer) : res.sendStatus(404);
    }
    catch (error) {
        console.log(error);
        res.status(500);
    }
}));
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const customer = yield (0, customers_1.find)();
        customer.length ? res.send(customer) : res.sendStatus(404);
    }
    catch (error) {
        console.log(error);
        res.status(500);
    }
}));
router.patch('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const isUpdated = yield (0, customers_1.update)(req.params.id, req.body);
        isUpdated
            ? res.send(`Customer ${req.params.id} updated!`)
            : res.send('Nothing updated');
    }
    catch (error) {
        console.log(error);
        res.status(500);
    }
}));
router.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const isDeleted = yield (0, customers_1.deleteById)(req.params.id);
        isDeleted
            ? res.send(`Customer ${req.params.id} deleted!`)
            : res.send('Nothing deleted');
    }
    catch (error) {
        console.log(error);
        res.status(500);
    }
}));
exports.default = router;
