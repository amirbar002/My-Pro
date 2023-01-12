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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteById = exports.update = exports.find = exports.save = void 0;
const customers_1 = __importDefault(require("../models/customers"));
const save = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { firstName, lastName, email, points } = data;
        const customer = new customers_1.default(firstName, lastName, email, points ? points : 0);
        const [res] = yield customer.save();
        return res.affectedRows ? res.insertId : null;
    }
    catch (error) {
        console.log(error);
        return null;
    }
});
exports.save = save;
const find = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const [customer] = yield customers_1.default.find(id);
    return customer;
});
exports.find = find;
const update = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const { firstName, lastName, email, points } = data;
    if (firstName === undefined && lastName === undefined && email === undefined && points === undefined)
        return false;
    const customer = new customers_1.default(firstName, lastName, email, points);
    const [res] = yield customer.update(id);
    return res.affectedRows ? true : false;
});
exports.update = update;
const deleteById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const [res] = yield customers_1.default.delete(id);
    return res.affectedRows ? true : false;
});
exports.deleteById = deleteById;
