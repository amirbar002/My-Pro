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
const db_1 = __importDefault(require("../db"));
class Customer {
    constructor(firstName, lastName, email, points) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.points = points;
    }
    save() {
        return __awaiter(this, void 0, void 0, function* () {
            const query = `
        insert into customers(first_name, last_name, email, points)
        value ('${this.firstName}', '${this.lastName}', '${this.email}', ${this.points})
    `;
            return yield db_1.default.execute(query);
        });
    }
    static find(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = `
        select * from customers ${id ? `where id = ${id}` : ''}
    `;
            return db_1.default.execute(query);
        });
    }
    update(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const setStatement = `
        ${this.firstName ? `first_name = '${this.firstName}',` : ''}
        ${this.lastName ? `last_name = '${this.lastName}',` : ''}
        ${this.email ? `email = '${this.email}',` : ''}
        ${this.points ? `points = '${this.points}'` : ''}
    `
                .trim().replace(/,$/, '');
            const query = `update customers set
    ${setStatement}
    where id = ${id}`;
            return yield db_1.default.execute(query);
        });
    }
    static delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = `
    delete from customers
    where id = ${id}
    `;
            return yield db_1.default.execute(query);
        });
    }
}
exports.default = Customer;
