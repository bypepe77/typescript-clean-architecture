import 'reflect-metadata';
import Server from "./infrastructure/api/server";
import Database from "./infrastructure/database/connection";
import './infrastructure/config/diContainer';


const databse = new Database('mongodb://localhost:27017/typescript');
const server = new Server(3000, databse);
server.start();