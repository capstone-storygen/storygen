const { expect } = require("chai");
const { errorMiddleware } = require("../middlewares/errorMiddleware.js");

describe("Error Middleware", function () {
    it("should return error message and stack trace in development", function () {
        const err = new Error("Test error");
        const req = {};
        const res = {
            statusCode: 500,
            status(code) {
                this.statusCode = code;
                return this;
            },
            json(data) {
                expect(data.message).to.equal("Test error");
                expect(data.stack).to.not.be.undefined;
            },
        };
        const next = function () {};
        errorMiddleware(err, req, res, next);
    });
});
