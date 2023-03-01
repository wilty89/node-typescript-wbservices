"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notFoundHandler = exports.errorHandler = void 0;
const errorHandler = (error, request, response, next) => {
    const status = error.statusCode || error.status || 500;
    response.status(status).send(error);
};
exports.errorHandler = errorHandler;
const notFoundHandler = (request, response, next) => {
    const message = "Resource not found";
    response.status(404).send(message);
    next(message);
};
exports.notFoundHandler = notFoundHandler;
