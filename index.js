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
const promises_1 = require("fs/promises");
const _01_1 = require("./2022/01/01");
const _02_1 = require("./2022/02/02");
(function () {
    return __awaiter(this, void 0, void 0, function* () {
        const [, , day] = process.argv;
        const data = yield (yield (0, promises_1.readFile)(`${__dirname}/2022/${day}/input.txt`)).toString('utf-8');
        switch (day) {
            case '01':
                (0, _01_1.runDayOne)(data);
                break;
            case '02':
                (0, _02_1.runDayTwo)(data);
                break;
            default:
                console.log('Invalid day param');
        }
    });
})();
