const chai = require("chai");
const chaiHttp = require("chai-http");
const {
    generateStory,
    messageHistory,
    resetMessageHistory,
} = require("../controllers/storyController.js");
let { app, startServer } = require("../server");

chai.should();
let expect = chai.expect;

let server;

describe("Story Controller", function () {
    // test for generateStory
    before(async () => {
        server = await startServer(); // Start the server before the tests
    });

    it("should generate a story", function (done) {
        this.timeout(5000);
        chai.request(server)
            .post("/api/story")
            .send({ prompt: "Once upon a time..." })
            .end((err, res) => {
                if (err) {
                    console.error("Error during request:", err);
                    done(err); // Pass error to done callback
                    return;
                }
                try {
                    expect(res).to.have.status(200);
                    done(); // Call done callback to indicate test completion
                } catch (assertionError) {
                    console.error("Assertion error:", assertionError);
                    done(assertionError); // Pass assertion error to done callback
                }
            });
    });

    it("should reset message history", function (done) {
        chai.request(server)
            .post("/api/story/resetMessages")
            .end((err, res) => {
                expect(res).to.have.status(200);
                done();
            });
    });

    after((done) => {
        console.log("After done server close");
        server.close(() => {
            done(); // Close the server after the tests
        });
    });
});
