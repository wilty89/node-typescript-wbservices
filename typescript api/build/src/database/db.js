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
exports.connectToDB = exports.pool = void 0;
const pg_1 = require("pg");
exports.pool = new pg_1.Pool({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'postgres',
    database: process.env.DB_NAME || 'postgres',
    password: process.env.DB_PASSWORD || 'cono1234',
    port: parseInt(process.env.DB_PORT || "5433"),
});
const connectToDB = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield exports.pool.connect();
    }
    catch (err) {
        console.log(err);
    }
});
exports.connectToDB = connectToDB;
(0, exports.connectToDB)();
/*
  import fs from "fs";
  async function resetDatabase(): Promise<void> {
    const client = new Client(process.env.DB_NAME);
    try {
      console.log("before connect");
      await client.connect();
      console.log("after connect");
      const res = await client.query(fs.readFileSync("../../notas.txt"), [
        "Connection to postgres successful!",
      ]);
      console.log("connected", res.rows[0].connected);
    } catch (err) {
      console.error(err);
    }
    await client.end();
  }
  
  resetDatabase()
    .then((a) => console.log("ok", a))
    .catch((a) => console.log("no", a));
    */ 
