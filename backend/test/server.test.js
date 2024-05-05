let chai = require("chai");
let chaiHttp = require("chai-http");
let { app, startServer } = require("../server");

chai.should();
let expect = chai.expect;

chai.use(chaiHttp);

let server;

describe("Server", () => {
    before(async () => {
        server = await startServer();
    });

    it("should return Hello server for GET /", (done) => {
        chai.request(server)
            .get("/")
            .end((err, res) => {
                res.should.have.status(200);
                expect(res.text).to.equal("Hello server");
                done();
            });
    });

    after((done) => {
        server.close(() => {
            done();
        });
    });
});
