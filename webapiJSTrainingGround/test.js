const assert = require("assert");
const request = require("supertest");

describe("developer API should have endpoints to", () => {
  it("get all developers", function (done) {
    const api = require("./api.js");

    request(api.app)
      .get("/api/developers")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect((res) => {
        assert.strictEqual(res.body.length, 2);
      })
      .expect(200, done);
  });
  it("get developer 1", function (done) {
    const api = require("./api.js");

    request(api.app)
      .get("/api/developers/1")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect((res) => {
        assert.strictEqual(res.body.name, "Oriana");
      })
      .expect(200, done);
  });
  it("Creating a new developer", function (done) {
    const api = require("./api.js");

    request(api.app)
      .post("/api/developers/")
      .set("Accept", "application/json")
      .send({
        name: "Kioto",
        email: "kioto@salt.dev",
        city: "Japan",
      })
      .expect("Content-Type", /json/)
      .expect("location", new RegExp("/api/developers/"))
      .expect((res) => {
        assert.strictEqual(res.body.name, "Kioto");
      })
      .expect(201, done);
  });
});
